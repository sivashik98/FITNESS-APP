import { FC } from 'react';
import { Image } from 'expo-image';

import { UIText, UIView } from 'ui/components';

import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { UserInfoProps } from 'ui/screens/profile/profile/components/user-info/types';

const UserAvatar: FC<{}> = ({}) => (
  <UIView ai={'center'}>
    <Image source={require('png/circle-logo.png')} style={{ width: 100, height: 100 }} />
  </UIView>
);

const UserData: FC<UserInfoProps> = ({ fullName, username }) => (
  <UIView gap={6} ai={'center'}>
    <UIText font={'h2'} center>
      {fullName}
    </UIText>
    <UIText font={'p1M'} type={TextTypes.accent} center>
      {username}
    </UIText>
  </UIView>
);

export const UserInfo: FC<UserInfoProps> = ({ fullName, username }) => {
  return (
    <>
      <UserAvatar />
      <UserData fullName={fullName} username={username} />
    </>
  );
};
