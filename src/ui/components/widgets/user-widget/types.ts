import { Spacings } from 'tools/hooks/use-spacings/types';

export type UserWidgetProps = {
  widget: Widget;
} & Spacings;

type Widget = {
  title: string;
  subtitle: string;
  content: string;
};
