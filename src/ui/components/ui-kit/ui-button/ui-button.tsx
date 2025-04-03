import { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { Shadow } from 'react-native-shadow-2';
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';

import { UIText, UIView } from 'ui/components/ui-kit';

import { ButtonTypes, UIButtonProps } from './types';
import { SHADOW_CONFIG } from 'ui/components/ui-kit/ui-button/config';
import { APP_COLORS } from 'app/theme';
import { useSpacings } from 'tools/hooks/use-spacings/use-spacings';

export const UIButton: FC<UIButtonProps> = ({ type, loading, disabled, title, LeftIcon, onPress, buttonStyles, shouldDisableShadow, ...props }) => {
  const { margin, padding } = useSpacings(props);
  const { styles, theme } = useStyles(stylesheet);
  const dynamicStyles = type === ButtonTypes.smallPrimary || type === ButtonTypes.smallSecondary ? styles['button-small'] : styles.button;

  const onPressWithImpact = async () => {
    // @ts-ignore
    onPress?.();
    await impactAsync(ImpactFeedbackStyle.Light);
  };

  // @ts-ignore
  return (
    <Shadow
      stretch
      disabled={disabled || type === ButtonTypes.texted || type === ButtonTypes.outlined || type === ButtonTypes.smallPrimary || shouldDisableShadow}
      distance={SHADOW_CONFIG[type].distance}
      startColor={theme.colors.btn[type].shadow}
      offset={SHADOW_CONFIG[type].offset}
      style={[margin, padding]}
    >
      <UIView
        disabled={disabled}
        onPress={loading ? undefined : onPressWithImpact}
        {...props}
        style={[dynamicStyles, styles[type](disabled || false), buttonStyles]}
      >
        {loading ? (
          <ActivityIndicator color={theme.colors.loader.bg} />
        ) : (
          <UIView direction={'row'} ai={'center'} jc={'center'} gap={8}>
            {LeftIcon ? <LeftIcon color={disabled ? theme.colors.btn[type].textDisabled : theme.colors.btn[type].text} /> : null}
            <UIText
              font={'p1M'}
              color={
                disabled ? (theme.colors.btn[type].textDisabled as keyof typeof APP_COLORS) : (theme.colors.btn[type].text as keyof typeof APP_COLORS)
              }
            >
              {title}
            </UIText>
          </UIView>
        )}
      </UIView>
    </Shadow>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 14,
    minHeight: 48,
  },
  'button-small': {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 14,
    minHeight: 32,
  },
  filled: (disabled: boolean) => ({
    backgroundColor: disabled ? theme.colors.btn.filled.disabled : theme.colors.btn.filled.bg,
  }),
  outlined: (disabled: boolean) => ({
    borderColor: disabled ? theme.colors.btn.outlined.disabled : theme.colors.btn.outlined.bg,
    borderWidth: 1,
  }),
  texted: () => ({
    backgroundColor: theme.colors.btn.texted.bg,
  }),
  elevated: (disabled: boolean) => ({
    backgroundColor: disabled ? theme.colors.btn.elevated.disabled : theme.colors.btn.elevated.bg,
  }),
  smallPrimary: (disabled: boolean) => ({
    backgroundColor: disabled ? theme.colors.btn.smallPrimary.disabled : theme.colors.btn.smallPrimary.bg,
  }),
  smallSecondary: (disabled: boolean) => ({
    backgroundColor: disabled ? theme.colors.btn.smallSecondary.disabled : theme.colors.btn.smallSecondary.bg,
  }),
}));
