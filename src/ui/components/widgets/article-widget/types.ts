import { Spacings } from 'tools/hooks/use-spacings/types';

export type ArticleWidgetProps = {
  widget: Widget;
} & Spacings;

type Widget = {
  title: string;
  date: string;
  image: string;
};
