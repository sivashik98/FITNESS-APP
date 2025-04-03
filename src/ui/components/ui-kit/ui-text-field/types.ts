import { TextInputMaskProps } from 'react-native-text-input-mask';
import { ReactElement } from 'react';

export type UITextFieldProps = {
  value: TextInputMaskProps['value'];
  leadingAccessory?: ReactElement;
  label?: ReactElement;
  bottomHint?: string;
  errorMessage?: string;
  onClear: () => void;
} & TextInputMaskProps;
