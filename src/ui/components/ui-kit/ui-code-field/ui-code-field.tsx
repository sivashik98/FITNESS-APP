import { forwardRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { CodeField, useClearByFocusCell } from 'react-native-confirmation-code-field';

import { UIText, UIView } from 'ui/components/ui-kit';

import { UICodeFieldProps } from 'ui/components/ui-kit/ui-code-field/types';
import { RenderCellOptions } from 'react-native-confirmation-code-field/esm/CodeField';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { SvgContainer } from 'ui/components';
import { QuestionMarkIconSvg } from 'svg/icons/question-mark-icon';

const renderCell =
  (onLayout: ReturnType<typeof useClearByFocusCell>[1], isError: boolean) =>
  ({ index, symbol, isFocused }: RenderCellOptions) => {
    const { styles } = useStyles(stylesheet);
    return (
      <UIView key={index} onLayout={onLayout(index)} style={[styles.cell, isFocused && styles['cell-focused'], isError && styles['cell-error']]}>
        <UIText font={'h2'}>{symbol}</UIText>
      </UIView>
    );
  };

export const UICodeField = forwardRef<any, UICodeFieldProps>(({ value, onChangeText, bottomHint, errorMessage, ...props }, ref) => {
  const [codeFieldProps, getCellOnLayout] = useClearByFocusCell({
    value,
    // @ts-ignore
    setValue: onChangeText,
  });

  return (
    <>
      <CodeField
        value={value}
        onChangeText={onChangeText}
        keyboardType='number-pad'
        textContentType='oneTimeCode'
        // autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
        blurOnSubmit
        {...props}
        {...codeFieldProps}
        ref={ref}
        renderCell={renderCell(getCellOnLayout, !!errorMessage)}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        caretHidden={false}
      />
      {errorMessage ? (
        <UIText font={'p2R'} type={TextTypes.error}>
          {errorMessage}
        </UIText>
      ) : undefined}
      {bottomHint ? (
        <UIView direction={'row'} gap={10} marginT={10}>
          <SvgContainer Icon={QuestionMarkIconSvg} style={{ marginTop: 5 }} />
          <UIText font={'p2R'} type={TextTypes.secondary}>
            {bottomHint}
          </UIText>
        </UIView>
      ) : undefined}
    </>
  );
});

const stylesheet = createStyleSheet((theme) => ({
  cell: {
    borderRadius: 10,
    backgroundColor: theme.colors.codeField.bg,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  'cell-focused': {
    borderColor: theme.colors.codeField.border,
    borderWidth: 1.5,
  },
  'cell-error': {
    borderColor: theme.colors.codeField.error,
    borderWidth: 1.5,
  },
}));
