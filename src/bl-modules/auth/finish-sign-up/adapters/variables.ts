import { useMemo } from 'react';

import { STEPS } from 'bl-modules/auth/finish-sign-up/adapters/constants';
import { useFinishSignUpLocalState } from 'bl-modules/auth/finish-sign-up/adapters/local-state';
import { useFinishSignUpHandlers } from 'bl-modules/auth/finish-sign-up/adapters/handlers';

export const useFinishSignUpVariables = (
  localState: ReturnType<typeof useFinishSignUpLocalState>,
  handlers: ReturnType<typeof useFinishSignUpHandlers>
) => {
  const isLastStep = useMemo(() => localState.step === STEPS.length - 1, []);
  const stepHandlers = useMemo(
    () => ({
      0: () => localState.goNextStep(),
      1: () => handlers.submitHandler,
    }),
    [localState.goNextStep, handlers.submitHandler]
  );

  return { isLastStep, stepHandlers };
};
