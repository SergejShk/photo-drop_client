export type Setting = {
  id: string;
  label: string;
  status: boolean;
};

export type AllSettings = {
  settings: Setting[];
};
