import { FC, useEffect } from 'react';
import { useController } from 'react-hook-form';

import { UICodeField, UIView } from 'ui/components/ui-kit';

import { FormCodeFieldProps } from 'ui/components/form/form-code-field/types';

export const FormCodeField: FC<FormCodeFieldProps> = ({ control, name, onFinishFillingCode, cellCount, ...props }) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: '',
    shouldUnregister: false,
  });

  useEffect(() => {
    if (field.value.length === cellCount) onFinishFillingCode?.();
  }, [field.value]);

  return (
    <UIView animated from={{ scale: 0.3 }} animate={{ scale: 1 }}>
      <UICodeField
        key={name}
        cellCount={cellCount}
        {...props}
        ref={field.ref}
        value={field.value}
        onChangeText={field.onChange}
        errorMessage={fieldState.error?.message}
        // onClear={() => field.onChange('')}
      />
    </UIView>
  );
};
