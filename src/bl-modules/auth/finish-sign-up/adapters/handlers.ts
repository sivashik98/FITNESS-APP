import { useCallback, useMemo } from 'react';
import { KeyboardController } from 'react-native-keyboard-controller';
import Toast from 'react-native-toast-message';

import { GenderTypes } from 'ui/components/gender-picker/types';
import { STEPS } from 'bl-modules/auth/finish-sign-up/adapters/constants';
import { DateService, LocalStorageService, NavigationService } from 'tools/services';
import { useFinishSignUpLocalState } from 'bl-modules/auth/finish-sign-up/adapters/local-state';
import { BirthDateFormFields, FullNameFormFields, useFinishSignUpForm } from 'bl-modules/auth/finish-sign-up/adapters/form';
import { useFinishSignUpRtkq } from 'bl-modules/auth/finish-sign-up/adapters/rtkq';
import { LSKeys } from 'tools/services/local-storage/types';
import { useUserInfoAdapter } from 'bl-modules/user/user-info';

export const useFinishSignUpHandlers = (
  localState: ReturnType<typeof useFinishSignUpLocalState>,
  form: ReturnType<typeof useFinishSignUpForm>,
  rtkq: ReturnType<typeof useFinishSignUpRtkq>,
  userInfoAdapter: ReturnType<typeof useUserInfoAdapter>,
) => {
  const submitHandler = (data: FullNameFormFields) => {
    const gender = localState.activeGender;
    const birthday = localState.birthDate;
    console.log({ gender, birthday, ...data });
    rtkq
      .register({ gender, birthday, ...data })
      .unwrap()
      .then((res) => {
        console.log(`register success: ${JSON.stringify(res)}`);
        Toast.show({
          type: 'success',
          text1: 'Успешная регистрация',
        });
        LocalStorageService.set(LSKeys.LSIsAuthorized, true);
        userInfoAdapter.handlers
          .onRefetchUser()
          .then(() => {
            console.log(`getUser success: ${JSON.stringify(res)}`);
            NavigationService.navigate('BottomTabsNavigation');
          })
          .catch((error) => {
            console.log(`getUser error: ${JSON.stringify(error)}`);
          });
      })
      .catch((error) => {
        console.log(`register error: ${JSON.stringify(error)}`);
        Toast.show({
          type: 'error',
          text1: 'Неудачная регистрация',
        });
      });
  };
  const birthDateHandler = async (data: BirthDateFormFields) => {
    if (data.birthday) {
      const formattedDate = DateService.format(data.birthday, 'yyyy-MM-dd');
      localState.setBirthDate(formattedDate);
      await goNextStep();
    }
  };
  const onChangeStep = useCallback(
    (index: number) => {
      localState.setStep(index);
      const isLastStep = index + 1 === STEPS.length;
      const calculated = 100 / (STEPS.length - index);
      localState.setProgress(isLastStep ? calculated * 0.95 : calculated * 0.8);
    },
    [localState.setStep, localState.setProgress],
  );
  const goNextStep = useCallback(async () => {
    localState.carouselRef.current?.next();
    await KeyboardController.dismiss();
  }, [localState.carouselRef]);
  const goPrevStep = useCallback(async () => {
    localState.carouselRef.current?.prev();
    await KeyboardController.dismiss();
  }, [localState.carouselRef]);
  const stepHandlers: { [key: number]: () => void } = useMemo(
    () => ({
      0: goNextStep,
      1: form.birthDate.handleSubmit(birthDateHandler),
      2: form.fullName.handleSubmit(submitHandler),
    }),
    [goNextStep, form, submitHandler],
  );
  const onChangeGender = (gender: GenderTypes) => localState.setActiveGender(gender);

  return { stepHandlers, onChangeStep, goPrevStep, onChangeGender };
};
