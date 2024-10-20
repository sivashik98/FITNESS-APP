import { FC } from 'react';
import { useController } from 'react-hook-form';

import { UICheckbox } from 'ui/components/ui-kit/ui-checkbox/ui-checkbox';

import { FormCheckboxProps } from 'ui/components/form/form-checkbox/types';

export const FormCheckbox: FC<FormCheckboxProps> = ({ control, name, ...props }) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: '',
    shouldUnregister: false,
  });

  return <UICheckbox value={field.value} onValueChange={field.onChange} errorMessage={fieldState.error?.message} {...props} />;
};
