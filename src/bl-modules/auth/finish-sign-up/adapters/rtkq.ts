import { UserService } from 'app/api/endpoints';

export const useFinishSignUpRtkq = () => {
  const [register, { isLoading, data }] = UserService.useRegisterMutation();

  return { register, isLoading, data };
};
