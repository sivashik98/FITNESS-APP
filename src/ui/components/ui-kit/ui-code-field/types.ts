import { CodeFieldProps } from 'react-native-confirmation-code-field';

export type UICodeFieldProps = {
  errorMessage?: string;
  bottomHint?: string;
  value?: string;
  onChangeText?: (text: string) => void;
} & Omit<CodeFieldProps, 'renderCell'>;
