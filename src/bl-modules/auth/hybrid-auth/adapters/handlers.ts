import { Keyboard } from 'react-native';
import { NativeSegmentedControlIOSChangeEvent } from '@react-native-segmented-control/segmented-control';
import Toast from 'react-native-toast-message';

import { HybridAuthPhoneFormFields, HybridAuthEmailFormFields, useHybridAuthForm } from 'bl-modules/auth/hybrid-auth/adapters/form';
import { useHybridAuthLocalState } from 'bl-modules/auth/hybrid-auth/adapters/local-state';
import { useHybridAuthRtkq } from 'bl-modules/auth/hybrid-auth/adapters/rtkq';
import { useHybridAuthNavigation } from 'bl-modules/auth/hybrid-auth/adapters/navigation';
import { NavigationService, StringsService } from 'tools/services';

export const useHybridAuthHandlers = (
  localState: ReturnType<typeof useHybridAuthLocalState>,
  rtkq: ReturnType<typeof useHybridAuthRtkq>,
  navigation: ReturnType<typeof useHybridAuthNavigation>,
  form: ReturnType<typeof useHybridAuthForm>,
) => {
  const onRequestCode = (ignoreNavigateOnSubmit?: boolean) => (data: HybridAuthEmailFormFields | HybridAuthPhoneFormFields) => {
    Keyboard.dismiss();
    console.log('work');
    if ('email' in data) {
      rtkq
        .onSubmitEmail({ ...data })
        .unwrap()
        .then((res) => {
          console.log('res success email - ', res);
          Toast.show({
            type: 'success',
            text1: 'Код успешно отправлен на email',
          });
          if (!ignoreNavigateOnSubmit)
            NavigationService.push('CodeConfirmScreen', { method: localState.tab.type, data: data.email, type: navigation.type });
        })
        .catch((error) => {
          console.log('error email - ', error);
          Toast.show({
            type: 'error',
            text1: 'Ошибка отправки кода на email',
          });
        });
    }
    if ('phone' in data) {
      rtkq
        .onSubmitPhone({ code: '+7', number: StringsService.excludeAllSymbolsExceptNumbers(data.phone) })
        .unwrap()
        .then((res) => {
          console.log(`res success phone - ${JSON.stringify(res)}`);
          Toast.show({
            type: 'success',
            text1: 'Код успешно отправлен на номер телефона',
          });
          if (!ignoreNavigateOnSubmit)
            NavigationService.push('CodeConfirmScreen', { method: localState.tab.type, data: data.phone, type: navigation.type });
        })
        .catch((error) => {
          console.log(`error phone - ${JSON.stringify(error)}`);
          Toast.show({
            type: 'error',
            text1: 'Ошибка отправки кода на номер телефона',
          });
        });
    }
  };

  const submitHandler = form[localState.tab.type].handleSubmit(onRequestCode(false));

  const toggleTab = ({ nativeEvent }: { nativeEvent: NativeSegmentedControlIOSChangeEvent }) =>
    localState.setTab(nativeEvent.selectedSegmentIndex === 0 ? { type: 'email', index: 0 } : { type: 'phone', index: 1 });

  return { submitHandler, toggleTab, onRequestCode };
};
