import { Control } from 'react-hook-form';

import { UITextFieldProps } from 'components/ui-kit/ui-text-field/types';

export type FormFieldProps = {
  control: Control<any>;
  name: string;
} & UITextFieldProps;
