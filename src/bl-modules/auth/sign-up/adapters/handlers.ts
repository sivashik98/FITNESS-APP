import { useCallback } from 'react';

import { useAppActions } from 'app/store/actions';
import { useAppSelector } from 'app/store/store';
import { SignUpWithEmailFormFields, SignUpWithPhoneFormFields } from 'bl-modules/auth/sign-up/adapters/form';
import { NavigationService } from 'tools/services';
import { SignUpTypes } from 'bl-modules/auth/sign-up/slice/types';

export const useSignUpHandlers = () => {
  const { signUpActions } = useAppActions();
  const { setCurrentTab } = signUpActions;
  const { currentTab } = useAppSelector((store) => store.signUpReducer);

  const submitHandler = useCallback((data: SignUpWithEmailFormFields | SignUpWithPhoneFormFields) => {
    console.log(data);
    const signUpType = currentTab === SignUpTypes.PHONE ? SignUpTypes.PHONE : SignUpTypes.EMAIL;
    const formData = currentTab === SignUpTypes.PHONE ? data.phone : data.email;
    NavigationService.navigate('CodeConfirmScreen', { signUpType, formData });
    // Keyboard.dismiss()
    // GlobalLoading.show()
    // rtkqData.login
    // .submit({
    //   ...data,
    //   ...DeviceInfoService.store,
    //   token: REACT_APP_CAPTCHA_STATIC_TOKEN,
    // })
    // .unwrap()
    // .then(res => loginAdapter.handlers.onLogin(res, data))
    // .catch(e => {
    //   if (HandleErrorsService.getErrorStatus(e) === 10100) {
    //     loginAdapter.handlers.onEmailConfirmationRequired(data)
    //   } else {
    //     Toast.show({
    //       type: 'error',
    //       text1: 'Error(s):',
    //       text2: e?.data?.message || 'something went wrong',
    //     })
    //   }
    // })
    // .finally(() => GlobalLoading.hide())
  }, []);

  return { setCurrentTab, submitHandler };
};
