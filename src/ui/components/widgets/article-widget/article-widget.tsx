import { FC } from 'react';
import { Image } from 'expo-image';

import { UIText, UIView } from 'ui/components';

import { useSpacings } from 'tools/hooks/use-spacings/use-spacings';
import { ArticleWidgetProps } from 'ui/components/widgets/article-widget/types';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const ArticleWidget: FC<ArticleWidgetProps> = ({ widget, ...props }) => {
  const { margin } = useSpacings(props);
  const { styles } = useStyles(stylesheet);

  return (
    <UIView style={[styles.container, margin]}>
      <Image source={widget.image} style={styles.image} />
      <UIText font={'p3M'}>{widget.date}</UIText>
      <UIText font={'p1B'}>{widget.title}</UIText>
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    borderRadius: 12,
    backgroundColor: theme.colors.articleWidget.bg,
    padding: 8,
    gap: 8,
    width: 220,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 12,
  },
}));
