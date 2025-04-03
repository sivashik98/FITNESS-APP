import { UIView } from 'ui/components/ui-kit';
import { Screen, MenuItemsList } from 'ui/components';
import { ScreenHeaderTypes } from 'ui/components/screen/types';
import { NavigationService } from 'tools/services';

export const DocumentsScreen = ({}) => {
  return (
    <Screen
      headerType={ScreenHeaderTypes.Default}
      headerProps={{ title: 'Документы' }}
      content={
        <UIView marginT-20>
          <MenuItemsList
            items={[
              { title: 'Политика конфиденциальности', onPress: () => NavigationService.navigate('PrivacyPolicyScreen') },
              { title: 'Пользовательское соглашение', onPress: () => NavigationService.navigate('PrivacyPolicyScreen') },
            ]}
          />
        </UIView>
      }
    />
  );
};
