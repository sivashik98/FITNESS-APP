import { FC } from 'react';
import { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIView } from 'ui/components/ui-kit';

import { FooterProps } from 'ui/components/footer/types';

export const Footer: FC<FooterProps> = ({ children }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <UIView reanimated entering={FadeInDown} exiting={FadeOutDown} style={styles.container}>
      {children}
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: theme.colors.app.bg,
    shadowColor: theme.colors.app.shadow,
    shadowRadius: 6,
    elevation: 10,
    shadowOpacity: 0.3,
    paddingVertical: 32,
    paddingHorizontal: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
}));
