import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { UserType } from "../../types/userTypes";

const initialState: UserType = {
  number: "",
  email: "",
  name: "",
  selfie: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

    // extraReducers: (builder) => {
    //   builder
    //     .addCase(logInThunk.pending, (state) => {
    //       state.error = null;
    //     })
    //     .addCase(logInThunk.fulfilled, (state, { payload }) => {
    //       state.number = payload.number;
    //       state.error = null;
    //     })
    //     .addCase(verificationThunk.pending, (state) => {
    //       state.error = null;
    //     })
    //     .addCase(verificationThunk.fulfilled, (state, { payload }) => {
    //       state.accessToken = payload.token;
    //       state.isLoggedIn = true;
    //       state.number = "";
    //       state.error = null;
    //     })

    //     .addMatcher(isError, (state, action: PayloadAction<string>) => {
    //       state.isLoading = false;
    //       state.error = action.payload;
    //     });
    // },
});

export default userSlice.reducer;
