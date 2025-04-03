import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { RootNavigation } from 'ui/navigation/root/root';
import { ToastSuccess, ToastError } from 'ui/components';

import { navigationRef } from 'tools/services/navigation/navigation';
import { useAppLaunchAdapter } from 'bl-modules/app-launch';
import { useAppStateAdapter } from 'bl-modules/app-state';

const toastConfig = {
  success: ToastSuccess,
  error: ToastError,
};

export const Navigation: FC<{}> = ({}) => {
  const { variables: appLaunchVariables } = useAppLaunchAdapter();
  const { variables: appStateVariables } = useAppStateAdapter();

  return (
    <NavigationContainer
      ref={navigationRef}
      fallback={null}
      // onReady={onReady}
    >
      <StatusBar translucent animated style={appStateVariables.isSystemTheme ? 'auto' : appStateVariables.isDarkTheme ? 'light' : 'dark'} />
      <RootNavigation initialScreen={appLaunchVariables.initialScreen} />
      <Toast config={toastConfig} visibilityTime={1650} />
    </NavigationContainer>
  );
};
