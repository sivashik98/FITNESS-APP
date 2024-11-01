import { Control } from 'react-hook-form';

import { UITextFieldProps } from 'ui/components/ui-kit/ui-text-field/types';

export type FormDateFieldProps = {
  control: Control<any>;
  name: string;
} & Partial<UITextFieldProps>;
