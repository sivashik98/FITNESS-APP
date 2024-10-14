import { useCallback } from 'react';
import { AppStateStatus } from 'react-native';

import { useCodeConfirmLocalState } from 'bl-modules/auth/code-confirm/adapters/local-state';
import { CodeConfirmFormFields } from 'bl-modules/auth/code-confirm/adapters/form';
import { DateService, NavigationService } from 'tools/services';

export const useCodeConfirmHandlers = (localState: ReturnType<typeof useCodeConfirmLocalState>) => {
  const submitHandler = useCallback((data: CodeConfirmFormFields) => {
    console.log(data);
    NavigationService.navigate('FinishSignUpScreen');
  }, []);

  const backgroundTimerHandler = useCallback(
    (state: AppStateStatus) => {
      if (state === 'background') {
        const timestamp = new Date().getTime();
        localState.setDurationOutsideApp(timestamp);
        clearInterval(localState.timerId.current);
      }
      if (state === 'active') {
        const timestamp = new Date().getTime();
        const difference = DateService.getDifferenceInSeconds(timestamp, localState.durationOutsideApp);
        if (localState.duration - difference < 1) {
          clearInterval(localState.timerId.current);
          localState.disableTimer();
          localState.setDuration(0);
        } else {
          localState.setDuration(localState.duration - difference);
          localState.timerId.current = setInterval(() => localState.setDuration((prevState) => prevState - 1), 1000);
        }
        localState.resetDurationOutsideApp();
      }
    },
    [
      localState.setDurationOutsideApp,
      localState.timerId.current,
      localState.durationOutsideApp,
      localState.duration,
      localState.disableTimer,
      localState.setDuration,
      localState.resetDurationOutsideApp,
    ]
  );

  return { submitHandler, backgroundTimerHandler };
};
