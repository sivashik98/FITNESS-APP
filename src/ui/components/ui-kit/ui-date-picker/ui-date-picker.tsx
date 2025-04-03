import { FC, useState } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import DatePicker from 'react-native-date-picker';
import { ru } from 'date-fns/locale';

import { UIText, UIView } from 'ui/components/ui-kit';
import { SvgContainer } from 'ui/components';
import { CloseCircleIconSvg } from 'svg/icons/close-circle-icon';
import { CalendarIconSvg } from 'svg/icons/calendar-icon';

import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { DateService } from 'tools/services';
import { UIDatePickerProps } from 'ui/components/ui-kit/ui-date-picker/types';
import { QuestionMarkIconSvg } from 'svg/icons/question-mark-icon';

export const UIDatePicker: FC<UIDatePickerProps> = ({
  label,
  placeholder,
  value,
  onConfirm,
  maximumDate,
  leadingAccessory,
  bottomHint,
  errorMessage,
  onClear,
  minimumDate,
}) => {
  const { styles } = useStyles(stylesheet);
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = (date: Date) => {
    // @ts-ignore
    const formatted = DateService.format(date, 'd MMMM yyyy', { locale: ru });
    setIsOpen(false);
    onConfirm(date);
  };

  return (
    <UIView flexS={1}>
      {label && (
        <UIView marginR={20}>
          <UIText font={'p2B'}>{label}</UIText>
        </UIView>
      )}
      <UIView style={[styles.container, errorMessage ? styles['container-error'] : undefined]}>
        {leadingAccessory ? <UIView marginR={12}>{leadingAccessory}</UIView> : null}
        <UIView style={styles.field} onPress={() => setIsOpen(true)}>
          {value ? (
            <UIText font={'p2R'} type={errorMessage ? TextTypes.error : TextTypes.primary}>
              {DateService.format(value, 'd MMMM yyyy', { locale: ru })}
            </UIText>
          ) : (
            <UIText font={'p2R'} type={errorMessage ? TextTypes.error : TextTypes.secondary}>
              {placeholder}
            </UIText>
          )}
        </UIView>
        {value ? (
          <SvgContainer
            Icon={CloseCircleIconSvg}
            animated
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.icon}
            onPress={onClear}
          />
        ) : (
          <SvgContainer Icon={CalendarIconSvg} animated from={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={styles.icon} />
        )}
      </UIView>
      <UIView gap={10} marginT={10}>
        {errorMessage && (
          <UIText font={'p2R'} type={TextTypes.error}>
            {errorMessage}
          </UIText>
        )}
        {bottomHint && (
          <UIView direction={'row'} gap={10}>
            <SvgContainer Icon={QuestionMarkIconSvg} style={{ marginTop: 5 }} />
            <UIText font={'p2R'} type={TextTypes.secondary}>
              {bottomHint}
            </UIText>
          </UIView>
        )}
      </UIView>
      <DatePicker
        modal
        title={'Выберите дату'}
        confirmText={'Выбрать'}
        cancelText={'Отменить'}
        mode={'date'}
        locale={'ru'}
        date={value || new Date()}
        open={isOpen}
        maximumDate={maximumDate || new Date()}
        minimumDate={minimumDate || undefined}
        onConfirm={handleConfirm}
        onCancel={() => setIsOpen(false)}
      />
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.35,
    paddingVertical: 12,
    borderColor: theme.colors.datePicker.border,
  },
  'container-error': { borderColor: theme.colors.datePicker.error },
  field: { flex: 1 },
  icon: {
    alignItems: 'center',
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
}));
