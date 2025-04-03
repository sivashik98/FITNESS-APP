import { FC } from 'react';
import { useController } from 'react-hook-form';
import { TextInputMaskProps } from 'react-native-text-input-mask';

import { UITextField } from 'ui/components/ui-kit';

import { FormFieldProps } from 'ui/components/form/form-field/types';

export const FormField: FC<FormFieldProps> = ({ control, name, ...props }) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: '',
    shouldUnregister: true,
  });
  // @ts-ignore
  const onChangeText: TextInputMaskProps['onChangeText'] = (formatted, extracted) => {
    field.onChange(formatted);
    // console.log(`formatted = ${formatted} | length = ${formatted.length}`);
    // console.log(`extracted = ${extracted} | length = ${extracted.length}`);
  };

  return (
    <UITextField
      {...props}
      key={name}
      ref={field.ref}
      value={field.value}
      onClear={() => field.onChange('')}
      onChangeText={onChangeText}
      onBlur={field.onBlur}
      errorMessage={fieldState.error?.message}
    />
  );
};
