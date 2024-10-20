import { ViewStyle } from 'react-native';

export type MediaWidgetProps = {
  widget: Widget;
  containerStyles: ViewStyle;
};

type Widget = {
  title: string;
  subtitle?: string;
  wallpaper: string;
};
