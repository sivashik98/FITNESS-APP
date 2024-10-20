import { useMemo } from 'react';

import { STEPS } from 'bl-modules/auth/finish-sign-up/adapters/constants';
import { useFinishSignUpLocalState } from 'bl-modules/auth/finish-sign-up/adapters/local-state';
import { useFinishSignUpHandlers } from 'bl-modules/auth/finish-sign-up/adapters/handlers';
import { useFinishSignUpForm } from 'bl-modules/auth/finish-sign-up/adapters/form';

export const useFinishSignUpVariables = (
  localState: ReturnType<typeof useFinishSignUpLocalState>,
  handlers: ReturnType<typeof useFinishSignUpHandlers>,
  form: ReturnType<typeof useFinishSignUpForm>
) => {
  const isLastStep = useMemo(() => localState.step === STEPS.length - 1, [localState.step]);
  const isFirstStep = useMemo(() => localState.step === 0, [localState.step]);
  const stepHandlers: { [key: number]: () => void } = useMemo(
    () => ({
      0: localState.goNextStep,
      1: form.fullName.handleSubmit(handlers.submitHandler),
    }),
    [localState.goNextStep, handlers.submitHandler, form.fullName]
  );

  return { isLastStep, isFirstStep, stepHandlers };
};
