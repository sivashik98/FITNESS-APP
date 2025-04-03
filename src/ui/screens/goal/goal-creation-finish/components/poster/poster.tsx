import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SvgContainer, UIView } from 'ui/components';

import { DimensionsService } from 'tools/services';
import { MiniLogoSvg } from 'svg/mini-logo';
import { APP_COLORS } from 'app/theme';

export const Poster = () => {
  const { top } = useSafeAreaInsets();
  const topOffset = top || 50;

  return (
    <UIView animated from={{ opacity: 0.3, scale: 0.3 }} animate={{ opacity: 1, scale: 1 }} ai={'center'}>
      <Image source={require('png/goal-creation-finish-preview.png')} style={styles.image} />
      <SvgContainer Icon={MiniLogoSvg} ai={'center'} marginT={topOffset} iconProps={{ color: APP_COLORS.white }} />
    </UIView>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: DimensionsService.screen.height,
    width: DimensionsService.screen.width,
  },
});
