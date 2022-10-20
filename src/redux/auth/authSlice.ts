import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logInThunk, verificationThunk } from "./authOperations";

import type { Auth } from "../../types/authTypes";
import { addSelfieThunk, getUserDataThunk } from "../user/userOperations";

const initialState: Auth = {
  accessToken: "",
  number: "",
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "authCl",
  initialState,
  reducers: {
    resetNumber(state, { payload }) {
      state.number = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(logInThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.number = payload.number;
        state.error = null;
      })
      .addCase(verificationThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(verificationThunk.fulfilled, (state, { payload }) => {
        state.accessToken = payload.token;
        state.isLoggedIn = true;
        state.number = "";
        state.error = null;
      })
      .addCase(getUserDataThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getUserDataThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(addSelfieThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addSelfieThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })

      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetNumber } = authSlice.actions;

export default authSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
