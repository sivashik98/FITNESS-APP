import { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';

import { ProfileScreen, FeedScreen } from 'ui/screens';

import { BottomTabsNavigationParams } from './types';
import { SvgWrap } from 'ui/components';
import { FeedIconSvg } from 'svg/navigation/feed-icon';
import { ProfileIconSvg } from 'svg/navigation/profile-icon';

const Tabs = createBottomTabNavigator<BottomTabsNavigationParams>();

export const BottomTabsNavigation: FC<{}> = ({}) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarLabel: '',
      }}
      initialRouteName={'FeedScreen'}
    >
      <Tabs.Screen
        name={'FeedScreen'}
        component={FeedScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <LinearGradient colors={focused ? theme.colors.bottomBar.gradient : []} style={styles.tabBarIcon}>
              <SvgWrap Icon={FeedIconSvg} />
            </LinearGradient>
          ),
        }}
      />
      <Tabs.Screen
        name={'ProfileScreen'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <LinearGradient colors={focused ? theme.colors.bottomBar.gradient : []} style={styles.tabBarIcon}>
              <SvgWrap Icon={ProfileIconSvg} />
            </LinearGradient>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  tabBarStyle: {
    backgroundColor: theme.colors.bottomBar.bg,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowColor: theme.colors.userHeader.regular.shadow,
    elevation: 5,
  },
  tabBarLabelStyle: {
    width: 0,
    height: 0,
  },
  tabBarIcon: {
    padding: 10,
    borderRadius: 12,
  },
}));
