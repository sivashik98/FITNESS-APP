import { RouteProp, useRoute } from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';

import { UIButton, UIText, UIView } from 'components/ui-kit';
import { Screen } from 'ui/components';
import { FormField } from 'components/form-field/form-field';

import { useCodeConfirmAdapter } from 'bl-modules/auth/code-confirm';
import { RootNavigationParams } from 'navigation/root/types';
import { SignUpTypes } from 'bl-modules/auth/sign-up/slice/types';
import { FormFieldTypes } from 'components/form-field/types';

export const CodeConfirmScreen = ({}) => {
  const { signUpType, formData } = useRoute<RouteProp<RootNavigationParams, 'CodeConfirmScreen'>>()?.params;
  const { form, handlers, localState } = useCodeConfirmAdapter();

  return (
    <Screen
      scroll
      scrollContainerStyles={{ flex: 1 }}
      content={
        <>
          <UIView flex>
            <UIText h2>Код отправили на {signUpType === SignUpTypes.EMAIL ? 'почту' : 'номер'}:</UIText>
            <UIText h2 type={'secondary'}>
              {signUpType === SignUpTypes.EMAIL ? formData : `+7 ${formData}`}
            </UIText>
            <UIView marginT-70 gap-10>
              <UIText p1B>Теперь введите код</UIText>
              <FormField
                type={FormFieldTypes.CODE_FIELD}
                name={'code'}
                control={form.code.control}
                codeFieldProps={{
                  cellCount: 6,
                  bottomHint: `Если код не придет, можно получить новый ${
                    localState.shouldShowTimer ? `через ${localState.duration} сек` : 'сейчас'
                  } `,
                }}
              />
            </UIView>
          </UIView>
          <KeyboardAvoidingView style={{ gap: 20 }}>
            <UIButton disabled={localState.shouldShowTimer} type={'filled'} title={'Получить новый код'} onPress={localState.enableTimer} />
            <UIButton
              disabled={!form.code.formState.isDirty}
              type={'filled'}
              title={'Продолжить'}
              onPress={form.code.handleSubmit(handlers.submitHandler)}
            />
          </KeyboardAvoidingView>
        </>
      }
    />
  );
};
