export type AppStateType = {
  isAuthorized: boolean;
  theme: ThemeTypes;
  refreshToken: string;
};

export enum ThemeTypes {
  dark = 'dark',
  light = 'light',
  system = 'system',
}
