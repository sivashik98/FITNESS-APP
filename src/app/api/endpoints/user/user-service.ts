// import { api } from 'app/api';
// import { API_ROUTES } from 'app/api/routes';
// import { EmailHybridAuthArgs, PhoneHybridAuthArgs } from 'app/api/endpoints/auth/types';

// export const AuthService = api.injectEndpoints({
//   endpoints: (build) => ({
//     emailHybridAuth: build.mutation<any, EmailHybridAuthArgs>({
//       query: (arg) => ({
//         url: API_ROUTES.auth.emailCode,
//         method: 'POST',
//         body: arg,
//       }),
//     }),
//     phoneHybridAuth: build.mutation<any, PhoneHybridAuthArgs>({
//       query: (arg) => ({
//         url: API_ROUTES.auth.smsCode,
//         method: 'POST',
//         body: arg,
//       }),
//     }),
//   }),
//   overrideExisting: true,
// });

// emailCode: 'auth/email-code',
//   emailLogin: 'auth/email-login',
//   smsCode: 'auth/sms-code',
//   smsLogin: 'auth/sms-login',
//   refreshToken: 'auth/refresh-token',
//   logout: 'auth/logout',
//   register: 'register',
