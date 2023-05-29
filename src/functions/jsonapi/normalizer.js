const normalizer = (resp) => {
    if (!resp.included) return resp
    const includeMap = getIncludeMap(resp.included)
    includedRelations(resp, includeMap)
    include(resp, includeMap)
  }
  
  const include = (resp, includeMap) => {
    // add relationships to data
    if (Array.isArray(resp.data)) {
      resp.data.forEach((item) => {
        for (const [field, relation] of Object.entries(item.relationships)) {
          const data = relation.data
          if (Array.isArray(data) && data[0]) {
            const type = data[0].type
            if (includeMap[type]) {
              data.forEach((r, i) => {
                if (includeMap[type][r.id]) {
                  data[i] = { ...r, ...includeMap[type][r.id] }
                }
              })
            }
          } else if (data.id) {
            const type = data.type
            const id = data.id
            if (includeMap[type]?.[id]) {
              relation.data = { ...data, ...includeMap[type][id] }
            }
          }
        }
      })
    } else {
      for (const [field, relation] of Object.entries(resp.data.relationships)) {
        const data = relation.data
        if (!data) continue
        if (Array.isArray(data) && data[0]) {
          const type = data[0].type
          if (includeMap[type]) {
            data.forEach((r, i) => {
              if (includeMap[type][r.id]) {
                data[i] = { ...r, ...includeMap[type][r.id] }
              }
            })
          }
        } else if (data.id) {
          const type = data.type
          const id = data.id
          if (includeMap[type]?.[id]) {
            relation.data = { ...data, ...includeMap[type][id] }
          }
        }
      }
    }
  
    // delete included for memory
    delete resp.included
  }
  
  const includedRelations = (resp, includeMap) => {
    resp.included.forEach((item) => {
      includeRelationsRec(item.relationships, includeMap, {})
    })
  }
  
  const includeRelationsRec = (relationships, includeMap, relationsPath) => {
    if (!relationships) return
  
    // add this level relations
    for (const [field, relation] of Object.entries(relationships)) {
      if (!relationsPath[field]) relationsPath[field] = {}
  
      const data = relation.data
      if (!data) return
      if (Array.isArray(data) && data[0]) {
        const type = data[0].type
        if (includeMap[type]) {
          data.forEach((r, i) => {
            if (includeMap[type][r.id]) {
              data[i] = { ...r, ...includeMap[type][r.id] }
            }
          })
        }
      } else if (data.id) {
        const type = data.type
        const id = data.id
        if (includeMap[type]?.[id]) {
          relation.data = { ...data, ...includeMap[type][id] }
        }
      }
    }
  
    // search for inner relations
    for (const [field, relation] of Object.entries(relationships)) {
      if (relation?.data?.relationships) {
        includeRelationsRec(
          relation.data.relationships,
          includeMap,
          relationsPath[field]
        )
      }
    }
  }
  
  export const getIncludeMap = (included) => {
    if (!included) return {}
    let includeMap = {}
    included.forEach((item) => {
      const type = item.type
      const id = item.id
  
      if (!includeMap[type]) {
        includeMap[type] = {}
      }
  
      includeMap[type][id] = item
    })
    return includeMap
  }
  
  export default normalizer
  