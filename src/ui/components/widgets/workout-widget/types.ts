import { Spacings } from 'tools/hooks/use-spacings/types';

export type WorkoutWidgetProps = {
  widget: Widget;
} & Spacings;

type Widget = {
  title: string;
  wallpaper: string;
};
