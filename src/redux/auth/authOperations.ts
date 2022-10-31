import { createAsyncThunk } from "@reduxjs/toolkit";
import { logInApi, verificationLogInApi } from "../../services/authApi";
import { getAlbumsApi, getUserApi } from "../../services/userApi";

import type {
  Credentials,
  VerifyData,
  VeryfyResToStore,
} from "../../types/authTypes";

export const logInThunk = createAsyncThunk<
  Credentials,
  Credentials,
  { rejectValue: string }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const data = await logInApi(credentials);

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const verificationThunk = createAsyncThunk<
  VeryfyResToStore,
  VerifyData,
  { rejectValue: string }
>("auth/verify", async (credentials, { rejectWithValue }) => {
  try {
    const token = await verificationLogInApi(credentials);
    const userData = await getUserApi();
    const albums = await getAlbumsApi();

    return { ...userData, ...token, albums };
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
