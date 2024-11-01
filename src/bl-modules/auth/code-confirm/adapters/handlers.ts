import { useCallback } from 'react';

import { useCodeConfirmLocalState } from 'bl-modules/auth/code-confirm/adapters/local-state';
import { CodeConfirmFormFields } from 'bl-modules/auth/code-confirm/adapters/form';
import { NavigationService } from 'tools/services';
import Toast from 'react-native-toast-message';

export const useCodeConfirmHandlers = (localState: ReturnType<typeof useCodeConfirmLocalState>) => {
  // @ts-ignore
  const submitHandler = useCallback((data: CodeConfirmFormFields) => {
    // console.log(data);
    NavigationService.navigate('FinishSignUpScreen');
    Toast.show({
      type: 'success',
      text1: 'Вы успешно подтвердили свой код!',
    });
  }, []);

  const enableTimer = useCallback(() => localState.setShouldShowTimer(true), [localState.setShouldShowTimer]);

  return { submitHandler, enableTimer };
};
