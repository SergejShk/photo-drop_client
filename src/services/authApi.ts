import axios from "axios";

import type { Credentials, VerifyData, PreparedData } from "../types/auth";

axios.defaults.baseURL =
  "https://77hfz4zquh.execute-api.eu-west-2.amazonaws.com/dev";

export const saveToken = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const logInApi = async (creadentials: Credentials) => {
  const { data } = await axios.post("/client/sendOtp", creadentials);

  return data;
};

export const verificationLogInApi = async (creadentials: VerifyData) => {
  const { data } = await axios.post("client/verifyOtp", creadentials);
  saveToken.set(data.token);

  return data;
};

export const prepareSelfieData = async (extension: Object) => {
  const { data } = await axios.post("/client/selfie", extension);
  console.log(data);
  return {
    method: data.data.method,
    url: data.data.url,
    fields: data.data.fields,
  };
};

export const saveAvatar = async (preparedData: PreparedData) => {
  axios.defaults.baseURL = "";

  const { data } = await axios.put(`${preparedData.url}`);

  console.log(data);
};
