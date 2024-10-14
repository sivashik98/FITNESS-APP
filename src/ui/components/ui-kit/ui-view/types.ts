import { ViewProps } from 'react-native-ui-lib';
import { ViewStyle } from 'react-native';

export type UIViewProps = ViewProps & {
  zIndex?: ViewStyle['zIndex'];
};
