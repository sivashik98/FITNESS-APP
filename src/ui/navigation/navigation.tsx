import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { RootNavigation } from 'ui/navigation/root/root';
import { ToastSuccess, ToastError } from 'ui/components';

import { navigationRef } from 'tools/services/navigation/navigation';

// import { navigationRef } from 'services/Navigation'

const toastConfig = {
  success: ToastSuccess,
  error: ToastError,
};

export const Navigation: FC<{}> = ({}) => {
  // const { isAuthorized } = useAppSelector(state => state.authorization)
  const isAuthorized = false;

  return (
    <NavigationContainer
      ref={navigationRef}
      fallback={null}
      // onReady={onReady}
    >
      <StatusBar translucent />
      <RootNavigation isAuthorized={isAuthorized} />
      {/*{isAuthorized && <MenuModal />}*/}
      {/*<ModalComponent />*/}
      {/*<LanguagesModal />*/}
      {/*<GlobalLoading />*/}
      {/*<PopUp />*/}
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};
