import axios from "axios";

import type { Credentials, VerifyData } from "../types/authTypes";

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
