import { UnistylesRegistry } from 'react-native-unistyles';

import { DARK_THEME, LIGHT_THEME } from 'app/theme/themes';

UnistylesRegistry.addThemes({
  light: LIGHT_THEME,
  dark: DARK_THEME,
}).addConfig({
  adaptiveThemes: true,
});
