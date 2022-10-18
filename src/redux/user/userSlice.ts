import { createSlice } from "@reduxjs/toolkit";
import { addSelfieThunk } from "./userOperations";

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
    builder.addCase(addSelfieThunk.fulfilled, (state, { payload }) => {
      state.selfieUploaded = true;
    });
  },
});

export default userSlice.reducer;
