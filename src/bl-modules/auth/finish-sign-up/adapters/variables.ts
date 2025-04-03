import { useMemo } from 'react';

import { STEPS } from 'bl-modules/auth/finish-sign-up/adapters/constants';
import { useFinishSignUpLocalState } from 'bl-modules/auth/finish-sign-up/adapters/local-state';
import { useFinishSignUpRtkq } from 'bl-modules/auth/finish-sign-up/adapters/rtkq';

export const useFinishSignUpVariables = (localState: ReturnType<typeof useFinishSignUpLocalState>, rtkq: ReturnType<typeof useFinishSignUpRtkq>) => {
  const progress = localState.progress;
  const isLastStep = useMemo(() => localState.step === STEPS.length - 1, [localState.step]);
  const isFirstStep = useMemo(() => localState.step === 0, [localState.step]);
  const carouselRef = localState.carouselRef;
  const step = localState.step;
  const activeGender = localState.activeGender;
  const isLoadingRegister = rtkq.isLoading;

  return { isLastStep, isFirstStep, progress, carouselRef, step, activeGender, isLoadingRegister };
};
