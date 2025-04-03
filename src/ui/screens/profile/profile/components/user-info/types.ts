import { useUserInfoVariables } from 'bl-modules/user/user-info/adapters/variables';

export type UserInfoProps = {
  fullName: ReturnType<typeof useUserInfoVariables>['fullName'];
  username: ReturnType<typeof useUserInfoVariables>['username'];
};
