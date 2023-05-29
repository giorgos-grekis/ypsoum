export const find_img_alt = (fileMeta, img_id, title) => {
  let alt = title;

  if (fileMeta[img_id]) {
    alt = fileMeta[img_id].alt;
  }

  return alt;
};
