import { useCallback } from 'react';
import Toast from 'react-native-toast-message';

import { useCodeConfirmLocalState } from 'bl-modules/auth/code-confirm/adapters/local-state';
import { CodeConfirmFormFields } from 'bl-modules/auth/code-confirm/adapters/form';
import { useCodeConfirmNavigation } from 'bl-modules/auth/code-confirm/adapters/navigation';
import { useCodeConfirmRtkq } from 'bl-modules/auth/code-confirm/adapters/rtkq';
import { useHybridAuthAdapter } from 'bl-modules/auth/hybrid-auth/adapters/adapter';
import { LocalStorageService, NavigationService, StringsService } from 'tools/services';
import { LSKeys } from 'tools/services/local-storage/types';
import { useAppActions } from 'app/store/actions';

export const useCodeConfirmHandlers = (
  localState: ReturnType<typeof useCodeConfirmLocalState>,
  navigation: ReturnType<typeof useCodeConfirmNavigation>,
  rtkq: ReturnType<typeof useCodeConfirmRtkq>,
  hybridAuthAdapter: ReturnType<typeof useHybridAuthAdapter>,
) => {
  const { appStateActions } = useAppActions();

  const submitAuthHandler = useCallback((data: CodeConfirmFormFields) => {
    console.log(`auth method = ${navigation.method} | auth data = ${navigation.method}`);
    if (navigation.method === 'phone') {
      console.log({ code: data.code, country_code: '+7', number: StringsService.excludeAllSymbolsExceptNumbers(navigation.data) });
      rtkq
        .phoneSubmit({
          phone: {
            code: '+7',
            number: StringsService.excludeAllSymbolsExceptNumbers(navigation.data),
          },
          sms_code: data.code,
        })
        .unwrap()
        .then((res) => {
          console.log(`phoneSubmit success - ${JSON.stringify(res)}`);
          const { access_token, refresh_token } = res.payload;
          LocalStorageService.set(LSKeys.LSKeyAccessToken, access_token);
          LocalStorageService.set(LSKeys.LSKeyRefreshToken, refresh_token);
          appStateActions.setRefreshToken(refresh_token);
          Toast.show({
            type: 'success',
            text1: 'Код с телефона успешно подтвержден',
          });
          rtkq
            .getUser()
            .unwrap()
            .then((res) => {
              const { isRegistered } = res.payload;
              console.log(`getUser success - ${JSON.stringify(res)}`);
              if (isRegistered) NavigationService.navigate('BottomTabsNavigation');
              else NavigationService.navigate('FinishSignUpScreen');
            })
            .catch((error) => {
              NavigationService.goBack();
              console.log(`getUser error - ${JSON.stringify(error)}`);
            });
        })
        .catch((error) => {
          console.log(`phoneSubmit error - ${JSON.stringify(error.data)}`);
          Toast.show({
            type: 'error',
            text1: 'Ошибка подтверждения кода с телефона',
          });
        });
    }
    if (navigation.method === 'email') {
      console.log({ code: data.code, email: navigation.data });
      rtkq
        .emailSubmit({ email_code: data.code, email: navigation.data })
        .unwrap()
        .then((res) => {
          console.log(`emailSubmit success - ${JSON.stringify(res)}`);
          const { access_token, refresh_token } = res.payload;
          LocalStorageService.set(LSKeys.LSKeyAccessToken, access_token);
          LocalStorageService.set(LSKeys.LSKeyRefreshToken, refresh_token);
          appStateActions.setRefreshToken(refresh_token);
          Toast.show({
            type: 'success',
            text1: 'Код с email успешно подтвержден',
          });
          rtkq
            .getUser()
            .unwrap()
            .then((res) => {
              const { isRegistered } = res.payload;
              console.log(`getUser success - ${JSON.stringify(res)}`);
              if (isRegistered) {
                NavigationService.navigate('BottomTabsNavigation');
                LocalStorageService.set(LSKeys.LSIsAuthorized, true);
              } else NavigationService.navigate('FinishSignUpScreen');
            })
            .catch((error) => {
              NavigationService.goBack();
              console.log(`getUser error - ${JSON.stringify(error)}`);
            });
        })
        .catch((error) => {
          console.log(`emailSubmit error - ${JSON.stringify(error.data)}`);
          Toast.show({
            type: 'error',
            text1: 'Ошибка подтверждения кода с email',
          });
        });
    }
  }, []);

  const submitEditHandler = useCallback((data: CodeConfirmFormFields) => {
    console.log(`edit method = ${navigation.method} | edit data = ${navigation.data}`);
    if (navigation.method === 'phone') {
      console.log({ code: data.code, country_code: '+7', number: StringsService.excludeAllSymbolsExceptNumbers(navigation.data) });
      rtkq
        .phoneUpdate({
          phone: {
            code: '+7',
            number: StringsService.excludeAllSymbolsExceptNumbers(navigation.data),
          },
          sms_code: data.code,
        })
        .unwrap()
        .then((res) => {
          console.log(`phoneEdit success - ${JSON.stringify(res)}`);
          Toast.show({
            type: 'success',
            text1: 'Код с телефона успешно подтвержден',
          });
          rtkq
            .getUser()
            .unwrap()
            .then((res) => {
              console.log(`getUser success - ${JSON.stringify(res)}`);
              NavigationService.popTo('AccountScreen');
            })
            .catch((error) => {
              console.log(`getUser error - ${JSON.stringify(error)}`);
            });
        })
        .catch((error) => {
          console.log(`phoneEdit error - ${JSON.stringify(error.data)}`);
          Toast.show({
            type: 'error',
            text1: 'Ошибка подтверждения кода с телефона',
          });
        });
    }
    if (navigation.method === 'email') {
      console.log({ code: data.code, email: navigation.data });
      rtkq
        .emailUpdate({ email_code: data.code, email: navigation.data })
        .unwrap()
        .then((res) => {
          console.log(`emailEdit success - ${JSON.stringify(res)}`);
          Toast.show({
            type: 'success',
            text1: 'Код с email успешно подтвержден',
          });
          rtkq
            .getUser()
            .unwrap()
            .then((res) => {
              console.log(`getUser success - ${JSON.stringify(res)}`);
              NavigationService.popTo('AccountScreen');
            })
            .catch((error) => {
              console.log(`getUser error - ${JSON.stringify(error)}`);
            });
        })
        .catch((error) => {
          console.log(`emailEdit error - ${JSON.stringify(error.data)}`);
          Toast.show({
            type: 'error',
            text1: 'Ошибка подтверждения кода с email',
          });
        });
    }
  }, []);

  const enableTimer = () => {
    localState.setShouldShowTimer(true);
    hybridAuthAdapter.handlers.onRequestCode(true)(navigation.method === 'phone' ? { phone: navigation.data } : { email: navigation.data });
  };

  return {
    submitHandler: navigation.type === 'auth' ? submitAuthHandler : submitEditHandler,
    enableTimer,
  };
};
