import { createAsyncThunk } from "@reduxjs/toolkit";
import { logInApi } from "../../services/authApi";

import type { Credentials } from "../../types/auth";

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
