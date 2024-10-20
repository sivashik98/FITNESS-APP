import { UIText, UIView } from 'ui/components/ui-kit';
import { MenuItemsList, Screen, SvgWrap } from 'ui/components';
import { LogoSvg } from 'svg/logo';
import { ScreenHeaderTypes } from 'ui/components/screen/types';
import { APP_COLORS } from 'app/theme';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';

export const AboutAppScreen = ({}) => {
  return (
    <Screen
      headerType={ScreenHeaderTypes.Default}
      headerProps={{ title: 'О приложении' }}
      content={
        <UIView flex spread marginT-20>
          <UIView gap-20>
            <SvgWrap Icon={LogoSvg} iconProps={{ color: APP_COLORS.primaryBlack, size: 40 }} viewProps={{ style: { alignItems: 'center' } }} />
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

          <UIView center gap-6>
            <UIText p1R type={TextTypes.secondary}>
              Версия 2.0.5 от 18 января 2025 г.
            </UIText>
            <UIText p3R type={TextTypes.secondary}>
              Copyright © 2024 YU TEAM
            </UIText>
            <UIText p3R marginT-10 type={TextTypes.secondary} style={{ opacity: 0.5 }}>
              Разработка приложения JAM IT
            </UIText>
          </UIView>
        </UIView>
      }
    />
  );
};
