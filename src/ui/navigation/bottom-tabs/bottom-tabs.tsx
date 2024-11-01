import { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';

import { ProfileScreen, FeedScreen } from 'ui/screens';

import { BottomTabsNavigationParams } from './types';
import { SvgContainer } from 'ui/components';
import { FeedIconSvg } from 'svg/navigation/feed-icon';
import { ProfileIconSvg } from 'svg/navigation/profile-icon';
import { APP_COLORS } from 'app/theme';

const Tabs = createBottomTabNavigator<BottomTabsNavigationParams>();

const BottomTab: FC<{ Icon: any; focused: boolean }> = ({ Icon, focused }) => {
  const { theme, styles } = useStyles(stylesheet);
  const colors = focused ? theme.colors.bottomBar.gradient : ['transparent', 'transparent'];
  const color = focused ? APP_COLORS.white : theme.colors.bottomBar.icon;

  return (
    // @ts-ignore
    <LinearGradient colors={colors} style={styles.tabBarIcon}>
      <SvgContainer Icon={Icon} iconProps={{ color, size: 22 }} />
    </LinearGradient>
  );
};

export const BottomTabsNavigation: FC<{}> = ({}) => {
  const { styles } = useStyles(stylesheet);
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
          tabBarIcon: ({ focused }) => <BottomTab Icon={FeedIconSvg} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name={'ProfileScreen'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <BottomTab Icon={ProfileIconSvg} focused={focused} />,
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
    shadowColor: theme.colors.userHeader.shadow,
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
