import React from 'react'

import ErgoPageClient from '@/components/pages/ergoPage/ergoPage'
import include from '@/functions/jsonapi/include'


async function getErgoData(ergo) {

  const path = ergo.join('/')

  const get_drupal_type_res = await fetch(`${process.env.NEXT_PUBLIC_DRUPAL_URL}/wdapi/path`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({path:path})
  })

  const get_drupal_type = await get_drupal_type_res.json()

  const uuid  = get_drupal_type?.entity?.uuid?.value  

  const url = `${process.env.NEXT_PUBLIC_DRUPAL_URL}/jsonapi/node/project/${uuid}?include=field_image`

  const res = await fetch(url,
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      next: { revalidate: 1 }
    }
  )

  // Recommendation: handle errors
  if (!res.ok) {
    throw new Error('Failed to fetch data strengths');
  }

  const data = await res.json();

  return include(data);


}


const EgoPage = async ({ params: { ergo } }) => {


  const data = await getErgoData(ergo)  

  // url -> https://dipsum.webdimension.gr/wdapi/path 
  // method -> post
  // body  ->  "path": "/node/13"


  return (
    <>
      <ErgoPageClient ergo={data}/>
    </>
  )
}

export default EgoPage