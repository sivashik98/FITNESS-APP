import { FC } from 'react';

import { FormField, UISegmentedControl, UIText, UIView } from 'ui/components';

import { SEGMENTS } from 'bl-modules/auth/hybrid-auth/adapters/constants';
import { AuthFormProps } from 'ui/screens/auth/hybrid-auth/components/auth-form/types';

export const AuthForm: FC<AuthFormProps> = ({ toggleTab, currentTab, form, shouldHideSegmentControl, title }) => {
  return (
    <UIView gap={30} paddingT={20}>
      <UIText font={'h1'}>{title}</UIText>
      {shouldHideSegmentControl ? undefined : <UISegmentedControl values={SEGMENTS} selectedIndex={currentTab.index} onChange={toggleTab} />}
      {currentTab.type === 'email' ? (
        <FormField
          key={'email'}
          name={'email'}
          control={form.email.control}
          keyboardType={'email-address'}
          placeholder={'email@domain.com'}
          leadingAccessory={<UIText font={'p2B'}>Email</UIText>}
          bottomHint={'На почту поступит одноразовый пароль для входа в систему'}
        />
      ) : (
        <FormField
          mask={'([000]) [000]-[00]-[00]'}
          key={'phone'}
          name={'phone'}
          control={form.phone.control}
          keyboardType={'number-pad'}
          placeholder={'Номер телефона'}
          leadingAccessory={<UIText font={'p2B'}>+7</UIText>}
          bottomHint={'На номер поступит одноразовый код для входа в систему'}
        />
      )}
    </UIView>
  );
};
