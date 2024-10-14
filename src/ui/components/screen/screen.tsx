import React, { FC, ReactElement, useEffect, useMemo } from 'react';
import Animated, { FadeIn, ScrollHandlerProcessed } from 'react-native-reanimated';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ActivityIndicator, Keyboard, StyleSheet, KeyboardAvoidingView, Platform, RefreshControl, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { UIView } from 'ui/components';
import { APP_COLORS } from 'app/theme';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

const ScrollView = Animated.createAnimatedComponent(KeyboardAwareScrollView);

export interface IScreenProps {
  content: ReactElement;
  footer?: ReactElement;
  isLoading?: boolean;
  isLoadingSkeleton?: boolean;
  notShowSkeleton?: boolean;
  scroll?: boolean;
  container?: number;
  screenStyles?: ViewStyle;
  scrollStyles?: ViewStyle;
  scrollContainerStyles?: ViewStyle;
  scrollKeyboardSupportEnableOnAndroid?: boolean;
  topSpace?: number;
  removeBottomSpace?: boolean;
  removeTopSpace?: boolean;
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
}

export const Screen: FC<IScreenProps> = ({ ...props }) => {
  const { styles } = useStyles(stylesheet);
  // const isRendered = useIsRendered();
  const isRendered = true;
  const insets = useSafeAreaInsets();
  const showContent = useMemo(
    () => !props.isLoadingSkeleton && (props.notShowSkeleton || isRendered),
    [props.isLoadingSkeleton, props.notShowSkeleton, isRendered]
  );
  const topSpace = useMemo(
    () => (props.topSpace ? props.topSpace : props.removeTopSpace ? 0 : insets.top),
    [insets.top, props.removeTopSpace, props.topSpace]
  );
  // const { onLayout, layout, refLayout } = useGetLayout();
  // const layout = {};

  // const skeletonLayoutHeight = useMemo(() => {
  //   return (layout?.height || DimensionsService.HEIGHT) - topSpace - (props.removeBottomSpace ? 0 : insets.bottom || 15);
  // }, [insets.bottom, layout?.height, props.removeBottomSpace, topSpace]);

  const dynamicScreenStyles = useMemo(
    () =>
      props.scroll
        ? {
            paddingTop: topSpace,
          }
        : {
            paddingHorizontal: typeof props.container === 'number' ? props.container : 20,
            paddingTop: topSpace,
            paddingBottom: props.removeBottomSpace ? 0 : insets.bottom || 15,
          },
    [insets.bottom, props.container, props.removeBottomSpace, props.scroll, topSpace]
  );

  const dynamicContentContainerStyles = useMemo(
    () => ({
      paddingHorizontal: typeof props.container === 'number' ? props.container : 20,
      paddingBottom: props.removeBottomSpace ? 0 : insets.bottom || 15,
    }),
    [insets.bottom, props.container, props.removeBottomSpace]
  );

  useEffect(() => {
    if (props.isLoading) {
      Keyboard.dismiss();
    }
  }, [props.isLoading]);

  return (
    <UIView
      style={[dynamicScreenStyles, styles.screen]}
      // ref={refLayout}
      // onLayout={onLayout}
    >
      <>
        {/*{props.headerProps && (*/}
        {/*  <Header {...props.headerProps} container={props.scroll ? props.headerProps.container || props.container : props.headerProps.container} />*/}
        {/*)}*/}

        {showContent ? (
          props.scroll ? (
            <>
              <ScrollView
                onScroll={props.scrollHandler}
                entering={FadeIn.duration(300).delay(150)}
                nestedScrollEnabled
                // bounces={!!props.refresh}
                style={[styles.container, props.scrollStyles]}
                overScrollMode={'never'}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[dynamicContentContainerStyles, props.scrollContainerStyles]}
                // refreshControl={
                //   props.refresh ? (
                //     <RefreshControl
                //       refreshing={props.refresh.isLoading}
                //       onRefresh={props.refresh.onRefresh}
                //       tintColor={Platform.select({
                //         ios: APP_COLORS.iris,
                //         android: APP_COLORS.iris,
                //       })}
                //       colors={Platform.select({
                //         ios: [APP_COLORS.iris],
                //         android: [APP_COLORS.iris],
                //       })}
                //     />
                //   ) : undefined
                // }
                keyboardDismissMode={'interactive'}
                // enableAutomaticScroll
                // extraScrollHeight={props.extraScroll || 0}
                // enableOnAndroid
                keyboardShouldPersistTaps={'handled'}
                // keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
              >
                {/*{props.headerProps && <Header {...props.headerProps} />}*/}
                {props.content}
              </ScrollView>
              {props.footer && <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>{props.footer}</KeyboardAvoidingView>}
            </>
          ) : (
            <Animated.View style={[styles.container, props.screenStyles]} entering={FadeIn.duration(300).delay(150)}>
              {props.content}
            </Animated.View>
          )
        ) : (
          <>
            {/*<SkeletonList*/}
            {/*  container={props.scroll ? props.container || props.skeletonContainer : props.skeletonContainer}*/}
            {/*  fullHeight={skeletonLayoutHeight}*/}
            {/*  list={props.skeletonList}*/}
            {/*  fill*/}
            {/*  count={props.skeletonCount}*/}
            {/*  topSpace={props.scroll ? props.topSpace : 0}*/}
            {/*  bottomSpace={props.scroll ? (props.removeBottomSpace ? 0 : 0) : 0}*/}
            {/*/>*/}
          </>
        )}
      </>
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.app.bg,
    // backgroundColor: 'brown',
  },
  content: {
    flex: 1,
  },
  // loadingContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   zIndex: 3,
  //   backgroundColor: APP_COLORS.white,
  // },
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.app.bg,
    // backgroundColor: 'brown',
    width: '100%',
  },
}));
