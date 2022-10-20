import { createSlice } from "@reduxjs/toolkit";
import { addSelfieThunk, getUserDataThunk } from "./userOperations";

import type { UserType } from "../../types/userTypes";

const initialState: UserType = {
  number: "",
  email: "",
  name: "",
  selfie: "",
  selfieUploaded: false,
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addSelfieThunk.fulfilled, (state, { payload }) => {
        state.selfieUploaded = true;
        state.selfie = payload;
      })
      .addCase(getUserDataThunk.fulfilled, (state, { payload }) => {
        state.number = payload.number;
        state.email = payload.email;
        state.name = payload.name;
        state.selfie = payload.selfie;
      });
  },
});

export default userSlice.reducer;
