import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
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
  PrivacyPolicyScreen,
  WorkoutScreen,
  ArticlesScreen,
  GoalCreationPreviewScreen,
  GoalCreationStepsScreen,
  GoalCreationFinishScreen,
} from 'ui/screens';
import { BottomTabsNavigation } from 'ui/navigation/bottom-tabs/bottom-tabs';

import { RootNavigationParams } from './types';

const Stack = createStackNavigator<RootNavigationParams>();

export const RootNavigation: FC<{ initialScreen: keyof RootNavigationParams | null }> = ({ initialScreen }) => {
  return initialScreen ? (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialScreen}>
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
      <Stack.Screen name={'PrivacyPolicyScreen'} component={PrivacyPolicyScreen} options={TransitionPresets.ModalTransition} />
      <Stack.Screen name={'WorkoutScreen'} component={WorkoutScreen} options={TransitionPresets.ModalTransition} />
      <Stack.Screen name={'ArticlesScreen'} component={ArticlesScreen} options={TransitionPresets.ModalTransition} />

      {/* Goal Screens */}
      <Stack.Group>
        <Stack.Screen name={'GoalCreationPreviewScreen'} component={GoalCreationPreviewScreen} />
        <Stack.Screen name={'GoalCreationStepsScreen'} component={GoalCreationStepsScreen} />
        <Stack.Screen name={'GoalCreationFinishScreen'} component={GoalCreationFinishScreen} />
      </Stack.Group>
    </Stack.Navigator>
  ) : null;
};
