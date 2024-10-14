import React, { forwardRef, useMemo } from 'react';
import { View } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';

import { UIViewProps } from './types';

export const UIView = forwardRef<any, UIViewProps>(({ children, ...props }, ref) => {
  const styles = useMemo(() => StyleSheet.flatten([{ zIndex: props.zIndex }]), [props.zIndex]);

  return (
    <View ref={ref} style={[styles, props.style]} {...props}>
      {children}
    </View>
  );
});
