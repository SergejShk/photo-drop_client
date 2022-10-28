import { createSlice } from "@reduxjs/toolkit";

import { AllAlbumsStore } from "../../types/albumsType";
import { getAlbumsThunk } from "./albumsOperations";

const initialState: AllAlbumsStore = {
  allAlbums: [],
};

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAlbumsThunk.fulfilled, (state, { payload }) => {
      state.allAlbums = [...payload];
    });
  },
});

export default albumsSlice.reducer;
