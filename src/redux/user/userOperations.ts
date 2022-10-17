import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./../store";
import { getUserApi } from "../../services/userApi";

import type { UserType } from "../../types/userTypes";

export const getUserDataThunk = createAsyncThunk<
  UserType,
  undefined,
  { rejectValue: string }
>("user/getData", async (_, { getState, rejectWithValue }) => {
  const state = getState() as RootState;
  const persistedToken = state.auth.accessToken;

  if (!persistedToken) {
    throw new Error("Not authorized");
  }

  try {
    const data = await getUserApi(persistedToken);

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
