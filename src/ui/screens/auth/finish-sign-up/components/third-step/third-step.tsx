import { FC } from 'react';

import { FormField, UIText, UIView } from 'ui/components';
import { FormCheckbox } from 'ui/components/form/form-checkbox/form-checkbox';

import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { FinishSignUpStepProps } from 'ui/screens/auth/finish-sign-up/components/types';

export const ThirdStep: FC<FinishSignUpStepProps> = ({ form }) => (
  <UIView gap-30>
    <UIText h1>Укажите ваше имя</UIText>
    <UIText p2R type={TextTypes.secondary}>
      Вы всегда сможете изменить эту информацию в настройках приложения
    </UIText>
    <UIView gap-12>
      <FormField control={form.fullName.control} name={'name'} leadingAccessory={<UIText p1B>Фамилия</UIText>} placeholder={'Алинмова'} />
      <FormField control={form.fullName.control} name={'surname'} leadingAccessory={<UIText p1B>Имя</UIText>} placeholder={'Мила'} />
      <FormField control={form.fullName.control} name={'patronymic'} leadingAccessory={<UIText p1B>Отчество</UIText>} placeholder={'Отчество'} />
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
