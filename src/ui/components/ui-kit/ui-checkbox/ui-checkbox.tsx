import { FC } from 'react';
import Checkbox from 'expo-checkbox';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIText, UIView } from 'ui/components';

import { UICheckboxProps } from 'ui/components/ui-kit/ui-checkbox/types';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { useSpacings } from 'tools/hooks/use-spacings/use-spacings';

export const UICheckbox: FC<UICheckboxProps> = ({ value, onValueChange, Label, errorMessage, ...props }) => {
  const { styles, theme } = useStyles(stylesheet);
  const { padding, margin } = useSpacings(props);

  return (
    <>
      <UIView direction={'row'} style={[padding, margin]}>
        <Checkbox
          value={value}
          onValueChange={onValueChange}
          {...props.checkboxProps}
          style={styles.checkbox}
          color={value ? theme.colors.checkbox.bg : undefined}
        />
        {Label}
      </UIView>

      {errorMessage ? (
        <UIText font={'p2R'} type={TextTypes.error}>
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
    borderColor: theme.colors.checkbox.border,
  },
}));
