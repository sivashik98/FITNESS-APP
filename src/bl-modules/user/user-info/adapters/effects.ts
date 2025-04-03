import Toast from 'react-native-toast-message';
import { useEffect } from 'react';

import { useUserInfoRtkq } from 'bl-modules/user/user-info/adapters/rtkq';

export const useUserInfoEffects = (rtkq: ReturnType<typeof useUserInfoRtkq>) => {
  useEffect(() => {
    if (rtkq.isError) {
      Toast.show({
        type: 'error',
        text1: 'Ошибка получения данных пользователя',
      });
    }
  }, [rtkq.isError]);

  useEffect(() => {
    if (rtkq.isSuccess) {
      Toast.show({
        type: 'success',
        text1: 'Данные пользователя успешно получены',
      });
    }
  }, [rtkq.isSuccess]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => rtkq.refetch(), 10000);
  //   return () => clearInterval(intervalId);
  // }, []);
};
