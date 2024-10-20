import { forwardRef } from 'react';
import { Platform } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { CodeField, Cursor, useClearByFocusCell } from 'react-native-confirmation-code-field';

import { UIText, UIView } from 'ui/components/ui-kit';

import { UICodeFieldProps } from 'ui/components/ui-kit/ui-code-field/types';
import { RenderCellOptions } from 'react-native-confirmation-code-field/esm/CodeField';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';

const renderCell =
  (onLayout: ReturnType<typeof useClearByFocusCell>[1]) =>
  ({ index, symbol, isFocused }: RenderCellOptions) => {
    const { styles } = useStyles(stylesheet);
    return (
      <UIView key={index} onLayout={onLayout(index)} style={[styles.cell, isFocused && styles['cell-focused']]}>
        {/*<UIText h2>{symbol || (isFocused ? <Cursor cursorSymbol={'✍🏽'} /> : null)}</UIText>*/}
        <UIText h2>{symbol}</UIText>
      </UIView>
    );
  };

export const UICodeField = forwardRef<any, UICodeFieldProps>(({ value, onChangeText, bottomHint, errorMessage, ...props }, ref) => {
  const [codeFieldProps, getCellOnLayout] = useClearByFocusCell({
    value,
    setValue: onChangeText,
  });

  return (
    <>
      <CodeField
        value={value}
        onChangeText={onChangeText}
        keyboardType='number-pad'
        textContentType='oneTimeCode'
        autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
        blurOnSubmit
        {...props}
        {...codeFieldProps}
        ref={ref}
        renderCell={renderCell(getCellOnLayout)}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        caretHidden={false}
      />
      {errorMessage ? (
        <UIText p2R type={TextTypes.error}>
          {errorMessage}
        </UIText>
      ) : undefined}
      {bottomHint ? (
        <UIText p2R type={TextTypes.secondary}>
          {bottomHint}
        </UIText>
      ) : undefined}
    </>
  );
});

const stylesheet = createStyleSheet((theme) => ({
  cell: {
    borderRadius: 10,
    backgroundColor: theme.colors.textField.code.bg,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  'cell-focused': {
    borderColor: theme.colors.textField.code.border,
    borderWidth: 1.5,
  },
}));
