import React, { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { SvgContainer, UIText, UIView } from 'ui/components';
import { ChevronIconSvg } from 'svg/icons/chevron-icon';

import { NavigationService } from 'tools/services';
import { DefaultHeaderProps } from 'ui/components/headers/default-header/types';
import { useSpacings } from 'tools/hooks/use-spacings/use-spacings';

export const DefaultHeader: FC<DefaultHeaderProps> = ({ canGoBack = true, title, RightIcon, CenterIcon, ...props }) => {
  const { styles, theme } = useStyles(stylesheet);
  const { margin, padding } = useSpacings(props);

  return (
    <UIView style={[styles.container, margin, padding]}>
      <UIView onPress={NavigationService.goBack} style={styles.backButton}>
        {canGoBack && <SvgContainer Icon={ChevronIconSvg} iconProps={{ color: theme.colors.defaultHeader.icon }} />}
      </UIView>
      <UIView style={styles.titleContainer}>{CenterIcon ? <CenterIcon /> : <UIText font={'p1B'}>{title}</UIText>}</UIView>
      <UIView style={styles.rightComponentContainer}>{RightIcon && <RightIcon />}</UIView>
    </UIView>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    flex: 1,
    height: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightComponentContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
}));
