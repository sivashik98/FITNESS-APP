import { FC } from 'react';
import { useController } from 'react-hook-form';

import { UIDatePicker } from 'ui/components';

import { FormDatePickerProps } from 'ui/components/form/form-date-picker/types';

export const FormDatePicker: FC<FormDatePickerProps> = ({ control, name, ...props }) => {
  const { field, fieldState } = useController({
    control,
    name,
    shouldUnregister: true,
  });

  return (
    <UIDatePicker
      placeholder={'Введите дату'}
      {...props}
      value={field.value}
      onConfirm={field.onChange}
      errorMessage={fieldState.error?.message}
      onClear={() => field.onChange(null)}
    />
  );
};
