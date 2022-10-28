import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAlbumsApi } from "../../services/userApi";
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
