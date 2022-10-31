import { createSlice } from "@reduxjs/toolkit";

import { AllAlbumsStore } from "../../types/albumsType";
import { verificationThunk } from "../auth/authOperations";
import { getUserDataThunk } from "../user/userOperations";
import { getAlbumsThunk } from "./albumsOperations";

const initialState: AllAlbumsStore = {
  allAlbums: [],
};

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verificationThunk.fulfilled, (state, { payload }) => {
        state.allAlbums = payload.albums;
      })
      .addCase(getUserDataThunk.fulfilled, (state, { payload }) => {
        state.allAlbums = payload.albums;
      })
      .addCase(getAlbumsThunk.fulfilled, (state, { payload }) => {
        state.allAlbums = [...payload];
      });
  },
});

export default albumsSlice.reducer;
