import { FC } from 'react';
import { useController } from 'react-hook-form';

import { UICodeField, UITextField } from 'components/ui-kit';

import { FormFieldTypes, FormFieldProps } from 'components/form-field/types';

export const FormField: FC<FormFieldProps> = ({ type, control, name, textFieldProps, codeFieldProps }) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: '',
    shouldUnregister: false,
  });

  if (type === FormFieldTypes.CODE_FIELD)
    return (
      <UICodeField
        key={name}
        {...codeFieldProps}
        // ref={field.ref}
        value={field.value}
        // onClear={() => field.onChange('')}
        onChangeText={field.onChange}
        errorMessage={fieldState.error?.message}
      />
    );

  if (type === FormFieldTypes.TEXT_FIELD)
    return (
      <UITextField
        key={name}
        {...textFieldProps}
        ref={field.ref}
        value={field.value}
        onClear={() => field.onChange('')}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        errorMessage={fieldState.error?.message}
      />
    );

  return null;
};
