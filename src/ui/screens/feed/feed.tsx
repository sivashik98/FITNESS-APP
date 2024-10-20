import { UIText, UIView } from 'ui/components/ui-kit';
import { Screen } from 'ui/components';
import { UserWidget } from 'ui/components/user-widget/user-widget';
import { ScrollView } from 'react-native-gesture-handler';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { MediaWidget } from 'ui/components/media-widget/media-widget';
import { ImageSource } from 'expo-image';
import { ScreenHeaderTypes } from 'ui/components/screen/types';

type MediaWidget = {
  title: string;
  subtitle?: string;
  wallpaper: ImageSource;
};

const WORKOUTS: MediaWidget[] = [
  { title: 'Здоровая спина', wallpaper: require('png/crossfit.png') },
  { title: 'Бег', wallpaper: require('png/workouts-fitness.png') },
  { title: 'Кроссфит', wallpaper: require('png/workouts-jogging.png') },
  { title: 'Жим лежа', wallpaper: require('png/crossfit.png') },
  { title: 'Троеборье', wallpaper: require('png/workouts-fitness.png') },
  { title: 'Футбол', wallpaper: require('png/workouts-jogging.png') },
];
const BLOGS: MediaWidget[] = [
  { title: 'Bill Walsh leadership lessons', subtitle: '20.03.24', wallpaper: require('png/blog-1.png') },
  { title: 'Bill Walsh leadership lessons', subtitle: '20.03.24', wallpaper: require('png/blog-2.png') },
  { title: 'Bill Walsh leadership lessons', subtitle: '20.03.24', wallpaper: require('png/blog-1.png') },
  { title: 'Bill Walsh leadership lessons', subtitle: '20.03.24', wallpaper: require('png/blog-2.png') },
  { title: 'Bill Walsh leadership lessons', subtitle: '20.03.24', wallpaper: require('png/blog-1.png') },
  { title: 'Bill Walsh leadership lessons', subtitle: '20.03.24', wallpaper: require('png/blog-2.png') },
  { title: 'Bill Walsh leadership lessons', subtitle: '20.03.24', wallpaper: require('png/blog-1.png') },
  { title: 'Bill Walsh leadership lessons', subtitle: '20.03.24', wallpaper: require('png/blog-2.png') },
];

export const FeedScreen = ({}) => {
  return (
    <Screen
      removeTopSpace
      headerType={ScreenHeaderTypes.User}
      scroll
      container={0}
      content={
        <UIView paddingT-20 flex>
          <UIView gap-20 marginH-20>
            <UIView row spread gap-20>
              <UserWidget widget={{ title: 'Твой вес', content: '63.7 кг', subtitle: '16 августа' }} />
              <UserWidget widget={{ title: 'Цель', content: '56.2 кг', subtitle: '72 %' }} />
            </UIView>
            <UIView row spread gap-20>
              <UserWidget widget={{ title: 'Прогресс', content: '23 %', subtitle: 'у тебя все получится, верь' }} />
              <UserWidget widget={{ title: 'Выпито воды', content: '2.3 л.', subtitle: '55 %' }} />
            </UIView>
          </UIView>

          <UIView row spread centerV marginT-20 marginH-20>
            <UIText p1B>Тренировки</UIText>
            <UIText onPress={() => alert('Press')} p3R type={TextTypes.secondary}>
              См. все
            </UIText>
          </UIView>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginTop: 20, gap: 20 }}>
            {WORKOUTS.map((el, index) => (
              <MediaWidget key={index} widget={el} containerStyles={{ marginLeft: 20 }} />
            ))}
          </ScrollView>

          <UIView row spread centerV marginT-20 marginH-20>
            <UIText p1B>Статьи</UIText>
            <UIText onPress={() => alert('Press')} p3R type={TextTypes.secondary}>
              См. все
            </UIText>
          </UIView>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginTop: 20 }}>
            {BLOGS.map((el, index) => (
              <MediaWidget key={index} widget={el} containerStyles={{ marginLeft: 20 }} />
            ))}
          </ScrollView>
        </UIView>
      }
    />
  );
};
