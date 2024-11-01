import { ReactNode } from 'react';
import { CheckboxProps, CheckboxEvent } from 'expo-checkbox';

import { Spacings } from 'tools/hooks/use-spacings/types';
import { UIViewProps } from 'ui/components/ui-kit/ui-view/types';

export type UICheckboxProps = {
  Label?: ReactNode;
  value: CheckboxEvent['value'];
  onValueChange: (value: boolean) => void;
  checkboxProps?: CheckboxProps;
  errorMessage?: string;
} & UIViewProps &
  Spacings;
