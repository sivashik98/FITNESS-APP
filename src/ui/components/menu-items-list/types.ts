import { FC } from 'react';

export type MenuItemsListProps = {
  items: MenuItemList[];
};

export type MenuItemList = {
  title: string;
  RightComponent?: FC;
  onPress?: () => void;
};
