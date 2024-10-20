import { BottomTabsNavigationParams } from 'ui/navigation/bottom-tabs/types';

export type RootNavigationParams = {
  WelcomeScreen: undefined;
  HybridAuthScreen: undefined;
  CodeConfirmScreen: { authType: 'phone' | 'email'; authData: string };
  FinishSignUpScreen: undefined;
  BottomTabsNavigation: { screen?: keyof BottomTabsNavigationParams };
  ProfileScreen: undefined;
  AccountScreen: undefined;
  FeedbackScreen: undefined;
  AboutAppScreen: undefined;
  DocumentsScreen: undefined;
  AboutUserScreen: undefined;
};
