import { api } from 'app/api';
import { API_ROUTES } from 'app/api/routes';
import { CreateGoalArgs, Goal, RegisterArgs, UpdateUserEmailArgs, UpdateUserInfoArgs, UpdateUserPhoneArgs, User } from 'app/api/endpoints/user/types';
import { Response } from 'app/api/types';

export const UserService = api.injectEndpoints({
  endpoints: (build) => ({
    user: build.query<Response<User>, void>({
      query: () => ({ url: API_ROUTES.user.me }),
    }),
    register: build.mutation<Response<{}>, RegisterArgs>({
      query: (arg) => ({
        url: API_ROUTES.user.register,
        method: 'POST',
        body: arg,
      }),
    }),
    updateUserInfo: build.mutation<Response<User>, UpdateUserInfoArgs>({
      query: (arg) => ({
        url: API_ROUTES.user.update,
        method: 'PATCH',
        body: arg,
      }),
    }),
    updateUserEmail: build.mutation<Response<User>, UpdateUserEmailArgs>({
      query: (arg) => ({
        url: API_ROUTES.user.updateEmail,
        method: 'PATCH',
        body: arg,
      }),
    }),
    updateUserPhone: build.mutation<Response<User>, UpdateUserPhoneArgs>({
      query: (arg) => ({
        url: API_ROUTES.user.updatePhone,
        method: 'PATCH',
        body: arg,
      }),
    }),
    createGoal: build.mutation<Response<Goal>, CreateGoalArgs>({
      query: (arg) => ({
        url: API_ROUTES.user.goal,
        method: 'PATCH',
        body: arg,
      }),
    }),
    getGoal: build.query<Response<Goal>, void>({
      query: () => ({ url: API_ROUTES.user.goal }),
    }),
  }),
  overrideExisting: true,
});
