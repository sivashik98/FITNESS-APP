import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-ui-lib';
import { ImageBackground } from 'expo-image';

import { UIText } from 'ui/components';

import { MediaWidgetProps } from 'ui/components/media-widget/types';
import { APP_COLORS } from 'app/theme';

export const MediaWidget: FC<MediaWidgetProps> = ({ widget, containerStyles }) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyles]}>
      <ImageBackground source={widget.wallpaper} style={styles.wallpaper}>
        {widget.subtitle && (
          <UIText p3R color={APP_COLORS.white}>
            {widget.subtitle}
          </UIText>
        )}

        <UIText p1B color={APP_COLORS.white}>
          {widget.title}
        </UIText>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: APP_COLORS.gray,
  },
  wallpaper: {
    width: 170,
    height: 170,
    padding: 6,
    justifyContent: 'flex-end',
  },
  widgetStyle: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
});
