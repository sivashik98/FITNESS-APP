import { useCallback } from 'react';
import { Keyboard } from 'react-native';
import { NativeSegmentedControlIOSChangeEvent } from '@react-native-segmented-control/segmented-control';

import { HybridAuthPhoneFormFields, HybridAuthEmailFormFields } from 'bl-modules/auth/hybrid-auth/adapters/form';
import { useHybridAuthLocalState } from 'bl-modules/auth/hybrid-auth/adapters/local-state';
import { useHybridAuthRtkq } from 'bl-modules/auth/hybrid-auth/adapters/rtkq';
import { NavigationService } from 'tools/services';
import Toast from 'react-native-toast-message';

export const useHybridAuthHandlers = (localState: ReturnType<typeof useHybridAuthLocalState>, rtkq: ReturnType<typeof useHybridAuthRtkq>) => {
  const submitHandler = useCallback(
    async (data: HybridAuthEmailFormFields | HybridAuthPhoneFormFields) => {
      const authMethod = 'phone' in data ? data.phone : data.email;
      Keyboard.dismiss();
      NavigationService.navigate('CodeConfirmScreen', { authMethod });
      Toast.show({
        type: 'success',
        text1: 'Код успешно отправлен!',
      });
      // if ('email' in data) {
      //   // const res = await fetch('https://45.142.44.188/api/auth/email-code', {
      //   //   method: 'POST',
      //   //   body: JSON.stringify({ email: data.email }),
      //   //   headers: { 'Content-Type': 'application/json' },
      //   // });
      //
      //   // console.log(res);
      //
      //   // rtkq
      //   //   .onSubmitEmail({ ...data })
      //   //   .unwrap()
      //   //   .then(() => {
      //   //     rtkq.userInfoActions.setEmail(data.email);
      //   //     NavigationService.navigate('CodeConfirmScreen');
      //   //     // console.log('success email - ', res);
      //   //   })
      //   //   .catch((e) => {
      //   //     Alert.alert('Ошибка авторизации');
      //   //     console.log('error email - ', e);
      //   //   });
      // }
      // if ('phone' in data) {
      //   console.log('phone - ', data);
      //   rtkq
      //     .onSubmitPhone({ country_code: '+7', number: data.phone })
      //     .unwrap()
      //     .then((res) => console.log('success phone - ', res))
      //     .catch((e) => console.log('error phone - ', e));
      // }
    },
    [localState.tab, rtkq.onSubmitEmail, rtkq.onSubmitPhone]
  );

  const toggleTab = ({ nativeEvent }: { nativeEvent: NativeSegmentedControlIOSChangeEvent }) =>
    localState.setTab(nativeEvent.selectedSegmentIndex === 0 ? { type: 'email', index: 0 } : { type: 'phone', index: 1 });

  return { submitHandler, toggleTab };
};
