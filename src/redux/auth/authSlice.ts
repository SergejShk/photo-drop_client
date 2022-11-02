import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logInThunk, verificationThunk } from "./authOperations";

import type { Auth } from "../../types/authTypes";
import {
  addSelfieThunk,
  getUserDataThunk,
  updateUserDataThunk,
} from "../user/userOperations";
import { getPurcaseLinkThunk } from "../albums/albumsOperations";

const initialState: Auth = {
  accessToken: "",
  number: "",
  isLoggedIn: false,
  isLoading: false,
  isLoadingData: false,
  error: null,
};

const authSlice = createSlice({
  name: "authCl",
  initialState,
  reducers: {
    resetNumber(state, { payload }) {
      state.number = payload;
    },
    resetAccessToken(state, { payload }) {
      state.accessToken = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(logInThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.number = payload.number;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(verificationThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verificationThunk.fulfilled, (state, { payload }) => {
        state.accessToken = payload.token;
        state.isLoggedIn = true;
        state.number = "";
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserDataThunk.pending, (state) => {
        state.isLoadingData = true;
      })
      .addCase(getUserDataThunk.fulfilled, (state) => {
        state.isLoadingData = false;
      })
      .addCase(addSelfieThunk.pending, (state) => {
        state.isLoadingData = true;
      })
      .addCase(addSelfieThunk.fulfilled, (state) => {
        state.isLoadingData = false;
      })
      .addCase(updateUserDataThunk.pending, (state) => {
        state.isLoadingData = true;
      })
      .addCase(updateUserDataThunk.fulfilled, (state) => {
        state.isLoadingData = false;
      })
      .addCase(getPurcaseLinkThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPurcaseLinkThunk.fulfilled, (state) => {
        state.isLoading = false;
      })

      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoadingData = false;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetNumber, resetAccessToken } = authSlice.actions;

export default authSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
