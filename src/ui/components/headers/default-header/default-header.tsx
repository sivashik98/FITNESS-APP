import React, { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { TouchableOpacity } from 'react-native-ui-lib';

import { SvgWrap, UIText, UIView } from 'ui/components';
import { ChevronIconSvg } from 'svg/icons/chevron-icon';

import { NavigationService } from 'tools/services';
import { DefaultHeaderProps } from 'ui/components/headers/default-header/types';

export const DefaultHeader: FC<DefaultHeaderProps> = ({ canGoBack = true, title, RightIcon }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <UIView style={styles.container}>
      <TouchableOpacity onPress={NavigationService.goBack} style={styles.backButton}>
        {canGoBack && <SvgWrap Icon={ChevronIconSvg} />}
      </TouchableOpacity>
      <UIView style={styles.titleContainer}>
        <UIText p1B>{title}</UIText>
      </UIView>
      <UIView style={styles.rightComponentContainer}>{RightIcon && <RightIcon />}</UIView>
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme, rt) => ({
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
