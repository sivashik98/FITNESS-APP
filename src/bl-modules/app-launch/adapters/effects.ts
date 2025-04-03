import { useCallback, useEffect } from 'react';
import { UnistylesRuntime } from 'react-native-unistyles';
import { Appearance } from 'react-native';

import { LocalStorageService } from 'tools/services';
import { LSKeys } from 'tools/services/local-storage/types';
import { ThemeTypes } from 'bl-modules/app-state/slice/types';
import { useAppActions } from 'app/store/actions';
import { useAppLaunchLocalState } from 'bl-modules/app-launch/adapters/local-state';
import { useAppSelector } from 'app/store/store';
import { RootNavigationParams } from 'ui/navigation/root/types';

export const useAppLaunchEffects = (localState: ReturnType<typeof useAppLaunchLocalState>) => {
  const { appStateActions } = useAppActions();
  const { isAuthorized } = useAppSelector((state) => state.appStateReducer);
  const theme = LocalStorageService.getString(LSKeys.LSTheme);

  const setIsAuthorized = useCallback(() => {
    // Check is user authorized
    const isAuthorized = !!LocalStorageService.getBoolean(LSKeys.LSIsAuthorized);
    appStateActions.setIsAuthorized(isAuthorized);
  }, []);
  const setRefreshToken = useCallback(() => {
    const refreshToken = LocalStorageService.getString(LSKeys.LSKeyRefreshToken) || '';
    appStateActions.setRefreshToken(refreshToken);
  }, []);
  const setTheme = useCallback(() => {
    if (theme === ThemeTypes.system || !!theme) {
      UnistylesRuntime.setAdaptiveThemes(true);
      LocalStorageService.set(LSKeys.LSTheme, ThemeTypes.system);
      appStateActions.setTheme(ThemeTypes.system);
    }
    if (theme === ThemeTypes.dark) {
      UnistylesRuntime.setAdaptiveThemes(false);
      UnistylesRuntime.setTheme(ThemeTypes.dark);
      appStateActions.setTheme(ThemeTypes.dark);
      Appearance.setColorScheme('dark');
    }
    if (theme === ThemeTypes.light) {
      UnistylesRuntime.setAdaptiveThemes(false);
      UnistylesRuntime.setTheme(ThemeTypes.light);
      appStateActions.setTheme(ThemeTypes.light);
      Appearance.setColorScheme('light');
    }
  }, [theme]);
  const getInitialScreen = useCallback(() => {
    const screenName: keyof RootNavigationParams = isAuthorized ? 'BottomTabsNavigation' : 'WelcomeScreen';
    localState.setInitialScreen(screenName);
  }, [isAuthorized]);

  // initialize before app is launched
  useEffect(() => {
    setTheme();
    setIsAuthorized();
    setRefreshToken();
    localState.setIsStoresHydrated(true);
  }, []);

  useEffect(() => {
    if (localState.isStoresHydrated) getInitialScreen();
  }, [localState.isStoresHydrated]);
};
