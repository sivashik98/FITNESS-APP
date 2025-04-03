import { Control } from 'react-hook-form';

import { UIDatePickerProps } from 'ui/components/ui-kit/ui-date-picker/types';

export type FormDatePickerProps = {
  control: Control<any>;
  name: string;
} & Omit<UIDatePickerProps, 'value' | 'errorMessage' | 'onConfirm' | 'onClear'>;
