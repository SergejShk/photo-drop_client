export type Photo = {
  original: string;
  thumbnail: string;
};

export type Album = {
  albumId: string;
  cover: string;
  date: string;
  location: string;
  name: string;
  path: string;
  photos: Photo[];
  purchased: boolean;
  userId: number;
};

export type Albums = Album[];

export type AllAlbumsStore = {
  allAlbums: Albums
}