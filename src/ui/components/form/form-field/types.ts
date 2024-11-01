import { Control } from 'react-hook-form';

import { UITextFieldProps } from 'ui/components/ui-kit/ui-text-field/types';

export type FormFieldProps = {
  control: Control<any>;
  name: string;
  mask?: UITextFieldProps['mask'];
} & Partial<UITextFieldProps>;
