import { Control } from 'react-hook-form';

import { UITextFieldProps } from 'ui/components/ui-kit/ui-text-field/types';

export type FormFieldProps = {
  control: Control<any>;
  name: string;
} & Omit<UITextFieldProps, 'value' | 'onChange' | 'errorMessage' | 'onChangeText' | 'onClear'>;
