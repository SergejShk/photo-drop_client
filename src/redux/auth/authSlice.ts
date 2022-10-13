import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logInThunk, verificationThunk } from "./authOperations";

type Auth = {
  accessToken: string;
  number: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
};

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
  reducers: {},

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

      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
