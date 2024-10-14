import { TextFieldProps } from 'react-native-ui-lib';

export type UITextFieldProps = {
  leadingAccessory: TextFieldProps['leadingAccessory'];
  bottomHint?: string;
  errorMessage?: string;
} & TextFieldProps;
