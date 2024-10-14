export type ISignUpSlice = {
  currentTab: SignUpTypes.EMAIL | SignUpTypes.PHONE;
};

export enum SignUpTypes {
  EMAIL = 'email',
  PHONE = 'phone',
}
