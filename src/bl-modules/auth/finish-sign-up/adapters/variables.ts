import { useMemo } from 'react';

import { STEPS } from 'bl-modules/auth/finish-sign-up/adapters/constants';
import { useFinishSignUpLocalState } from 'bl-modules/auth/finish-sign-up/adapters/local-state';

export const useFinishSignUpVariables = (localState: ReturnType<typeof useFinishSignUpLocalState>) => {
  const progress = localState.progress;
  const isLastStep = useMemo(() => localState.step === STEPS.length - 1, [localState.step]);
  const isFirstStep = useMemo(() => localState.step === 0, [localState.step]);
  const carouselRef = localState.carouselRef;
  const step = localState.step;
  const activeGender = localState.activeGender;

  return { isLastStep, isFirstStep, progress, carouselRef, step, activeGender };
};
