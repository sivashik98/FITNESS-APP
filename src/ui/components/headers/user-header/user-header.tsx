import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-ui-lib';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Image } from 'expo-image';

import { UIText, UIView } from 'ui/components';

import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { UserHeaderProps } from 'ui/components/headers/user-header/types';
import { NavigationService } from 'tools/services';

export const UserHeader: FC<UserHeaderProps> = ({ ...props }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <UIView {...props} style={styles.container}>
      <UIView gap-6>
        <UIText font={'h2'}>Привет!</UIText>
        <UIText font={'p3R'} type={TextTypes.secondary}>
          +7 909 375-37-44
        </UIText>
      </UIView>

      <TouchableOpacity onPress={() => NavigationService.navigate('BottomTabsNavigation', { screen: 'ProfileScreen' })}>
        <Image source={require('png/circle-logo.png')} style={styles.logo} />
      </TouchableOpacity>
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
  logo: {
    width: 60,
    height: 60,
  },
}));
