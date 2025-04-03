import { UnistylesRuntime } from 'react-native-unistyles';

import { useAppActions } from 'app/store/actions';
import { useAppSelector } from 'app/store/store';
import { ThemeTypes } from 'bl-modules/app-state/slice/types';
import { LocalStorageService } from 'tools/services';
import { LSKeys } from 'tools/services/local-storage/types';

export const useAppStateHandlers = () => {
  const { appStateActions } = useAppActions();
  const { theme } = useAppSelector((state) => state.appStateReducer);

  const toggleSystemTheme = () => {
    const newTheme = theme !== ThemeTypes.system ? ThemeTypes.system : ThemeTypes.light;

    appStateActions.setTheme(newTheme);
    LocalStorageService.set(LSKeys.LSTheme, newTheme);
    UnistylesRuntime.setAdaptiveThemes(newTheme === ThemeTypes.system);
  };
  const toggleTheme = () => {
    const newTheme = theme !== ThemeTypes.dark ? ThemeTypes.dark : ThemeTypes.light;

    appStateActions.setTheme(newTheme);
    LocalStorageService.set(LSKeys.LSTheme, newTheme);
    UnistylesRuntime.setTheme(newTheme);
    UnistylesRuntime.setAdaptiveThemes(false);
  };

  return {
    toggleSystemTheme,
    toggleTheme,
  };
};
