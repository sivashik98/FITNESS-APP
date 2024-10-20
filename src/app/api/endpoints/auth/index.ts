// import {
//   LoginArgs,
//   LoginResponse,
// } from './types';
// import { Token, TokenFromApi } from 'repositories/Api/models/Token';
// import { ApiRoutes } from 'repositories/Api/routes/ApiRoutes';
// import { transformResponse } from 'repositories/Api/transformers/response';
// import {api} from 'app/api';
//
// export const AuthService = api.injectEndpoints({
//   endpoints: (build) => ({
//     login: build.query<LoginResponse<Token & { userKey: string }>, LoginArgs>({
//       query: (arg) => ({
//         url: ApiRoutes.auth.signInMobile,
//         method: 'POST',
//         body: arg,
//       }),
//       transformResponse,
//     }),
//   }),
// });
