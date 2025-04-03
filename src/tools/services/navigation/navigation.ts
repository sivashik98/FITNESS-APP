import { CommonActions, createNavigationContainerRef, StackActions } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

import { RootNavigationParams } from 'ui/navigation/root/types';

export const navigationRef = createNavigationContainerRef();

export const NavigationService = {
  navigate(name: keyof RootNavigationParams, params?: StackScreenProps<RootNavigationParams>['route']['params']) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(CommonActions.navigate(name, params));
    }
  },
  reset(name: keyof RootNavigationParams, params?: StackScreenProps<RootNavigationParams>['route']['params']) {
    if (navigationRef.isReady()) {
      navigationRef.reset({ index: 0, routes: [{ name, params }] });
    }
  },
  resetHistory(
    routes: {
      name: keyof RootNavigationParams;
      params?: StackScreenProps<RootNavigationParams>['route']['params'];
    }[],
  ) {
    if (navigationRef.isReady()) {
      navigationRef.reset({ index: 0, routes: routes });
    }
  },
  replace(name: keyof RootNavigationParams, params?: StackScreenProps<RootNavigationParams>['route']['params']) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.replace(name, params));
    }
  },
  push(name: keyof RootNavigationParams, params?: StackScreenProps<RootNavigationParams>['route']['params']) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.push(name, params));
    }
  },
  goBack() {
    if (navigationRef.isReady()) {
      navigationRef.goBack();
    }
  },
  getParams<T>(name: keyof RootNavigationParams): T | undefined {
    if (navigationRef.isReady()) {
      const route = navigationRef.getCurrentRoute();
      if (route && route.name === name) {
        return route.params as T;
      }
    }
    return undefined;
  },
  canGoBack() {
    if (navigationRef.isReady()) {
      return navigationRef.current?.canGoBack();
    } else {
      return false;
    }
  },
  popTo: (name: keyof RootNavigationParams, params?: StackScreenProps<RootNavigationParams>['route']['params'], merge?: boolean) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.popTo(name, params, merge));
    }
  },
};
