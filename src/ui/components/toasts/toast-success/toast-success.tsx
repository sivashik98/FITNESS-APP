import React from 'react';
import { BaseToast, ToastProps } from 'react-native-toast-message';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CheckInCircleSvg } from 'svg/icons/check-in-circle';

import { APP_FONTS } from 'app/theme';

export const ToastSuccess = (props: ToastProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <BaseToast
      {...props}
      style={styles.toast}
      renderTrailingIcon={() => <CheckInCircleSvg size={20} />}
      text1Style={styles.text1Style}
      text1Props={{ allowFontScaling: false }}
      text2Props={{ allowFontScaling: false }}
    />
  );
};

const stylesheet = createStyleSheet((theme) => ({
  toast: {
    backgroundColor: theme.colors.toastSuccess.bg,
    borderRadius: 20,
    borderLeftColor: 'transparent',
    alignItems: 'center',
    paddingRight: 20,
    shadowColor: theme.colors.toastSuccess.bg,
    shadowOpacity: 0.8,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  text1Style: {
    ...APP_FONTS.p1B,
    color: theme.colors.toastSuccess.text,
  },
}));
