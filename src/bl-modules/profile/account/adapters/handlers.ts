import Toast from 'react-native-toast-message';

import { useAccountForm } from 'bl-modules/profile/account/adapters/form';
import { GenderTypes } from 'ui/components/gender-picker/types';
import { useAccountLocalState } from 'bl-modules/profile/account/adapters/local-state';
import { useAccountRtkq } from 'bl-modules/profile/account/adapters/rtkq';
import { DateService, NavigationService } from 'tools/services';
import { useUserInfoAdapter } from 'bl-modules/user/user-info';

export const useAccountHandlers = (
  form: ReturnType<typeof useAccountForm>,
  localState: ReturnType<typeof useAccountLocalState>,
  rtkq: ReturnType<typeof useAccountRtkq>,
  userInfoAdapter: ReturnType<typeof useUserInfoAdapter>,
) => {
  const submitHandler = form.account.handleSubmit((data) => {
    if (data.birthday) {
      const formattedDate = DateService.format(data.birthday, 'yyyy-MM-dd');
      console.log(`submitHandler = ${JSON.stringify({ ...data, birthday: formattedDate, gender: localState.activeGender })}`);
      rtkq
        .update({ ...data, birthday: formattedDate, gender: localState.activeGender })
        .unwrap()
        .then((data) => {
          console.log(`update success: ${JSON.stringify(data)}`);
          Toast.show({
            type: 'success',
            text1: 'Данные успешно изменены ',
          });
          userInfoAdapter.handlers.onRefetchUser();
        })
        .catch((error) => {
          console.log(`update error: ${JSON.stringify(error)}`);
          Toast.show({
            type: 'error',
            text1: 'Ошибка изменения данных',
          });
        });
    }
  });
  const onChangeEmail = () => {
    NavigationService.push('HybridAuthScreen', {
      tab: { type: 'email', index: 0 },
      title: 'Укажите новый адрес электронной почты',
      shouldHideSegmentControl: true,
      canGoBack: true,
      type: 'edit',
    });
  };
  const onChangePhone = () => {
    NavigationService.push('HybridAuthScreen', {
      tab: { type: 'phone', index: 1 },
      title: 'Укажите новый номер телефона',
      shouldHideSegmentControl: true,
      canGoBack: true,
      type: 'edit',
    });
  };
  const onChangeGender = (gender: GenderTypes) => localState.setActiveGender(gender);

  return { onChangeGender, submitHandler, onChangeEmail, onChangePhone };
};
