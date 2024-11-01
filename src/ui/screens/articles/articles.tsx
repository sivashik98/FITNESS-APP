import { UIView } from 'ui/components/ui-kit';
import { ArticleWidget, Screen } from 'ui/components';

import { ScreenHeaderTypes } from 'ui/components/screen/types';
import { ArticleWidgetProps } from 'ui/components/widgets/article-widget/types';

const ARTICLES: ArticleWidgetProps['widget'][] = [
  { title: 'Bill Walsh leadership lessons', date: '20.03.24', image: require('png/blog-1.png') },
  { title: 'Bill Walsh leadership lessons', date: '20.03.24', image: require('png/blog-2.png') },
  { title: 'Bill Walsh leadership lessons', date: '20.03.24', image: require('png/blog-1.png') },
  { title: 'Bill Walsh leadership lessons', date: '20.03.24', image: require('png/blog-2.png') },
  { title: 'Bill Walsh leadership lessons', date: '20.03.24', image: require('png/blog-1.png') },
  { title: 'Bill Walsh leadership lessons', date: '20.03.24', image: require('png/blog-2.png') },
  { title: 'Bill Walsh leadership lessons', date: '20.03.24', image: require('png/blog-1.png') },
  { title: 'Bill Walsh leadership lessons', date: '20.03.24', image: require('png/blog-2.png') },
];

export const ArticlesScreen = ({}) => {
  return (
    <Screen
      scroll
      removeTopSpace
      headerType={ScreenHeaderTypes.Default}
      headerProps={{ title: 'Статьи' }}
      container={16}
      content={
        <UIView gap={20}>
          {ARTICLES.map((widget, index) => (
            <ArticleWidget key={index} widget={widget} />
          ))}
        </UIView>
      }
    />
  );
};
