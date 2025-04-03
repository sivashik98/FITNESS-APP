import { FC } from 'react';
import { useController } from 'react-hook-form';

import { UIWeightPicker } from 'ui/components';

import { FormWeightPickerProps } from 'ui/components/form/form-weight-picker/types';

export const FormWeightPicker: FC<FormWeightPickerProps> = ({ control, name, ...props }) => {
  const { field, fieldState } = useController({ control, name, shouldUnregister: true });

  return (
    <UIWeightPicker
      placeholder={'Введите вес'}
      {...props}
      value={field.value}
      onConfirm={field.onChange}
      errorMessage={fieldState.error?.message}
      onClear={() => field.onChange(null)}
    />
  );
};
