import { useMemo } from 'react';
import { addDays, addYears } from 'date-fns';

import { STEPS } from 'bl-modules/auth/finish-sign-up/adapters/constants';

import { useGoalCreationLocalState } from 'bl-modules/goal-creation/adapters/local-state';

export const useGoalCreationVariables = (localState: ReturnType<typeof useGoalCreationLocalState>) => {
  const progress = localState.progress;
  const isLastStep = useMemo(() => localState.step === STEPS.length - 1, [localState.step]);
  const isFirstStep = useMemo(() => localState.step === 0, [localState.step]);
  const carouselRef = localState.carouselRef;
  const step = localState.step;
  //
  const minimumGoalDate = addDays(new Date(), 7); // Минимум через неделю
  const maximumGoalDate = addYears(new Date(), 3); // Ограничение в 1 год

  return { isLastStep, isFirstStep, progress, carouselRef, step, minimumGoalDate, maximumGoalDate };
};
