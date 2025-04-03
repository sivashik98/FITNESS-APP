import { BottomTabsNavigationParams } from 'ui/navigation/bottom-tabs/types';
import { AuthTabs } from 'bl-modules/auth/hybrid-auth/adapters/local-state';

export type RootNavigationParams = {
  WelcomeScreen: undefined;
  HybridAuthScreen: { tab: AuthTabs; shouldHideSegmentControl?: boolean; title: string; canGoBack?: boolean; type: 'edit' | 'auth' };
  CodeConfirmScreen: { method: AuthTabs['type']; data: string; type: 'edit' | 'auth' };
  FinishSignUpScreen: undefined;
  BottomTabsNavigation: { screen?: keyof BottomTabsNavigationParams };
  ProfileScreen: undefined;
  AccountScreen: undefined;
  FeedbackScreen: undefined;
  AboutAppScreen: undefined;
  DocumentsScreen: undefined;
  AboutUserScreen: undefined;
  PrivacyPolicyScreen: undefined;
  WorkoutScreen: undefined;
  ArticlesScreen: undefined;
  GoalCreationPreviewScreen: undefined;
  GoalCreationStepsScreen: undefined;
  GoalCreationFinishScreen: { goal: string; onCreateGoal: () => void };
};
