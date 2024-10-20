import { FC, memo } from 'react';
import { Pressable, ActivityIndicator } from 'react-native';
import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { Shadow } from 'react-native-shadow-2';

import { UIText, UIView } from 'ui/components/ui-kit';

import { UIButtonProps } from './types';
import { SHADOW_CONFIG } from 'ui/components/ui-kit/ui-button/config';
import { APP_COLORS } from 'app/theme';

export const UIButton: FC<UIButtonProps> = memo(({ type, loading, disabled, title, LeftIcon, onPress, ...props }) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Shadow
      disabled={disabled || type === 'texted' || type === 'outlined'}
      stretch
      distance={SHADOW_CONFIG[type].distance}
      startColor={theme.colors.btn[type].shadow}
      offset={SHADOW_CONFIG[type].offset}
    >
      <Pressable
        disabled={disabled}
        onPress={loading ? undefined : onPress}
        {...props}
        // @ts-ignore
        style={[styles.button, styles[type](disabled)]}
      >
        {loading ? (
          <ActivityIndicator color={theme.colors.loader.regular.bg} />
        ) : (
          <UIView row center gap-8>
            {LeftIcon ? <LeftIcon color={disabled ? APP_COLORS.gray : theme.colors.btn[type].text} /> : null}
            <UIText p1M color={disabled ? APP_COLORS.gray : theme.colors.btn[type].text}>
              {title}
            </UIText>
          </UIView>
        )}
      </Pressable>
    </Shadow>
  );
});

const stylesheet = createStyleSheet((theme) => ({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 14,
    minHeight: 48,
  },
  filled: (disabled: boolean) => ({
    backgroundColor: disabled ? APP_COLORS.lightGray : theme.colors.btn.filled.bg,
  }),
  outlined: (disabled: boolean) => ({
    borderColor: disabled ? APP_COLORS.lightGray : theme.colors.btn.outlined.bg,
    borderWidth: 1,
  }),
  texted: () => ({
    backgroundColor: theme.colors.btn.texted.bg,
  }),
  elevated: (disabled: boolean) => ({
    backgroundColor: disabled ? APP_COLORS.lightGray : theme.colors.btn.elevated.bg,
  }),
}));
