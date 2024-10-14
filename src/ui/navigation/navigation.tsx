import React, { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { RootNavigation } from 'navigation/root';
import { navigationRef } from 'tools/services/navigation/navigation';
import { StatusBar } from 'expo-status-bar';
// import { NAVIGATIONS_COLORS } from 'configs/Theme/colors'
// import { navigationRef } from 'services/Navigation'

export const Navigation: FC<{}> = ({}) => {
  // const { isAuthorized } = useAppSelector(state => state.authorization)

  return (
    <NavigationContainer
      ref={navigationRef}
      fallback={null}
      // onReady={onReady}
      // theme={{
      //   dark: false,
      //   colors: NAVIGATIONS_COLORS,
      // }}
    >
      <StatusBar translucent />
      <RootNavigation />
      {/*{isAuthorized && <MenuModal />}*/}
      {/*<ModalComponent />*/}
      {/*<LanguagesModal />*/}
      {/*<GlobalLoading />*/}
      {/*<PopUp />*/}
    </NavigationContainer>
  );
};
