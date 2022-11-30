import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAlbumsApi, getPurchaseLinkApi } from "../../api/userApi";
import { Albums } from "../../types/albumsType";

export const getAlbumsThunk = createAsyncThunk<
  Albums,
  undefined,
  { rejectValue: string }
>("albums/getAlbums", async (_, { rejectWithValue }) => {
  try {
    const data = await getAlbumsApi();

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const getPurcaseLinkThunk = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("albums/getPurcaseLink", async (albumId, { rejectWithValue }) => {
  try {
    const link = await getPurchaseLinkApi(albumId);

    return link;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
