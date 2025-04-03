import { useAppSelector } from 'app/store/store';
import { ThemeTypes } from 'bl-modules/app-state/slice/types';

export const useAppStateVariables = () => {
  const { theme, isAuthorized } = useAppSelector((state) => state.appStateReducer);

  const isDarkTheme = theme === ThemeTypes.dark;
  const isSystemTheme = theme === ThemeTypes.system;

  return {
    isDarkTheme,
    isSystemTheme,
    isAuthorized,
  };
};
