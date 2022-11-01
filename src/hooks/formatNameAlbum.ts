export const formatNameAlbum = (name: string, maxLength: number) => {
  let result = "";

  if (name.length <= maxLength) {
    result = name;
  } else {
    result = name.slice(0, maxLength) + "...";
  }

  return result;
};
