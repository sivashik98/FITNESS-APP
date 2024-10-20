import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { RootNavigation } from 'ui/navigation/root/root';
import { navigationRef } from 'tools/services/navigation/navigation';

// import { navigationRef } from 'services/Navigation'

export const Navigation: FC<{}> = ({}) => {
  // const { isAuthorized } = useAppSelector(state => state.authorization)

  return (
    <NavigationContainer
      ref={navigationRef}
      fallback={null}
      // onReady={onReady}
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
