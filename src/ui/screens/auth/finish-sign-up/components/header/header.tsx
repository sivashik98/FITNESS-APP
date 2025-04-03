import { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import { StyleSheet } from 'react-native';

import { SvgContainer, UIProgressBar, UIView } from 'ui/components';
import { MiniLogoSvg } from 'svg/mini-logo';
import { ChevronIconSvg } from 'svg/icons/chevron-icon';

import { HeaderProps } from 'ui/screens/auth/finish-sign-up/components/header/types';

export const Header: FC<HeaderProps> = ({ progress, onPress, shouldShowBackButton }) => {
  const { theme } = useStyles();

  return (
    <UIView style={styles.container}>
      <UIView ai={'center'}>
        {shouldShowBackButton && (
          <UIView style={styles.backButton}>
            <SvgContainer
              Icon={ChevronIconSvg}
              iconProps={{ color: theme.colors.defaultHeader.icon }}
              onPress={onPress}
              animated
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </UIView>
        )}
        <SvgContainer Icon={MiniLogoSvg} />
      </UIView>
      <UIProgressBar progress={progress} />
    </UIView>
  );
};

export const styles = StyleSheet.create({
  container: {
    gap: 30,
    marginHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    paddingRight: 30,
    paddingBottom: 20,
  },
});
