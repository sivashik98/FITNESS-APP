import { Control } from 'react-hook-form';

import { UIWeightPickerProps } from 'ui/components/ui-kit/ui-weight-picker/types';

export type FormWeightPickerProps = {
  control: Control<any>;
  name: string;
} & Omit<UIWeightPickerProps, 'value' | 'errorMessage' | 'onClear' | 'onConfirm'>;
