import React, { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIView } from 'ui/components';
import { UserAvatar, UserInfo } from 'ui/components/headers/user-header/components';

import { UserHeaderProps } from 'ui/components/headers/user-header/types';
import { useUserInfoAdapter } from 'bl-modules/user/user-info';

export const UserHeader: FC<UserHeaderProps> = ({ ...props }) => {
  const { styles } = useStyles(stylesheet);
  const { variables } = useUserInfoAdapter();

  return (
    <UIView {...props} style={styles.container}>
      <UserInfo name={variables.name} username={variables.username} />
      <UserAvatar />
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme, rt) => ({
  container: {
    paddingTop: rt.insets.top + 12,
    paddingBottom: 12,
    paddingHorizontal: 20,
    borderBottomEndRadius: 35,
    borderBottomLeftRadius: 35,
    backgroundColor: theme.colors.userHeader.bg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowColor: theme.colors.userHeader.shadow,
    elevation: 5,
  },
}));
