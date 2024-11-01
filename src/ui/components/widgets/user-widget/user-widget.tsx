import { FC } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIText, UIView } from 'ui/components';

import { UserWidgetProps } from 'ui/components/user-widget/types';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { useSpacings } from 'tools/hooks/use-spacings/use-spacings';

export const UserWidget: FC<UserWidgetProps> = ({ widget, ...props }) => {
  const { styles, theme } = useStyles(stylesheet);
  const { margin, padding } = useSpacings(props);

  return (
    <UIView animated from={{ scale: 0.3 }} animate={{ scale: 1 }} style={[styles.container, margin, padding]}>
      <Shadow distance={6} startColor={theme.colors.userWidget.shadow} offset={[0, 2]} style={styles.widget} stretch>
        <UIText font={'p2B'}>{widget.title}</UIText>
        <UIView gap-14 ai={'center'} jc={'center'}>
          <UIText font={'h2'} center>
            {widget.content}
          </UIText>
          <UIText center font={'p3R'} type={TextTypes.secondary}>
            {widget.subtitle}
          </UIText>
        </UIView>
      </Shadow>
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
  },
  widget: {
    width: '100%',
    height: 150,
    backgroundColor: theme.colors.userWidget.bg,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
}));
