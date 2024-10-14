import { FC } from 'react';
import { Image } from 'expo-image';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Pressable } from 'react-native';

import { UIText, UIView } from 'ui/components';

import { GenderPickerProps, GenderTypes } from 'components/gender-picker/types';
import { TextTypes } from 'components/ui-kit/ui-text/types';

const GENDERS = [
  { name: 'Не указан', source: require('png/genders/not-specified-gender.png'), type: GenderTypes.NOT_SPECIFIED },
  { name: 'Женщина', source: require('png/genders/female-gender.png'), type: GenderTypes.FEMALE },
  { name: 'Мужчина', source: require('png/genders/male-gender.png'), type: GenderTypes.MALE },
];

export const GenderPicker: FC<GenderPickerProps> = ({ active, onPress }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <UIView row spread>
      {GENDERS.map((gender) => (
        <Pressable key={gender.name} onPress={() => onPress(gender.type)}>
          <UIView style={[styles.card, active === gender.type && styles['card-active']]}>
            <UIText p1B type={active === gender.type ? TextTypes.accent : TextTypes.primary}>
              {gender.name}
            </UIText>
            <Image source={gender.source} style={styles.image} />
          </UIView>
        </Pressable>
      ))}
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  card: {
    padding: 12,
    paddingBottom: 0,
    backgroundColor: theme.colors.genderPicker.primary.bg,
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  'card-active': {
    borderColor: theme.colors.genderPicker.primary.border,
  },
  image: {
    width: 70,
    height: 70,
  },
}));
