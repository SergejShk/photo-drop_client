import { RootState } from "../store";

export const selfieUploadedStore = (state: RootState) => state.user.selfieUploaded;

export const getSelfieStore = (state: RootState) => state.user.selfie;

export const getUserNameStore = (state: RootState) => state.user.name;

export const getUserEmailStore = (state: RootState) => state.user.email;

export const getUserPhoneStore = (state: RootState) => state.user.number;
