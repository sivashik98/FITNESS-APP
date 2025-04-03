import { useCallback, useMemo } from 'react';
import { KeyboardController } from 'react-native-keyboard-controller';
import { ru } from 'date-fns/locale';
import Toast from 'react-native-toast-message';

import { STEPS } from 'bl-modules/auth/finish-sign-up/adapters/constants';
import { DateService, NavigationService } from 'tools/services';
import { CurrentWeightFormFields, GoalDateFormFields, useGoalCreationForm, WishedWeightFormFields } from 'bl-modules/goal-creation/adapters/form';
import { useGoalCreationLocalState } from 'bl-modules/goal-creation/adapters/local-state';
import { useGoalCreationRtkq } from 'bl-modules/goal-creation/adapters/rtkq';

export const useGoalCreationHandlers = (
  form: ReturnType<typeof useGoalCreationForm>,
  localState: ReturnType<typeof useGoalCreationLocalState>,
  rtkq: ReturnType<typeof useGoalCreationRtkq>,
) => {
  const submitHandler = () => {
    const target_date = localState.goalDate;
    const initial_weight = localState.currentWeight;
    const target_weight = localState.wishedWeight;
    console.log({ target_date, initial_weight, target_weight });
    rtkq
      .createGoal({
        initial_weight,
        target_weight,
        target_date,
      })
      .unwrap()
      .then((res) => {
        console.log(`create goal success: ${JSON.stringify(res)}`);
        Toast.show({
          type: 'success',
          text1: 'Цель успешно создана',
        });
      })
      .catch((error) => {
        console.log(`create goal error: ${JSON.stringify(error)}`);
        Toast.show({
          type: 'error',
          text1: 'Не удалось создать цель',
        });
      })
      .finally(() => NavigationService.popTo('BottomTabsNavigation'));
  };
  const goalDateHandler = async (data: GoalDateFormFields) => {
    if (data.goalDate) {
      const formattedDate = DateService.format(data.goalDate, 'yyyy-MM-dd');
      localState.setGoalDate(formattedDate);
      await goNextStep();
    }
  };
  const currentWeightHandler = async (data: CurrentWeightFormFields) => {
    if (data.currentWeight) {
      localState.setCurrentWeight(data.currentWeight);
      await goNextStep();
    }
  };
  const wishedWeightHandler = async (data: WishedWeightFormFields) => {
    if (data.wishedWeight) {
      localState.setWishedWeight(data.wishedWeight);
      const goal = localState.goalDate ? `${data.wishedWeight}кг, к ${DateService.format(localState.goalDate, 'd MMMM yyyy', { locale: ru })}` : '';
      if (data.wishedWeight === localState.currentWeight) {
        form.wishedWeight.setError('wishedWeight', { message: 'Целевой вес не может быть равен текущему' });
      } else {
        form.wishedWeight.clearErrors('wishedWeight');
        NavigationService.navigate('GoalCreationFinishScreen', { goal, onCreateGoal: submitHandler });
      }
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
      0: form.goalDate.handleSubmit(goalDateHandler),
      1: form.currentWeight.handleSubmit(currentWeightHandler),
      2: form.wishedWeight.handleSubmit(wishedWeightHandler),
    }),
    [form, localState.goalDate, localState.wishedWeight],
  );

  return { stepHandlers, onChangeStep, goPrevStep };
};
