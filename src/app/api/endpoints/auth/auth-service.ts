import { api } from 'app/api';
import { API_ROUTES } from 'app/api/routes';
import { EmailCodeConfirmArgs, EmailHybridAuthArgs, LoginResponse, PhoneCodeConfirmArgs, PhoneHybridAuthArgs } from 'app/api/endpoints/auth/types';

export const AuthService = api.injectEndpoints({
  endpoints: (build) => ({
    emailHybridAuth: build.mutation<any, EmailHybridAuthArgs>({
      query: (arg) => ({
        url: API_ROUTES.auth.emailCode,
        method: 'POST',
        body: arg,
      }),
    }),
    phoneHybridAuth: build.mutation<any, PhoneHybridAuthArgs>({
      query: (arg) => ({
        url: API_ROUTES.auth.smsCode,
        method: 'POST',
        body: arg,
      }),
    }),

    emailCodeConfirm: build.mutation<LoginResponse, EmailCodeConfirmArgs>({
      query: (arg) => ({
        url: API_ROUTES.auth.emailLogin,
        method: 'POST',
        body: arg,
      }),
    }),
    phoneCodeConfirm: build.mutation<LoginResponse, PhoneCodeConfirmArgs>({
      query: (arg) => ({
        url: API_ROUTES.auth.smsLogin,
        method: 'POST',
        body: arg,
      }),
    }),
  }),
  overrideExisting: false,
});

// emailCode: 'auth/email-code',
//   emailLogin: 'auth/email-login',
//   smsCode: 'auth/sms-code',
//   smsLogin: 'auth/sms-login',
//   refreshToken: 'auth/refresh-token',
//   logout: 'auth/logout',
//   register: 'register',
