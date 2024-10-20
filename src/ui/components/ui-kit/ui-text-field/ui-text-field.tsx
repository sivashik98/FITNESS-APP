import { forwardRef } from 'react';
import { UIText, UIView } from 'ui/components/ui-kit';
import { TextField } from 'react-native-ui-lib';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UITextFieldProps } from 'ui/components/ui-kit/ui-text-field/types';
import { APP_FONTS } from 'app/theme/fonts';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';

export const UITextField = forwardRef<any, UITextFieldProps>(({ leadingAccessory, bottomHint, errorMessage, ...props }, ref) => {
  const { theme, styles } = useStyles(stylesheet);
  //

  return (
    <TextField
      ref={ref}
      //
      // onChangeText={() => {}}
      // onClear={() => {}}
      placeholderTextColor={theme.colors.text.secondary.text}
      //
      recorderTag={'mask'}
      showMandatoryIndication
      showClearButton
      leadingAccessory={
        <UIView center marginR-20>
          {leadingAccessory}
        </UIView>
      }
      containerStyle={styles.containerStyle}
      fieldStyle={[styles.fieldStyle, errorMessage ? styles['fieldStyle-error'] : undefined]}
      style={styles.textStyle}
      bottomAccessory={
        <>
          {errorMessage ? (
            <UIText marginT-10 p2R type={TextTypes.error}>
              {errorMessage}
            </UIText>
          ) : undefined}
          {bottomHint ? (
            <UIText marginT-24 p2R type={TextTypes.secondary}>
              {bottomHint}
            </UIText>
          ) : undefined}
        </>
      }
      {...props}
    />
  );
});

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {},
  fieldStyle: {
    borderBottomWidth: 0.35,
    paddingVertical: 12,
    borderColor: theme.colors.textField.regular.border,
  },
  'fieldStyle-error': {
    borderColor: theme.colors.textField.error.border,
  },
  // @ts-ignore
  textStyle: {
    ...APP_FONTS.p2R,
    color: theme.colors.text.primary.text,
  },
}));
