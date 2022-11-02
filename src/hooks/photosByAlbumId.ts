import { Albums } from "../types/albumsType";

export const getAlbumAndPhotosByAlbumId = (albums: Albums, albumId: string) => {
  const album = albums.find((album) => album.id === albumId);

  return album ? { album } : {};
};
