import { useCallback, useRef, useState } from 'react';
import { ICarouselInstance } from 'react-native-reanimated-carousel';
import { KeyboardController } from 'react-native-keyboard-controller';

import { GenderTypes } from 'components/gender-picker/types';
import { STEPS } from 'bl-modules/auth/finish-sign-up/adapters/constants';

export const useFinishSignUpLocalState = () => {
  const [progress, setProgress] = useState(100 / STEPS.length);
  const [step, setStep] = useState<number>(0);
  const [activeGender, setActiveGender] = useState<GenderTypes>(GenderTypes.NOT_SPECIFIED);
  const carouselRef = useRef<ICarouselInstance>(null);

  const goNextStep = useCallback(() => {
    carouselRef.current?.next();
    KeyboardController.dismiss();
  }, [carouselRef.current?.next]);
  const goPrevStep = useCallback(() => {
    carouselRef.current?.prev();
    KeyboardController.dismiss();
  }, [carouselRef.current?.prev]);
  const onChangeStep = useCallback(
    (index: number) => {
      setStep(index);
      const isLastStep = index + 1 === STEPS.length;
      const calculated = 100 / (STEPS.length - index);
      setProgress(isLastStep ? calculated * 0.95 : calculated * 0.8);
    },
    [setStep]
  );

  return { carouselRef, goNextStep, goPrevStep, activeGender, setActiveGender, progress, onChangeStep, step };
};
