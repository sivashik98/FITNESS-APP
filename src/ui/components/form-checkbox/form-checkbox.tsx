import { FC } from 'react';
import { useController } from 'react-hook-form';

import { UICheckbox } from 'components/ui-kit/ui-checkbox/ui-checkbox';

import { FormCheckboxProps } from 'components/form-checkbox/types';

export const FormCheckbox: FC<FormCheckboxProps> = ({ control, name, ...props }) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: '',
    shouldUnregister: false,
  });

  return <UICheckbox value={field.value} onValueChange={field.onChange} errorMessage={fieldState.error?.message} {...props} />;
};
