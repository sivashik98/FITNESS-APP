import LottieView from 'lottie-react-native';
import { FadeIn, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import React, { FC, useEffect, useRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import shuffle from 'lodash/shuffle';

import { UIView } from 'ui/components';

import { DimensionsService } from 'tools/services';
import { SplashProps } from 'ui/components/splash/types';

export const Splash: FC<SplashProps> = ({ setIsReady }) => {
  const animationRef = useRef<LottieView | null>(null);
  const animationFinished = useSharedValue<boolean>(false);
  const animatedStyles = useAnimatedStyle(() => ({
    opacity: animationFinished.value ? withTiming(0, { duration: 200 }, () => runOnJS(setIsReady)(true)) : 1,
  }));
  const { styles, theme } = useStyles(stylesheet);
  const source = shuffle([
    require('lottie/splash-1.json'),
    require('lottie/splash-2.json'),
    require('lottie/splash-3.json'),
    require('lottie/splash-4.json'),
  ])[0];

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <UIView
      reanimated
      entering={FadeIn.duration(300).delay(150)}
      backgroundColor={theme.colors.app.bg}
      center
      style={[styles.container, animatedStyles]}
    >
      <LottieView
        ref={animationRef}
        source={source}
        loop={false}
        speed={1.6}
        onAnimationFinish={() => (animationFinished.value = true)}
        style={styles.lottie}
      />
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.app.bg,
  },

  lottie: {
    width: DimensionsService.screen.width,
    height: DimensionsService.screen.width,
  },
}));
