import { FC } from 'react';
import { useController } from 'react-hook-form';

import { UITextField } from 'ui/components/ui-kit';

import { FormFieldProps } from 'ui/components/form/form-field/types';

export const FormField: FC<FormFieldProps> = ({ control, name, ...props }) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: '',
    shouldUnregister: false,
  });

  return (
    <UITextField
      key={name}
      {...props}
      ref={field.ref}
      value={field.value}
      onClear={() => field.onChange('')}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      errorMessage={fieldState.error?.message}
    />
  );
};
