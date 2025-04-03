import { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIButton, UIText, UIView } from 'ui/components/ui-kit';
import { StarsIconSvg } from 'svg/icons/stars-icon';

import { ButtonTypes } from 'ui/components/ui-kit/ui-button/types';
import { FooterProps } from 'ui/screens/goal/goal-creation-finish/components/footer/types';

export const Footer: FC<FooterProps> = ({ goal, onCreateGoal }) => {
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
      <UIView>
        <UIText font={'h1'}>Моя цель:</UIText>
        <UIText font={'h2'}>{goal}</UIText>
      </UIView>
      <UIText font={'p2B'}>Регулярно вноси показания текущего веса, чтоб увидеть насколько ты близок к своей цели</UIText>
      <UIButton type={ButtonTypes.filled} title={'Начать сейчас!'} LeftIcon={StarsIconSvg} onPress={onCreateGoal} />
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
