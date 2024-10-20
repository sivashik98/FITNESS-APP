import { FC } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { TouchableOpacity } from 'react-native-ui-lib';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIText, UIView } from 'ui/components';

import { UserWidgetProps } from 'ui/components/user-widget/types';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';

export const UserWidget: FC<UserWidgetProps> = ({ widget }) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <TouchableOpacity style={styles.widgetContainerStyle}>
      <Shadow distance={6} startColor={theme.colors.userWidget.default.shadow} offset={[0, 2]} style={styles.widgetStyle} stretch>
        <UIText p2B>{widget.title}</UIText>
        <UIView gap-14 center>
          <UIText h2 center>
            {widget.content}
          </UIText>
          <UIText center p3R type={TextTypes.secondary}>
            {widget.subtitle}
          </UIText>
        </UIView>
      </Shadow>
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  widgetContainerStyle: {
    flex: 1,
  },
  widgetStyle: {
    width: '100%',
    height: 150,
    backgroundColor: theme.colors.userWidget.default.bg,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
}));
