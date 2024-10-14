import { ReactNode } from 'react';
import { UIViewProps } from 'components/ui-kit/ui-view/types';
import { CheckboxProps, CheckboxEvent } from 'expo-checkbox';

export type UICheckboxProps = {
  Label?: ReactNode;
  value: CheckboxEvent['value'];
  onValueChange: (value: boolean) => void;
  checkboxProps?: CheckboxProps;
  errorMessage?: string;
} & UIViewProps;
