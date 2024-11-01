import { useAccountForm } from 'bl-modules/profile/account/adapters/form';
import { GenderTypes } from 'ui/components/gender-picker/types';
import Toast from 'react-native-toast-message';
import { useAccountLocalState } from 'bl-modules/profile/account/adapters/local-state';
// @ts-ignore
export const useAccountHandlers = (form: ReturnType<typeof useAccountForm>, localState: ReturnType<typeof useAccountLocalState>) => {
  // @ts-ignore
  const submitHandler = (data) => {
    console.log(data);
    Toast.show({
      type: 'success',
      text1: 'Данные успешно изменены ',
    });
  };

  const onChangeGender = (gender: GenderTypes) => localState.setActiveGender(gender);

  return { onChangeGender, submitHandler };
};
