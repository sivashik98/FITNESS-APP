import { FC } from 'react';

import { FormField, Screen, UIText, UIView } from 'ui/components';
import { FormCheckbox } from 'components/form-checkbox/form-checkbox';

import { TextTypes } from 'components/ui-kit/ui-text/types';
import { FormFieldTypes } from 'components/form-field/types';
import { FinishSignUpStepProps } from 'screens/auth/finish-sign-up/components/types';

export const ThirdStep: FC<FinishSignUpStepProps> = ({ form }) => (
  <UIView gap-30>
    <UIText h1>Укажите ваше имя</UIText>
    <UIText p1B type={TextTypes.secondary}>
      Вы всегда сможете изменить эту информацию в настройках приложения
    </UIText>
    <UIView gap-12>
      <FormField
        type={FormFieldTypes.TEXT_FIELD}
        control={form.fullName.control}
        name={'name'}
        textFieldProps={{
          leadingAccessory: <UIText p1B>Фамилия</UIText>,
          placeholder: 'Алинмова',
        }}
      />
      <FormField
        type={FormFieldTypes.TEXT_FIELD}
        control={form.fullName.control}
        name={'surname'}
        textFieldProps={{
          leadingAccessory: <UIText p1B>Имя</UIText>,
          placeholder: 'Мила',
        }}
      />
      <FormField
        type={FormFieldTypes.TEXT_FIELD}
        control={form.fullName.control}
        name={'patronymic'}
        textFieldProps={{
          leadingAccessory: <UIText p1B>Отчество</UIText>,
          placeholder: 'Отчество',
        }}
      />
      <FormCheckbox
        name={'checkbox'}
        control={form.fullName.control}
        Label={
          <UIText p2R>
            Я согласен на обработку персональных данных и принимаю
            <UIText p2R type={TextTypes.accent}>
              {' условия политики конфиденциальности'}
            </UIText>
          </UIText>
        }
      />
    </UIView>
  </UIView>
);
