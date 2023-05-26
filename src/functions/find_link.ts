/**
 *
 * @param data drupal response object
 * @returns
 */

export const find_link = (data) => {
  const [entity_type, bundle] = data.type.split("--");

  const entity_id = data?.attributes?.[`drupal_internal__${entity_type[0]}id`]

  let link = data?.attributes?.path?.alias;

  if (link) return link;

  return `/${entity_type}/${entity_id}`;
  

};
