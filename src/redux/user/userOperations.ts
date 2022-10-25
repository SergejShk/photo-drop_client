import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./../store";
import {
  getUserApi,
  prepareSelfieData,
  saveAvatar,
  updateUserData,
} from "../../services/userApi";

import type { UserDataToUpdate, UserType } from "../../types/userTypes";

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

export const addSelfieThunk = createAsyncThunk<
  string,
  string | null,
  { rejectValue: string }
>("user/addSelfie", async (file, { rejectWithValue }: string | any) => {
  try {
    const { url } = await prepareSelfieData({ extension: "jpg" });
    await saveAvatar({ url, file });

    const avatar = url.split("?")[0];

    return avatar;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const updateUserDataThunk = createAsyncThunk<
  UserDataToUpdate,
  UserDataToUpdate,
  { rejectValue: string }
>("user/updateUser", async (newData, { rejectWithValue }: string | any) => {
  try {
    await updateUserData(newData);

    return newData;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
