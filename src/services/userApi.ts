import axios from "axios";
import { saveToken } from "./authApi";
import { Buffer } from "buffer";

import type { addSelfieDataType, UserDataToUpdate } from "../types/userTypes";

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

export const saveAvatar = async (selfieData: addSelfieDataType) => {
  const { file, url } = selfieData;
  const buf = Buffer.from(
    file!.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );

  const data = await fetch(url, {
    method: "put",
    headers: { ContentEncoding: "base64", "Content-Type": "image/jpeg" },
    body: buf,
  });

  return data;
};

export const updateUserData = async (dataToUpd: UserDataToUpdate) => {
  const { data } = await axios.put("/client", dataToUpd);

  return data;
};
