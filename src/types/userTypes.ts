import { Albums } from "./albumsType";

export type UserType = {
  number: string;
  email: string;
  name: string;
  selfie: string;
  selfieUploaded: boolean;
};

export type GetUserType = {
  number: string;
  email: string;
  name: string;
  selfie: string;
  selfieUploaded: boolean;
  albums: Albums;
};

export type UserDataToUpdate = {
  name?: string;
  email?: string;
};

export type addSelfieDataType = {
  url: string;
  file: string | null;
};
