import { useState } from 'react';
import { Image } from 'expo-image';

import { UIText, UIView, UISwitch } from 'ui/components/ui-kit';
import { Screen, MenuItemsList } from 'ui/components';

import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { NavigationService } from 'tools/services';
import { ScreenHeaderTypes } from 'ui/components/screen/types';

export const ProfileScreen = ({}) => {
  const [notificationSwitch, setNotificationSwitch] = useState<boolean>(false);
  const [themeSwitch, setThemeSwitch] = useState<boolean>(false);

  return (
    <Screen
      headerType={ScreenHeaderTypes.Default}
      headerProps={{ title: 'Мои данные и настройки', canGoBack: false }}
      scroll
      content={
        <UIView gap-20>
          <UIView center>
            <Image source={require('png/circle-logo.png')} style={{ width: 100, height: 100 }} />
          </UIView>
          <UIView gap-6>
            <UIText h2 center>
              Алинмова Мила Николаевна
            </UIText>
            <UIText p1M type={TextTypes.accent} center>
              +7 909 375-37-44
            </UIText>
          </UIView>
          <MenuItemsList items={[{ title: 'Аккаунт', onPress: () => NavigationService.navigate('AccountScreen') }]} />
          <MenuItemsList
            items={[
              { title: 'Уведомления', RightComponent: () => <UISwitch value={notificationSwitch} onValueChange={setNotificationSwitch} /> },
              { title: 'Сменить тему', RightComponent: () => <UISwitch value={themeSwitch} onValueChange={setThemeSwitch} /> },
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
