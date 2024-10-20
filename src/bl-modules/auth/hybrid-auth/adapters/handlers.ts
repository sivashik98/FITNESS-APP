import { useCallback } from 'react';

import { HybridAuthPhoneFormFields, HybridAuthEmailFormFields } from 'bl-modules/auth/hybrid-auth/adapters/form';
import { NavigationService } from 'tools/services';
import { useHybridAuthLocalState } from 'bl-modules/auth/hybrid-auth/adapters/local-state';

export const useHybridAuthHandlers = (localState: ReturnType<typeof useHybridAuthLocalState>) => {
  const submitHandler = useCallback(
    (data: HybridAuthEmailFormFields | HybridAuthPhoneFormFields) => {
      console.log(data);

      if (localState.tab === 'email') {
        NavigationService.navigate('CodeConfirmScreen', {
          authType: localState.tab,
          authData: data?.email,
        });
      }
      if (localState.tab === 'phone') {
        NavigationService.navigate('CodeConfirmScreen', {
          authType: localState.tab,
          authData: data?.phone,
        });
      }

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
    },
    [localState.tab]
  );

  return { submitHandler };
};
