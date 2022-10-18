export const isErrorState = (state: any) => state.auth.error;

export const isExistToken = (state: any) => Boolean(state.auth.accessToken);

export const getTokenStore = (state: any) => state.auth.accessToken;

export const isLoadingStore = (state: any) => state.auth.isLoading;

export const getNumber = (state: any) => state.auth.number;

export const getMustCurUser = (state: any) =>
  state.auth.accessToken && !state.auth.isLoggedIn;
