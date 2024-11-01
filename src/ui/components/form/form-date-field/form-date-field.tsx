import { FC, useState } from 'react';
import { useController } from 'react-hook-form';
import { ru } from 'date-fns/locale';
import DatePicker from 'react-native-date-picker';

import { UIText, UITextField, UIView } from 'ui/components/ui-kit';
import { DateService } from 'tools/services';
import { FormDateFieldProps } from 'ui/components/form/form-date-field/types';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';

export const FormDateField: FC<FormDateFieldProps> = ({ control, name, ...props }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: '',
    shouldUnregister: false,
  });

  const onConfirm = (date: Date) => {
    const formatted = DateService.format(date, 'd MMMM yyyy', { locale: ru });
    setIsOpen(false);
    setSelectedDate(date);
    field.onChange(`${formatted}`);
  };

  return (
    <>
      <UIView direction={'row'} gap={14}>
        <UIView flex={1}>
          <UITextField
            placeholder={'Выберите дату'}
            {...props}
            key={name}
            ref={field.ref}
            value={field.value}
            onClear={() => field.onChange('')}
            errorMessage={fieldState.error?.message}
          />
        </UIView>
        <UIView onPress={() => setIsOpen(true)} marginT={14}>
          <UIText font={'p2B'} type={fieldState.error?.message ? TextTypes.error : TextTypes.secondary}>
            Выбрать
          </UIText>
        </UIView>
      </UIView>
      <DatePicker
        modal
        title={'Выберите дату'}
        confirmText={'Выбрать'}
        cancelText={'Отменить'}
        mode={'date'}
        locale={'ru'}
        date={selectedDate}
        open={isOpen}
        maximumDate={new Date()}
        onConfirm={onConfirm}
        onCancel={() => setIsOpen(false)}
      />
    </>
  );
};
