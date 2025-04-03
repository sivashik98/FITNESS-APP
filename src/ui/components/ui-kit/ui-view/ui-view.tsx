import React, { forwardRef, useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';

import { UIViewProps } from './types';
import { useSpacings } from 'tools/hooks/use-spacings/use-spacings';
import { APP_COLORS } from 'app/theme';

export const UIView = forwardRef<any, UIViewProps>(({ children, onPress, animated, ...props }, ref) => {
  const { margin, padding } = useSpacings(props);
  const styles = useMemo(
    () =>
      StyleSheet.flatten([
        {
          backgroundColor: props.bg ? APP_COLORS[props.bg] : APP_COLORS.transparent,
          flex: props.flex,
          flexShrink: props.flexS,
          alignItems: props.ai,
          justifyContent: props.jc,
          alignSelf: props.as,
          flexDirection: props.direction,
          gap: props.gap,
          flexWrap: props.wrap,
          width: props.w,
          height: props.h,
          rowGap: props.gapR,
          columnGap: props.gapC,
          borderWidth: props.border,
          borderColor: props.borderC,
          borderRadius: props.radius || 0,
          borderTopRightRadius: props.radiusTR,
          borderTopLeftRadius: props.radiusTL,
          borderBottomRightRadius: props.radiusBR,
          borderBottomLeftRadius: props.radiusLR,
        },
        margin,
        padding,
        props.style,
      ]),
    [
      props.bg,
      props.flex,
      props.flexS,
      props.ai,
      props.jc,
      props.as,
      props.direction,
      props.gap,
      props.wrap,
      props.w,
      props.h,
      props.gapR,
      props.gapC,
      props.border,
      props.borderC,
      props.radius || 0,
      props.radiusTR,
      props.radiusTL,
      props.radiusBR,
      props.radiusLR,
      margin,
      padding,
      props.style,
    ],
  );

  if (onPress) {
    return animated ? (
      <MotiPressable ref={ref as any} onPress={onPress} style={styles} {...props}>
        {children}
      </MotiPressable>
    ) : (
      <Pressable ref={ref as any} onPress={onPress} style={styles} {...props}>
        {children}
      </Pressable>
    );
  }

  return animated ? (
    <MotiView ref={ref as any} style={styles} {...props}>
      {children}
    </MotiView>
  ) : (
    <View ref={ref as any} style={styles} {...props}>
      {children}
    </View>
  );
});
