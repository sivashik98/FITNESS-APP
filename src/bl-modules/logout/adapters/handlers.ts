import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';

import { useLogoutRtkq } from 'bl-modules/logout/adapters/rtkq';
import { useAppSelector } from 'app/store/store';

import { LocalStorageService, NavigationService } from 'tools/services';
import { LSKeys } from 'tools/services/local-storage/types';
import { useAppActions } from 'app/store/actions';

export const useLogoutHandlers = (rtkq: ReturnType<typeof useLogoutRtkq>) => {
  const { appStateActions } = useAppActions();
  const { refreshToken } = useAppSelector((state) => state.appStateReducer);

  const logout = () => {
    console.log(`Logout refreshToken = ${JSON.stringify(refreshToken)}`);
    Alert.alert('Вы уверены что хотите выйти?', '', [
      {
        isPreferred: true,
        text: 'Да',
        onPress: () => {
          rtkq
            .logout({ refresh_token: refreshToken })
            .then(() => {
              Toast.show({ type: 'success', text1: 'Вы успешно вышли из аккаунта' });
              LocalStorageService.delete(LSKeys.LSKeyAccessToken);
              LocalStorageService.delete(LSKeys.LSKeyRefreshToken);
              LocalStorageService.delete(LSKeys.LSIsAuthorized);
              appStateActions.clear();
              NavigationService.reset('WelcomeScreen');
            })
            .catch(() => Toast.show({ type: 'error', text1: 'Ошибка выхода из аккаунта' }));
        },
      },
      { text: 'Нет', onPress: () => {} },
    ]);
  };

  return { logout };
};
