import { Albums } from "../types/albumsType";

export const getPhotosByAlbumId = (albums: Albums, albumId: string) => {
  const album = albums.find((album) => album.id === albumId);

  return album ? album.photos : [];
};
