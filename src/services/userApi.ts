import axios from "axios";
import { saveToken } from "./authApi";

import type { PreparedData } from "../types/authTypes";
import type { UserDataToUpdate } from "../types/userTypes";

export const getUserApi = async (persistedToken: string) => {
  saveToken.set(persistedToken);
  const { data } = await axios.get("client");

  return data;
};

export const prepareSelfieData = async (extension: Object) => {
  const { data } = await axios.post("/client/selfie", extension);

  return {
    method: data.data.method,
    url: data.data.url,
    fields: data.data.fields,
  };
};

export const saveAvatar = async (preparedData: PreparedData, avatar: File) => {
  axios.defaults.baseURL = "";
  console.log(avatar);
  const { data } = await axios.put(`${preparedData.url}`, avatar);

  console.log(data);
};

export const updateUserData = async (dataToUpd: UserDataToUpdate) => {
  const { data } = await axios.put("/client", dataToUpd);

  return data;
};
