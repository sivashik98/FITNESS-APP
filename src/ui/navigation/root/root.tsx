import { createStackNavigator } from '@react-navigation/stack';
import { RootNavigationParams } from './types';
import { FC } from 'react';

import {
  WelcomeScreen,
  HybridAuthScreen,
  FinishSignUpScreen,
  CodeConfirmScreen,
  DocumentsScreen,
  AboutAppScreen,
  ProfileScreen,
  FeedbackScreen,
  AccountScreen,
} from 'ui/screens';
import { BottomTabsNavigation } from 'ui/navigation/bottom-tabs/bottom-tabs';

const Stack = createStackNavigator<RootNavigationParams>();

export const RootNavigation: FC<{}> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'BottomTabsNavigation'}
    >
      <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
      <Stack.Screen name={'HybridAuthScreen'} component={HybridAuthScreen} />
      <Stack.Screen name={'CodeConfirmScreen'} component={CodeConfirmScreen} />
      <Stack.Screen name={'FinishSignUpScreen'} component={FinishSignUpScreen} />
      <Stack.Screen name={'BottomTabsNavigation'} component={BottomTabsNavigation} />
      <Stack.Screen name={'DocumentsScreen'} component={DocumentsScreen} />
      <Stack.Screen name={'AboutAppScreen'} component={AboutAppScreen} />
      <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
      <Stack.Screen name={'FeedbackScreen'} component={FeedbackScreen} />
      <Stack.Screen name={'AccountScreen'} component={AccountScreen} />
    </Stack.Navigator>
  );
};
