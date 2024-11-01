import { Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { UIText, UIView } from 'ui/components/ui-kit';
import { ArticleWidget, Screen, UserWidget, WorkoutWidget } from 'ui/components';

import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { ScreenHeaderTypes } from 'ui/components/screen/types';
import { NavigationService } from 'tools/services';
import { WorkoutWidgetProps } from 'ui/components/widgets/workout-widget/types';
import { ArticleWidgetProps } from 'ui/components/widgets/article-widget/types';

const WORKOUTS: WorkoutWidgetProps['widget'][] = [
  { title: 'Здоровая спина', wallpaper: require('png/crossfit.png') },
  { title: 'Бег', wallpaper: require('png/workouts-fitness.png') },
  { title: 'Кроссфит', wallpaper: require('png/workouts-jogging.png') },
  { title: 'Жим лежа', wallpaper: require('png/crossfit.png') },
  { title: 'Троеборье', wallpaper: require('png/workouts-fitness.png') },
  { title: 'Футбол', wallpaper: require('png/workouts-jogging.png') },
];
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

export const FeedScreen = ({}) => {
  return (
    <Screen
      removeTopSpace
      headerType={ScreenHeaderTypes.User}
      scroll
      container={0}
      content={
        <UIView paddingT={20} flex={1} style={{ marginTop: Platform.select({ ios: 0, android: 20 }) }}>
          <UIView gap={20} marginH={20}>
            <UIView direction={'row'} jc={'space-between'} gap={20}>
              <UserWidget widget={{ title: 'Твой вес', content: '63.7 кг', subtitle: '16 августа' }} />
              <UserWidget widget={{ title: 'Цель', content: '56.2 кг', subtitle: '72 %' }} />
            </UIView>
            <UIView direction={'row'} jc={'space-between'} gap={20}>
              <UserWidget widget={{ title: 'Прогресс', content: '23 %', subtitle: 'у тебя все получится, верь' }} />
              <UserWidget widget={{ title: 'Выпито воды', content: '2.3 л.', subtitle: '55 %' }} />
            </UIView>
          </UIView>

          <UIView direction={'row'} jc={'space-between'} ai={'center'} marginT={20} marginH={20}>
            <UIText font={'p1B'}>Тренировки</UIText>
            <UIText onPress={() => NavigationService.navigate('WorkoutScreen')} font={'p3R'} type={TextTypes.secondary}>
              См. все
            </UIText>
          </UIView>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginTop: 20, gap: 20 }}>
            {WORKOUTS.map((widget, index) => (
              <WorkoutWidget key={index} widget={widget} marginL={20} />
            ))}
          </ScrollView>

          <UIView direction={'row'} jc={'space-between'} ai={'center'} marginT={20} marginH={20}>
            <UIText font={'p1B'}>Статьи</UIText>
            <UIText onPress={() => NavigationService.navigate('ArticlesScreen')} font={'p3R'} type={TextTypes.secondary}>
              См. все
            </UIText>
          </UIView>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginTop: 20 }}>
            {ARTICLES.map((widget, index) => (
              <ArticleWidget key={index} widget={widget} marginL={20} />
            ))}
          </ScrollView>
        </UIView>
      }
    />
  );
};
