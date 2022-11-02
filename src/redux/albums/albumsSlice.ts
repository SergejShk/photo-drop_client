import { createSlice } from "@reduxjs/toolkit";

import { AllAlbumsStore } from "../../types/albumsType";
import { verificationThunk } from "../auth/authOperations";
import { getUserDataThunk } from "../user/userOperations";
import { getAlbumsThunk, getPurcaseLinkThunk } from "./albumsOperations";

const initialState: AllAlbumsStore = {
  allAlbums: [],
  purchaseLink: "",
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
      })
      .addCase(getPurcaseLinkThunk.fulfilled, (state, { payload }) => {
        state.purchaseLink = payload;
      });
  },
});

export default albumsSlice.reducer;
