import { BaseQueryFn, createApi, FetchArgs, FetchBaseQueryArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import Toast from 'react-native-toast-message';

import { LocalStorageService, NavigationService } from 'tools/services';
import { LSKeys } from 'tools/services/local-storage/types';
import { API_ROUTES } from 'app/api/routes';

const baseQueryFn = (url: string | undefined) => {
  const baseQueryArgs: FetchBaseQueryArgs = {
    baseUrl: url,
    prepareHeaders(headers) {
      const accessToken = LocalStorageService.getString(LSKeys.LSKeyAccessToken);
      if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`);
    },
  };
  const baseQuery = fetchBaseQuery(baseQueryArgs);
  const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result: any = await baseQuery(args, api, extraOptions);
    const refreshToken = LocalStorageService.getString(LSKeys.LSKeyRefreshToken);

    console.log(`API baseQueryArgs: ${JSON.stringify(baseQueryArgs)}`);
    console.log(`API baseQueryWithReAuth result: ${JSON.stringify(result)}`);

    if (result.error?.status === 401) {
      Toast.show({
        type: 'error',
        text1: 'Токен устарел',
      });
      const refreshResult: any = await fetchBaseQuery({ ...baseQueryArgs, baseUrl: url })(
        {
          url: API_ROUTES.auth.refreshToken,
          method: 'POST',
          body: { refresh_token: refreshToken },
        },
        api,
        extraOptions,
      );
      console.log(`refreshResult = ${JSON.stringify(refreshResult)}`);
      if (refreshResult.data?.payload?.access_token) {
        Toast.show({
          type: 'success',
          text1: 'Новый токен получен',
        });
        LocalStorageService.set(LSKeys.LSKeyAccessToken, refreshResult.data.payload.access_token);
        LocalStorageService.set(LSKeys.LSKeyRefreshToken, refreshResult.data.payload.refresh_token);
        result = await baseQuery(args, api, extraOptions);
      } else {
        fetchBaseQuery({ ...baseQueryArgs, baseUrl: url })(
          {
            url: API_ROUTES.auth.logout,
            method: 'POST',
            body: { refresh_token: refreshToken },
          },
          api,
          extraOptions,
        );
        Toast.show({ type: 'success', text1: 'Вы успешно вышли из аккаунта (не удалось обновить access_token токен)' });
        LocalStorageService.delete(LSKeys.LSKeyAccessToken);
        LocalStorageService.delete(LSKeys.LSKeyRefreshToken);
        LocalStorageService.delete(LSKeys.LSIsAuthorized);
        NavigationService.reset('WelcomeScreen');
      }
    }
    return result;
  };
  return baseQueryWithReAuth;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryFn(process.env.EXPO_PUBLIC_API_URL),
  endpoints: () => ({}),
});
