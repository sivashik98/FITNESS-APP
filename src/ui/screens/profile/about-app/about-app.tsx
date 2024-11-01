import { UIText, UIView } from 'ui/components/ui-kit';
import { MenuItemsList, Screen, SvgContainer } from 'ui/components';
import { ScreenHeaderTypes } from 'ui/components/screen/types';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { MiniLogoSvg } from 'svg/mini-logo';

export const AboutAppScreen = ({}) => {
  return (
    <Screen
      headerType={ScreenHeaderTypes.Default}
      headerProps={{ title: 'О приложении' }}
      content={
        <UIView flex={1} jc={'space-between'} marginT={20}>
          <UIView gap={20}>
            <SvgContainer Icon={MiniLogoSvg} iconProps={{ size: 70 }} ai={'center'} />
            <MenuItemsList
              items={[
                {
                  title: 'Приложение YU TEAM было разработано, чтобы помочь вам улучшить свою жизнь, стать более продуктивным и успешным человеком.',
                },
              ]}
            />
            <MenuItemsList
              items={[
                {
                  title:
                    'Вы сможете выбрать те привычки, которые наиболее важны для вас, и начать работать над их формированием. Приложение будет напоминать вам о необходимости выполнения действий, а также отслеживать ваш прогресс.',
                },
              ]}
            />
          </UIView>

          <UIView jc={'center'} ai={'center'} gap={6}>
            <UIText font={'p1R'} type={TextTypes.secondary}>
              Версия 2.0.5 от 18 января 2025 г.
            </UIText>
            <UIText font={'p3R'} type={TextTypes.secondary}>
              Copyright © 2024 YU TEAM
            </UIText>
            <UIText font={'p3R'} marginT={10} type={TextTypes.secondary}>
              Разработка приложения JAM IT
            </UIText>
          </UIView>
        </UIView>
      }
    />
  );
};
