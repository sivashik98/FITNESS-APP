import { useCallback, useMemo } from 'react';
import { KeyboardController } from 'react-native-keyboard-controller';
import Toast from 'react-native-toast-message';

import { GenderTypes } from 'ui/components/gender-picker/types';
import { STEPS } from 'bl-modules/auth/finish-sign-up/adapters/constants';
import { NavigationService } from 'tools/services';
import { useFinishSignUpLocalState } from 'bl-modules/auth/finish-sign-up/adapters/local-state';
import { useFinishSignUpForm } from 'bl-modules/auth/finish-sign-up/adapters/form';

export const useFinishSignUpHandlers = (localState: ReturnType<typeof useFinishSignUpLocalState>, form: ReturnType<typeof useFinishSignUpForm>) => {
  // @ts-ignore
  const submitHandler = useCallback((data: any) => {
    // const gender = localState.activeGender;
    // console.log({ gender, ...data });
    NavigationService.navigate('BottomTabsNavigation');
    Toast.show({
      type: 'success',
      text1: 'Успешная регистрация!',
    });
  }, []);
  // @ts-ignore
  const birthDateHandler = (data: any) => {
    // console.log(data);
    goNextStep();
  };
  const onChangeStep = useCallback(
    (index: number) => {
      localState.setStep(index);
      const isLastStep = index + 1 === STEPS.length;
      const calculated = 100 / (STEPS.length - index);
      localState.setProgress(isLastStep ? calculated * 0.95 : calculated * 0.8);
    },
    [localState.setStep, localState.setProgress]
  );
  const goNextStep = useCallback(() => {
    localState.carouselRef.current?.next();
    KeyboardController.dismiss();
  }, [localState.carouselRef]);
  const goPrevStep = useCallback(() => {
    localState.carouselRef.current?.prev();
    KeyboardController.dismiss();
  }, [localState.carouselRef]);
  const stepHandlers: { [key: number]: () => void } = useMemo(
    () => ({
      0: goNextStep,
      1: form.birthDate.handleSubmit(birthDateHandler),
      2: form.fullName.handleSubmit(submitHandler),
    }),
    [goNextStep, form, submitHandler]
  );
  const onChangeGender = (gender: GenderTypes) => localState.setActiveGender(gender);

  return { stepHandlers, onChangeStep, goPrevStep, onChangeGender };
};
