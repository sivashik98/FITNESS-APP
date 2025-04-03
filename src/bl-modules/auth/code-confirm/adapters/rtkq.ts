import { AuthService } from 'app/api/endpoints';
import { UserService } from 'app/api/endpoints';

export const useCodeConfirmRtkq = () => {
  // auth
  const [phoneSubmit, { isLoading: isLoadingPhone, data: phoneData }] = AuthService.usePhoneCodeConfirmMutation();
  const [emailSubmit, { isLoading: isLoadingEmail, data: emailData }] = AuthService.useEmailCodeConfirmMutation();
  // edit
  const [phoneUpdate, { isLoading: isLoadingPhoneUpdate, data: phoneUpdateData }] = UserService.useUpdateUserPhoneMutation();
  const [emailUpdate, { isLoading: isLoadingEmailUpdate, data: emailUpdateData }] = UserService.useUpdateUserEmailMutation();
  //
  const [getUser, { isLoading: isLoadingUser, data: userData }] = UserService.useLazyUserQuery();

  return {
    phoneSubmit,
    emailSubmit,
    isLoadingPhone,
    isLoadingEmail,
    phoneData,
    emailData,
    getUser,
    isLoadingUser,
    userData,
    //
    phoneUpdate,
    isLoadingPhoneUpdate,
    phoneUpdateData,
    //
    emailUpdate,
    isLoadingEmailUpdate,
    emailUpdateData,
  };
};
