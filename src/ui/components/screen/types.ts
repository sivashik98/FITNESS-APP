import { ReactElement } from 'react';
import { ViewStyle } from 'react-native';
import { DefaultHeaderProps } from 'components/headers/default-header/types';
import { ScrollHandlerProcessed } from 'react-native-reanimated';

export type ScreenProps = {
  content: ReactElement;
  footer?: ReactElement;
  isLoading?: boolean;
  isLoadingSkeleton?: boolean;
  notShowSkeleton?: boolean;
  scroll?: boolean;
  container?: number;
  footerContainer?: number;
  screenStyles?: ViewStyle;
  scrollStyles?: ViewStyle;
  scrollContainerStyles?: ViewStyle;
  footerStyles?: ViewStyle;
  footerContainerStyles?: ViewStyle;
  scrollKeyboardSupportEnableOnAndroid?: boolean;
  topSpace?: number;
  removeBottomSpace?: boolean;
  removeTopSpace?: boolean;
  bottomSpace?: number;
  headerType?: ScreenHeaderTypes;
  headerProps?: DefaultHeaderProps;
  // skeletonList?: ISkeletonListProps['list']
  // skeletonCount?: ISkeletonListProps['count']
  // skeletonContainer?: ISkeletonListProps['container']
  // headerProps?: IHeaderProps
  extraScroll?: number;
  // bg?: keyof typeof COLORS
  scrollHandler?: ScrollHandlerProcessed<Record<string, unknown>>;
  refresh?: {
    isLoading: boolean;
    onRefresh: () => void;
  };
};

export enum ScreenHeaderTypes {
  User = 'USER',
  Default = 'DEFAULT',
}
