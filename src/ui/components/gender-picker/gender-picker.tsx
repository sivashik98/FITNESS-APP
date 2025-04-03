import { FC } from 'react';
import { Image } from 'expo-image';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';

import { UIText, UIView } from 'ui/components';

import { GenderPickerProps, GenderTypes } from 'ui/components/gender-picker/types';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { useSpacings } from 'tools/hooks/use-spacings/use-spacings';

const GENDERS = [
  { name: 'Не указано', source: require('png/genders/not-specified-gender.png'), type: GenderTypes.NOT_SPECIFIED },
  { name: 'Женщина', source: require('png/genders/female-gender.png'), type: GenderTypes.FEMALE },
  { name: 'Мужчина', source: require('png/genders/male-gender.png'), type: GenderTypes.MALE },
];

export const GenderPicker: FC<GenderPickerProps> = ({ active, onPress, ...props }) => {
  const { styles } = useStyles(stylesheet);
  const { margin, padding } = useSpacings(props);

  const onPressWithImpact = (type: GenderTypes) => async () => {
    onPress?.(type);
    await impactAsync(ImpactFeedbackStyle.Light);
  };

  return (
    <UIView style={[margin, padding, styles.wrap]}>
      {GENDERS.map((gender) => (
        <UIView key={gender.name} style={styles.container}>
          <UIView animated from={{ opacity: 0.3, scale: 0.3 }} animate={{ opacity: 1, scale: 1 }} onPress={onPressWithImpact(gender.type)}>
            <UIView style={[styles.card, active === gender.type && styles['card-active']]}>
              <UIText font={'p3B'} numberOfLines={1} type={active === gender.type ? TextTypes.accent : TextTypes.primary}>
                {gender.name}
              </UIText>
              <Image source={gender.source} style={styles.image} />
            </UIView>
          </UIView>
        </UIView>
      ))}
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  wrap: {
    flexDirection: 'row',
    gap: 10,
  },
  container: {
    flex: 1,
  },
  card: {
    padding: 10,
    paddingBottom: 0,
    backgroundColor: theme.colors.genderPicker.bg,
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  'card-active': {
    borderColor: theme.colors.genderPicker.border,
  },
  image: {
    width: 70,
    height: 70,
  },
}));
