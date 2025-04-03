import { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { SvgContainer, UIText, UIView } from 'ui/components';

import { SettingItemTypes } from './types';
import { APP_COLORS } from 'app/theme';

export const SettingItem: FC<SettingItemTypes> = ({ onPress, text, placeholder, Icon }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <UIView onPress={onPress}>
      <UIText font={'p2B'}>Номер</UIText>
      <UIView style={styles.container}>
        {text ? (
          <UIText font={'p2R'}>{text}</UIText>
        ) : (
          <UIText font={'p2R'} style={styles.placeholder}>
            {placeholder}
          </UIText>
        )}
        <SvgContainer Icon={Icon} />
      </UIView>
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomColor: APP_COLORS.grayishBlue,
    borderBottomWidth: 0.35,
    paddingVertical: 11,
    paddingRight: 16,
  },
  placeholder: {
    color: theme.colors.textField.placeholder,
  },
}));
