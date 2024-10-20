import { UIButton, UISegmentedControl, UIText, UIView } from 'ui/components/ui-kit';
import { Screen, FormField } from 'ui/components';

import { SEGMENTS } from 'bl-modules/auth/hybrid-auth/adapters/constants';
import { ButtonTypes } from 'ui/components/ui-kit/ui-button/types';
import { useHybridAuthAdapter } from 'bl-modules/auth/hybrid-auth/adapters/adapter';

export const HybridAuthScreen = () => {
  const { localState, handlers, form, variables } = useHybridAuthAdapter();

  return (
    <Screen
      scroll
      content={
        <UIView gap-30 flex>
          <UIText h1>Укажите email или номер телефона</UIText>
          <UISegmentedControl segments={SEGMENTS} onChangeIndex={localState.onChangeTab} />
          {localState.tab === 'email' ? (
            <FormField
              key={'email'}
              name={'email'}
              control={form.email.control}
              keyboardType={'email-address'}
              placeholder={'email@domain.com'}
              leadingAccessory={<UIText p2B>Email</UIText>}
              bottomHint={'На почту поступит одноразовый пароль для входа в систему'}
            />
          ) : (
            <FormField
              key={'phone'}
              name={'phone'}
              control={form.phone.control}
              keyboardType={'number-pad'}
              placeholder={'Номер телефона'}
              leadingAccessory={<UIText p2B>+7</UIText>}
              bottomHint={'На номер поступит одноразовый код для входа в систему'}
            />
          )}
        </UIView>
      }
      footer={
        <UIButton
          disabled={variables.isDisabledSubmit}
          type={ButtonTypes.filled}
          title={'Продолжить'}
          onPress={form[localState.tab].handleSubmit(handlers.submitHandler)}
        />
      }
    />
  );
};
