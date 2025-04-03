import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIButton, UIText, UIView } from 'ui/components/ui-kit';
import { StarsIconSvg } from 'svg/icons/stars-icon';

import { ButtonTypes } from 'ui/components/ui-kit/ui-button/types';
import { NavigationService } from 'tools/services';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';

export const Footer = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <UIView
      animated
      from={{ opacity: 0.5, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      // @ts-ignore
      transition={{ type: 'timing', duration: 300 }}
      style={styles.container}
    >
      <UIText font={'h1'}>Начните свой путь к здоровому образу жизни с нами</UIText>
      <UIButton
        type={ButtonTypes.filled}
        title={'Погнали!'}
        LeftIcon={StarsIconSvg}
        onPress={() =>
          NavigationService.navigate('HybridAuthScreen', {
            title: 'Укажите email или номер телефона',
            tab: { type: 'email', index: 0 },
            type: 'auth',
          })
        }
      />
      <UIView ai={'center'}>
        <UIText font={'p3R'} type={TextTypes.secondary}>
          Нажимая «Погнали!», вы принимаете
        </UIText>
        <UIView onPress={() => NavigationService.navigate('PrivacyPolicyScreen')}>
          <UIText font={'p3R'} type={TextTypes.secondary} underline>
            политику конфиденциальности
          </UIText>
        </UIView>
      </UIView>
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.app.bg,
    shadowColor: theme.colors.app.shadow,
    shadowRadius: 6,
    elevation: 10,
    shadowOpacity: 0.3,
    paddingVertical: 32,
    paddingHorizontal: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    gap: 24,
  },
}));
