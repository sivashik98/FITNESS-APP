import { FC } from 'react';

import { FormField, UIText, UIView } from 'ui/components';
import { FormCheckbox } from 'ui/components/form/form-checkbox/form-checkbox';

import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { FinishSignUpStepProps } from 'ui/screens/auth/finish-sign-up/components/types';
import { NavigationService } from 'tools/services';

export const ThirdStep: FC<FinishSignUpStepProps> = ({ form }) => (
  <UIView gap={30}>
    <UIText font={'h1'}>Укажите ваше имя</UIText>
    <UIText font={'p2R'} type={TextTypes.secondary}>
      Вы всегда сможете изменить эту информацию в настройках приложения
    </UIText>
    <UIView gap={12}>
      <FormField control={form.fullName.control} name={'name'} leadingAccessory={<UIText font={'p1B'}>Фамилия</UIText>} placeholder={'Имя'} />
      <FormField control={form.fullName.control} name={'surname'} leadingAccessory={<UIText font={'p1B'}>Имя</UIText>} placeholder={'Фамилия'} />
      <FormField
        control={form.fullName.control}
        name={'patronymic'}
        leadingAccessory={<UIText font={'p1B'}>Отчество</UIText>}
        placeholder={'Отчество'}
      />
      <FormCheckbox
        name={'checkbox'}
        control={form.fullName.control}
        Label={
          <UIText font={'p2R'}>
            Я согласен на обработку персональных данных и принимаю
            <UIText onPress={() => NavigationService.navigate('PrivacyPolicyScreen')} font={'p2R'} type={TextTypes.accent}>
              {' условия политики конфиденциальности'}
            </UIText>
          </UIText>
        }
      />
    </UIView>
  </UIView>
);
