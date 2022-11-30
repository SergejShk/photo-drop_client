import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAlbumsApi,
  getUserApi,
  prepareSelfieData,
  saveAvatar,
  updateUserData,
} from "../../api/userApi";
import { RootState } from "../store";

import type { GetUserType, UserDataToUpdate } from "../../types/userTypes";

export const getUserDataThunk = createAsyncThunk<
  GetUserType,
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
    const albums = await getAlbumsApi();

    return { ...data, albums };
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

    const data = await getUserApi();

    return data.selfie;
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
