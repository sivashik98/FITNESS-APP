import { useUserInfoVariables } from 'bl-modules/user/user-info/adapters/variables';

export type UserInfoProps = {
  name: ReturnType<typeof useUserInfoVariables>['name'];
  username: ReturnType<typeof useUserInfoVariables>['username'];
};
