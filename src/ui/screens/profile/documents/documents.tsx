import { UIView } from 'ui/components/ui-kit';
import { Screen, MenuItemsList } from 'ui/components';
import { ScreenHeaderTypes } from 'ui/components/screen/types';

export const DocumentsScreen = ({}) => {
  return (
    <Screen
      headerType={ScreenHeaderTypes.Default}
      headerProps={{ title: 'Документы' }}
      content={
        <UIView marginT-20>
          <MenuItemsList
            items={[
              { title: 'Политика конфиденциальности', onPress: () => alert('Политика конфиденциальности') },
              { title: 'Пользовательское соглашение', onPress: () => alert('Пользовательское соглашение') },
            ]}
          />
        </UIView>
      }
    />
  );
};
