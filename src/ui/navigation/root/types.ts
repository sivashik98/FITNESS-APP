import { SignUpTypes } from 'bl-modules/auth/sign-up/slice/types';

export type RootNavigationParams = {
  WelcomeScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  CodeConfirmScreen: { signUpType: SignUpTypes; formData: string };
  FinishSignUpScreen: undefined;

  // SignupEmailConfirmScreen: undefined
  // SigninEmailConfirmScreen: undefined
  // TwoFaConfirmScreen: undefined
  // CreatePasswordScreen: undefined
  // ForgotPasswordScreen: undefined
  // ForgotPasswordEmailConfirmScreen: undefined
  // ForgotPassword2FaCodeScreen: undefined
  // RecoveryPasswordScreen: undefined
  // RecoveryPasswordCompletedScreen: undefined
  // RegistrationCompletedScreen: undefined
  // BottomTabsNavigation: { screen?: keyof BottomTabsNavigationParamsMap }
  // HelpTopicScreen: { type: 'fill' | 'mint' | 'burn' | 'stripe'; title: string }
  // CryptoSendScreen: {
  //   currencyKey?: Currency['key']
  // }
  // CryptoMigrateScreen: {
  //   currencyKey?: Currency['key']
  // }
  // CryptoDepositScreen: {
  //   currencyKey?: Currency['key']
  // }
  // AccountsListScreen: undefined
};
