import { DARK_THEME, LIGHT_THEME } from 'app/theme/themes';

// type IThemeEntity = { [entity: string]: { [entityType: string]: Partial<IThemeOptions> } } | { app: Partial<IThemeOptions> };
// type IThemeOptions = {
//   bg: string;
//   activeBg: string;
//   border: string;
//   text: string;
//   placeholder: string;
//   shadow: string;
// };
// export type AppTheme = Readonly<{ colors: IThemeEntity }>;

type AppThemes = {
  light: typeof LIGHT_THEME;
  dark: typeof DARK_THEME;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
