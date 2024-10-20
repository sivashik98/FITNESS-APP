import { FC } from 'react';
import Checkbox from 'expo-checkbox';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIText, UIView } from 'ui/components';

import { UICheckboxProps } from 'ui/components/ui-kit/ui-checkbox/types';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';

export const UICheckbox: FC<UICheckboxProps> = ({ value, onValueChange, Label, errorMessage, ...props }) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <>
      <UIView row {...props}>
        <Checkbox
          value={value}
          onValueChange={onValueChange}
          {...props.checkboxProps}
          style={styles.checkbox}
          color={value ? theme.colors.checkbox.primary.bg : undefined}
        />
        {Label}
      </UIView>

      {errorMessage ? (
        <UIText p1B type={TextTypes.error}>
          {errorMessage}
        </UIText>
      ) : null}
    </>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  checkbox: {
    marginRight: 12,
    borderRadius: 4,
    borderWidth: 1.2,
    borderColor: theme.colors.checkbox.primary.border,
  },
}));
