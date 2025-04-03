import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

import { UserAvatarProps } from 'ui/components/headers/user-header/components/user-avatar/types';
import { NavigationService } from 'tools/services';

export const UserAvatar: FC<UserAvatarProps> = ({}) => (
  <TouchableOpacity onPress={() => NavigationService.navigate('BottomTabsNavigation', { screen: 'ProfileScreen' })}>
    <Image source={require('png/circle-logo.png')} style={styles.logo} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
  },
});
