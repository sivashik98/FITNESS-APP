import { ReactElement } from 'react';

export type MenuItemsListProps = {
  items: MenuItemList[];
};

export type MenuItemList = {
  title: string;
  RightComponent?: ReactElement;
  onPress?: () => void;
};
