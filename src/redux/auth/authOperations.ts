import { createAsyncThunk } from "@reduxjs/toolkit";
import { logInApi, verificationLogInApi } from "../../services/authApi";

import type { Credentials, VerifyData, Token } from "../../types/authTypes";

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
  Token,
  VerifyData,
  { rejectValue: string }
>("auth/verify", async (credentials, { rejectWithValue }) => {
  try {
    const data = await verificationLogInApi(credentials);

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
