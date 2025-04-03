import { FC } from 'react';
import { TouchableOpacity } from 'react-native-ui-lib';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIText, UIView } from 'ui/components';

import { MenuItemsListProps } from 'ui/components/menu-items-list/types';
import { useSpacings } from 'tools/hooks/use-spacings/use-spacings';

export const MenuItemsList: FC<MenuItemsListProps> = ({ items, ...props }) => {
  const { styles } = useStyles(stylesheet);
  const { margin, padding } = useSpacings(props);

  return (
    <UIView gap={1} style={[margin, padding]}>
      {items.map(({ title, RightComponent, onPress }, index) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;
        return (
          <TouchableOpacity
            disabled={!onPress}
            key={title}
            onPress={onPress}
            style={[styles.item, isFirst && styles['item-first'], isLast && styles['item-last']]}
          >
            <UIText font={'p2M'}>{title}</UIText>
            {RightComponent}
          </TouchableOpacity>
        );
      })}
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  item: {
    backgroundColor: theme.colors.menuItemList.bg,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  'item-first': {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  'item-last': {
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
}));
