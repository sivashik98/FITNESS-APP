import { api } from 'app/api';
import { API_ROUTES } from 'app/api/routes';
import {
  CodeConfirmResponse,
  EmailCodeConfirmArgs,
  EmailHybridAuthArgs,
  LogoutArgs,
  PhoneCodeConfirmArgs,
  PhoneHybridAuthArgs,
} from 'app/api/endpoints/auth/types';
import { Response } from 'app/api/types';

export const AuthService = api.injectEndpoints({
  endpoints: (build) => ({
    emailHybridAuth: build.mutation<Response<{}>, EmailHybridAuthArgs>({
      query: (arg) => ({
        url: API_ROUTES.auth.emailCode,
        method: 'POST',
        body: arg,
      }),
    }),
    phoneHybridAuth: build.mutation<Response<{}>, PhoneHybridAuthArgs>({
      query: (arg) => ({
        url: API_ROUTES.auth.smsCode,
        method: 'POST',
        body: arg,
      }),
    }),
    emailCodeConfirm: build.mutation<Response<CodeConfirmResponse>, EmailCodeConfirmArgs>({
      query: (arg) => ({
        url: API_ROUTES.auth.emailLogin,
        method: 'POST',
        body: arg,
      }),
    }),
    phoneCodeConfirm: build.mutation<Response<CodeConfirmResponse>, PhoneCodeConfirmArgs>({
      query: (arg) => ({
        url: API_ROUTES.auth.smsLogin,
        method: 'POST',
        body: arg,
      }),
    }),
    logout: build.mutation<Response<{}>, LogoutArgs>({
      query: (arg) => ({
        url: API_ROUTES.auth.logout,
        method: 'POST',
        body: arg,
      }),
    }),
  }),
  overrideExisting: true,
});
