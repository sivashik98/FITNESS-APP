import { createStackNavigator } from '@react-navigation/stack';
import { RootNavigationParams } from './types';
import { FC } from 'react';

import { WelcomeScreen, SignUpScreen, SignInScreen, FinishSignUpScreen, CodeConfirmScreen } from 'screens/auth';

const Stack = createStackNavigator<RootNavigationParams>();

export const RootNavigation: FC<{}> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'WelcomeScreen'}
    >
      <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
      <Stack.Screen name={'SignInScreen'} component={SignInScreen} />
      <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
      <Stack.Screen name={'CodeConfirmScreen'} component={CodeConfirmScreen} />
      <Stack.Screen name={'FinishSignUpScreen'} component={FinishSignUpScreen} />

      {/*<Stack.Screen*/}
      {/*  name={'BottomTabsNavigation'}*/}
      {/*  component={BottomTabsNavigation}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
};
