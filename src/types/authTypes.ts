export type Auth = {
  accessToken: string;
  number: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
};

export type Credentials = {
  number: string;
};

export type Token = {
  token: string;
};

export type VerifyData = {
  number: string;
  code: string;
};

export type PreparedData = {
  method: string;
  url: string;
  fields: {};
};