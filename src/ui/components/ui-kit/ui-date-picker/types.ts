import { ReactElement } from 'react';
import { DatePickerProps } from 'react-native-date-picker';

export type UIDatePickerProps = {
  label?: string;
  placeholder?: string;
  value?: Date;
  onConfirm: (date: Date) => void;
  maximumDate?: DatePickerProps['maximumDate'];
  minimumDate?: DatePickerProps['minimumDate'];
  leadingAccessory?: ReactElement;
  bottomHint?: string;
  errorMessage?: string;
  //
  onClear: () => void;
};
