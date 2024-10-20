import { UIText, UIView } from 'ui/components/ui-kit';
import { MenuItemsList, Screen } from 'ui/components';

import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { ScreenHeaderTypes } from 'ui/components/screen/types';

export const FeedbackScreen = ({}) => {
  return (
    <Screen
      headerType={ScreenHeaderTypes.Default}
      headerProps={{ title: 'Обратная связь' }}
      content={
        <UIView marginT-20>
          <MenuItemsList
            items={[
              {
                title: 'Позвонить',
                onPress: () => alert('Звоню.....'),
                RightComponent: () => (
                  <UIText p2R type={TextTypes.secondary}>
                    8 900 900 90 90
                  </UIText>
                ),
              },
              {
                title: 'Написать на почту',
                onPress: () => alert('Пишу.....'),
                RightComponent: () => (
                  <UIText p2R type={TextTypes.secondary}>
                    yuteam@support.ru
                  </UIText>
                ),
              },
            ]}
          />
        </UIView>
      }
    />
  );
};
