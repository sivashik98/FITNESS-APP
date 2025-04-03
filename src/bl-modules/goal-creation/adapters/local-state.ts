import { useRef, useState } from 'react';
import { ICarouselInstance } from 'react-native-reanimated-carousel';

import { STEPS } from 'bl-modules/auth/finish-sign-up/adapters/constants';

export const useGoalCreationLocalState = () => {
  const [progress, setProgress] = useState(100 / STEPS.length);
  const [step, setStep] = useState<number>(0);
  const [goalDate, setGoalDate] = useState('');
  const [currentWeight, setCurrentWeight] = useState(0);
  const [wishedWeight, setWishedWeight] = useState(0);
  const carouselRef = useRef<ICarouselInstance>(null);

  return { carouselRef, setProgress, setStep, progress, step, goalDate, setGoalDate, currentWeight, setCurrentWeight, wishedWeight, setWishedWeight };
};
