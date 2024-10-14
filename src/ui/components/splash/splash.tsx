import { UIView } from 'components/ui-kit';
import LottieView from 'lottie-react-native';
import { runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import React, { FC, useEffect, useRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { SCREEN_WIDTH } from 'app/constants';

type SplashProps = {
  setIsReady: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Splash: FC<SplashProps> = ({ setIsReady }) => {
  const animationRef = useRef<LottieView | null>(null);
  const animationFinished = useSharedValue<boolean>(false);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: animationFinished.value ? withSpring(0.4) : 1.2 }],
    opacity: animationFinished.value ? withTiming(0, {}, () => runOnJS(setIsReady)(true)) : 1,
  }));
  const source = require('lottie/splash.json');
  const { styles } = useStyles(stylesheet);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <UIView reanimated center style={[styles.container, animatedStyles]}>
      <LottieView ref={animationRef} source={source} loop={false} onAnimationFinish={() => (animationFinished.value = true)} style={styles.lottie} />
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
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
  },
}));
