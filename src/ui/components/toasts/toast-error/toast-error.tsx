import React from 'react';
import { BaseToast, ToastProps } from 'react-native-toast-message';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CheckInCircleSvg } from 'svg/icons/check-in-circle';

import { APP_FONTS } from 'app/theme';

export const ToastError = (props: ToastProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <BaseToast
      {...props}
      style={styles.toast}
      renderTrailingIcon={() => <CheckInCircleSvg size={20} />}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
      text1Props={{ allowFontScaling: false }}
      text2Props={{ allowFontScaling: false }}
      text1NumberOfLines={2}
    />
  );
};

const stylesheet = createStyleSheet((theme) => ({
  toast: {
    backgroundColor: theme.colors.toastError.bg,
    borderRadius: 20,
    borderLeftColor: 'transparent',
    alignItems: 'center',
    paddingRight: 20,
    shadowColor: theme.colors.toastError.bg,
    shadowOpacity: 0.8,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  text1Style: {
    ...APP_FONTS.p2M,
    color: theme.colors.toastError.text,
    textAlign: 'center',
  },
  text2Style: {
    ...APP_FONTS.p3M,
    color: theme.colors.toastError.text,
  },
}));
