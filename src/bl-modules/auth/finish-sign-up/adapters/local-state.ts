import { useRef, useState } from 'react';
import { ICarouselInstance } from 'react-native-reanimated-carousel';

import { GenderTypes } from 'ui/components/gender-picker/types';
import { STEPS } from 'bl-modules/auth/finish-sign-up/adapters/constants';

export const useFinishSignUpLocalState = () => {
  const [progress, setProgress] = useState(100 / STEPS.length);
  const [step, setStep] = useState<number>(0);
  const [activeGender, setActiveGender] = useState<GenderTypes>(GenderTypes.NOT_SPECIFIED);
  const carouselRef = useRef<ICarouselInstance>(null);

  return { carouselRef, activeGender, setProgress, setStep, setActiveGender, progress, step };
};
