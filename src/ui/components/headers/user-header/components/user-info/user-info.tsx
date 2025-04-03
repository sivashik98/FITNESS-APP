import React, { FC } from 'react';

import { UIText, UIView } from 'ui/components';

import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { UserInfoProps } from './types';

export const UserInfo: FC<UserInfoProps> = ({ username, name }) => (
  <UIView gap={6} flexS={1}>
    <UIText font={'h2'}>Привет, {name}</UIText>
    <UIText font={'p3R'} type={TextTypes.secondary}>
      {username}
    </UIText>
  </UIView>
);
