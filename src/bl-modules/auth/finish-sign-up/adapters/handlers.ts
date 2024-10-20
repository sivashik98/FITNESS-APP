import { useCallback } from 'react';

import { useFinishSignUpLocalState } from 'bl-modules/auth/finish-sign-up/adapters/local-state';
import { useFinishSignUpForm } from 'bl-modules/auth/finish-sign-up/adapters/form';
import { NavigationService } from 'tools/services';

export const useFinishSignUpHandlers = (localState: ReturnType<typeof useFinishSignUpLocalState>, form: ReturnType<typeof useFinishSignUpForm>) => {
  const submitHandler = useCallback((data: any) => {
    const gender = localState.activeGender;
    console.log({ gender, ...data });
    NavigationService.navigate('BottomTabsNavigation');
  }, []);

  return { submitHandler };
};
