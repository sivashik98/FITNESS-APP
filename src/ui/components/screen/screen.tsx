import React, { FC, useMemo } from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

import { UserHeader, UIView, DefaultHeader } from 'ui/components';

import { ScreenHeaderTypes, ScreenProps } from 'ui/components/screen/types';
import { useGetLayout } from 'tools/hooks';
import { RefreshControl } from 'react-native-gesture-handler';
import { APP_COLORS } from 'app/theme';

const ScrollView = Animated.createAnimatedComponent(KeyboardAwareScrollView);

export const Screen: FC<ScreenProps> = ({ ...props }) => {
  const { styles } = useStyles(stylesheet);
  const insets = useSafeAreaInsets();
  const { onLayout, layout, refLayout } = useGetLayout();
  const topSpace = useMemo(
    () => (props.topSpace ? props.topSpace : props.removeTopSpace ? 0 : insets.top),
    [insets.top, props.removeTopSpace, props.topSpace]
  );
  const dynamicScreenStyles = useMemo(
    () =>
      props.scroll
        ? { paddingTop: topSpace }
        : {
            paddingTop: topSpace,
            paddingBottom: props.removeBottomSpace ? 0 : props.bottomSpace ? props.bottomSpace : insets.bottom || 15,
            paddingHorizontal: typeof props.container === 'number' ? props.container : 20,
          },
    [insets.bottom, props.container, props.removeBottomSpace, props.scroll, topSpace]
  );
  const dynamicContentContainerStyles = useMemo(
    () => ({
      paddingTop: layout?.height ? layout?.height : 0,
      paddingBottom: props.removeBottomSpace ? 0 : props.bottomSpace ? props.bottomSpace : insets.bottom || 15,
      paddingHorizontal: typeof props.container === 'number' ? props.container : 20,
    }),
    [insets.bottom, props.container, props.bottomSpace, props.removeBottomSpace, layout?.height]
  );
  const dynamicFooterStyles = useMemo(
    () => ({
      marginBottom: insets.bottom || 15,
      paddingTop: 10,
      paddingHorizontal: typeof props.footerContainer === 'number' ? props.footerContainer : 20,
    }),
    [insets.bottom, props.footerContainer]
  );

  // useEffect(() => {
  //   if (props.isLoading) {
  //     Keyboard.dismiss();
  //   }
  // }, [props.isLoading]);

  return (
    <UIView style={[dynamicScreenStyles, styles.screen]}>
      <>
        {props.headerType === ScreenHeaderTypes.User && (
          <UIView ref={refLayout} onLayout={onLayout} style={styles.userHeader}>
            <UserHeader />
          </UIView>
        )}
        {props.headerType === ScreenHeaderTypes.Default && (
          <UIView paddingH-20={props.scroll || props.container === 0}>
            <DefaultHeader {...props.headerProps} />
          </UIView>
        )}
        {props.scroll ? (
          <>
            <ScrollView
              onScroll={props.scrollHandler}
              entering={FadeIn.duration(300).delay(150)}
              nestedScrollEnabled
              style={[styles.container, props.scrollStyles]}
              overScrollMode={'never'}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={[dynamicContentContainerStyles, props.scrollContainerStyles]}
              // bounces={!!props.refresh}
              refreshControl={
                props.refresh ? (
                  <RefreshControl
                    refreshing={props.refresh.isLoading}
                    onRefresh={props.refresh.onRefresh}
                    tintColor={Platform.select({
                      ios: APP_COLORS.iris,
                      android: APP_COLORS.iris,
                    })}
                    colors={Platform.select({
                      ios: [APP_COLORS.iris],
                      android: [APP_COLORS.iris],
                    })}
                  />
                ) : undefined
              }
              keyboardDismissMode={'interactive'}
              keyboardShouldPersistTaps={'handled'}
            >
              {props.content}
            </ScrollView>
            {props.footer && (
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={[styles.footer, dynamicFooterStyles, props.footerStyles]}
                contentContainerStyle={props.footerContainerStyles}
                keyboardVerticalOffset={10}
              >
                {props.footer}
              </KeyboardAvoidingView>
            )}
          </>
        ) : (
          <Animated.View style={[styles.container, props.screenStyles]} entering={FadeIn.duration(300).delay(150)}>
            {props.content}
          </Animated.View>
        )}
      </>
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.app.bg,
  },
  content: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.app.bg,
    width: '100%',
  },
  footer: {},
  userHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
}));
