import { FC } from 'react';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';

import { UIButton, UiSegmentedControl, UIText, UIView } from 'components/ui-kit';
import { Screen, FormField } from 'ui/components';

import { useSignUpAdapter } from 'bl-modules/auth/sign-up';
import { SignUpTypes } from 'bl-modules/auth/sign-up/slice/types';
import { SegmentedControlItemProps } from 'react-native-ui-lib/src/components/segmentedControl/segment';
import { FormFieldTypes } from 'components/form-field/types';

const SEGMENTS: SegmentedControlItemProps[] = [{ label: 'email' }, { label: 'номер телефона' }];

export const SignUpScreen: FC<{}> = ({}) => {
  const { variables, handlers, form } = useSignUpAdapter();

  const onChangeIndex = (index: number) => {
    const newTab = index === 0 ? SignUpTypes.EMAIL : SignUpTypes.PHONE;
    handlers.setCurrentTab(newTab);
    // Reset fields when changing tabs
    // if (newTab === SignUpTypes.EMAIL) {
    //   form[SignUpTypes.EMAIL].reset({ [SignUpTypes.EMAIL]: '' });
    // } else {
    //   form[SignUpTypes.PHONE].reset({ [SignUpTypes.PHONE]: '' });
    // }
  };

  return (
    <Screen
      scroll
      scrollContainerStyles={{ flex: 1 }}
      content={
        <>
          <UIView gap-30 flex>
            <UIText h1>Укажите email или номер телефона</UIText>
            <UiSegmentedControl segments={SEGMENTS} initialIndex={variables.currentTab === SignUpTypes.EMAIL ? 0 : 1} onChangeIndex={onChangeIndex} />
            {variables.currentTab === SignUpTypes.EMAIL ? (
              <FormField
                type={FormFieldTypes.TEXT_FIELD}
                key={SignUpTypes.EMAIL}
                name={SignUpTypes.EMAIL}
                control={form[SignUpTypes.EMAIL].control}
                textFieldProps={{
                  keyboardType: 'email-address',
                  placeholder: 'email@domain.com',
                  leadingAccessory: <UIText p2B>Email</UIText>,
                  bottomHint: 'На почту поступит одноразовый пароль для входа в систему',
                }}
              />
            ) : (
              <FormField
                type={FormFieldTypes.TEXT_FIELD}
                key={SignUpTypes.PHONE}
                name={SignUpTypes.PHONE}
                control={form[SignUpTypes.PHONE].control}
                textFieldProps={{
                  keyboardType: 'number-pad',
                  placeholder: 'Номер телефона',
                  leadingAccessory: <UIText p2B>+7</UIText>,
                  bottomHint: 'На номер поступит одноразовый код для входа в систему',
                }}
              />
            )}
          </UIView>
          <KeyboardAvoidingView>
            <UIButton
              disabled={!form[variables.currentTab].formState.isDirty}
              type={'filled'}
              title={'Продолжить'}
              onPress={form[variables.currentTab].handleSubmit(handlers.submitHandler)}
            />
          </KeyboardAvoidingView>
        </>
      }
    />
  );
};
