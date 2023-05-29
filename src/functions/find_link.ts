/**
 *
 * @param data drupal response object
 * @param data drupal response object
 * @returns
 */

export const find_link = (data, pre_path) => {
  const [entity_type, bundle] = data.type.split("--");

  const entity_id = data?.attributes?.[`drupal_internal__${entity_type[0]}id`]

  let link = data?.attributes?.path?.alias;

  if (link) return pre_path ? `/${pre_path}${link}` : link;

  link = `/${entity_type}/${entity_id}`

  return pre_path ? `/${pre_path}${link}` : link;
  

};
