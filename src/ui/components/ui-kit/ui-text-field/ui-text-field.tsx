import { forwardRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import TextInputMask from 'react-native-text-input-mask';

import { UIText, UIView } from 'ui/components/ui-kit';
import { SvgContainer } from 'ui/components';
import { CloseCircleIconSvg } from 'svg/icons/close-circle-icon';

import { UITextFieldProps } from 'ui/components/ui-kit/ui-text-field/types';
import { APP_FONTS } from 'app/theme/fonts';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';

export const UITextField = forwardRef<typeof TextInputMask, UITextFieldProps>(
  ({ leadingAccessory, bottomHint, errorMessage, value = '', onClear, ...props }, ref: any) => {
    const { theme, styles } = useStyles(stylesheet);

    return (
      <UIView flexS={1}>
        <UIView style={[styles.container, errorMessage ? styles['container-error'] : undefined]}>
          {leadingAccessory ? <UIView marginR={20}>{leadingAccessory}</UIView> : null}
          <TextInputMask
            ref={ref}
            placeholderTextColor={theme.colors.textField.placeholder}
            style={[styles.field, errorMessage ? styles['field-error'] : undefined]}
            value={value}
            {...props}
          />
          <SvgContainer
            Icon={CloseCircleIconSvg}
            disabled={value.length === 0}
            animated
            animate={{ opacity: value.length > 0 ? 1 : 0 }}
            flex={1}
            direction={'row'}
            ai={'center'}
            paddingH={12}
            onPress={onClear}
          />
        </UIView>
        <UIView gap={10} marginT={10}>
          {errorMessage ? (
            <UIText font={'p2R'} type={TextTypes.error}>
              {errorMessage}
            </UIText>
          ) : undefined}
          {bottomHint ? (
            <UIText font={'p2R'} type={TextTypes.secondary}>
              {bottomHint}
            </UIText>
          ) : undefined}
        </UIView>
      </UIView>
    );
  }
);

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.35,
    paddingVertical: 12,
    borderColor: theme.colors.textField.border,
  },
  'container-error': {
    borderColor: theme.colors.textField.error,
  },
  field: {
    ...APP_FONTS.p2R,
    color: theme.colors.text.primary.text,
    flex: 1,
  },
  'field-error': {
    color: theme.colors.text.error.text,
  },
}));
