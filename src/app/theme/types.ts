import { DARK_THEME, LIGHT_THEME } from 'app/theme/themes';

type AppThemes = {
  light: typeof LIGHT_THEME;
  dark: typeof DARK_THEME;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
