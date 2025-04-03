import { UIView, UISwitch } from 'ui/components/ui-kit';
import { Screen, MenuItemsList } from 'ui/components';

import { NavigationService } from 'tools/services';
import { ScreenHeaderTypes } from 'ui/components/screen/types';
import { UserInfo } from 'ui/screens/profile/profile/components';
import { useUserInfoAdapter } from 'bl-modules/user/user-info';
import { useAppStateAdapter } from 'bl-modules/app-state/adapters/adapter';

export const ProfileScreen = ({}) => {
  const { variables } = useUserInfoAdapter();
  const { handlers: appStateHandlers, variables: appStateVariables } = useAppStateAdapter();

  return (
    <Screen
      headerType={ScreenHeaderTypes.Default}
      headerProps={{ title: 'Мои данные и настройки', canGoBack: false }}
      scroll
      content={
        <UIView gap={20}>
          <UserInfo fullName={variables.fullName} username={variables.username} />
          <MenuItemsList items={[{ title: 'Аккаунт', onPress: () => NavigationService.navigate('AccountScreen') }]} />
          <MenuItemsList
            items={[
              {
                title: 'Темная тема',
                RightComponent: <UISwitch value={appStateVariables.isDarkTheme} onValueChange={appStateHandlers.toggleTheme} />,
              },
              {
                title: 'Системная тема',
                RightComponent: <UISwitch value={appStateVariables.isSystemTheme} onValueChange={appStateHandlers.toggleSystemTheme} />,
              },
            ]}
          />
          <MenuItemsList
            items={[
              { title: 'Обратная связь', onPress: () => NavigationService.navigate('FeedbackScreen') },
              { title: 'О приложении', onPress: () => NavigationService.navigate('AboutAppScreen') },
              { title: 'Документы', onPress: () => NavigationService.navigate('DocumentsScreen') },
            ]}
          />
        </UIView>
      }
    />
  );
};
