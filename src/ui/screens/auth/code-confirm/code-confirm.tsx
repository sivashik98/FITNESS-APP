import { RouteProp, useRoute } from '@react-navigation/native';

import { UIButton, UIText, UIView } from 'ui/components/ui-kit';
import { Screen, FormCodeField } from 'ui/components';

import { useCodeConfirmAdapter } from 'bl-modules/auth/code-confirm';
import { RootNavigationParams } from 'ui/navigation/root/types';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { ButtonTypes } from 'ui/components/ui-kit/ui-button/types';
import { ScreenHeaderTypes } from 'ui/components/screen/types';

export const CodeConfirmScreen = ({}) => {
  const { authType, authData } = useRoute<RouteProp<RootNavigationParams, 'CodeConfirmScreen'>>()?.params;
  const { form, handlers, localState } = useCodeConfirmAdapter();

  return (
    <Screen
      headerType={ScreenHeaderTypes.Default}
      scroll
      content={
        <>
          <UIText h2>Код отправили на {authType === 'email' ? 'почту' : 'номер'}:</UIText>
          <UIText h2 type={TextTypes.secondary}>
            {authType === 'email' ? authData : `+7 ${authData}`}
          </UIText>
          <UIView marginT-70 gap-10>
            <UIText p1B>Теперь введите код</UIText>
            <FormCodeField
              name={'code'}
              control={form.code.control}
              cellCount={6}
              onFinishFillingCode={form.code.handleSubmit(handlers.submitHandler)}
              bottomHint={`Если код не придет, можно получить новый ${localState.shouldShowTimer ? `через ${localState.duration} сек` : 'сейчас'} `}
            />
          </UIView>
        </>
      }
      footer={
        <UIButton disabled={localState.shouldShowTimer} type={ButtonTypes.filled} title={'Получить новый код'} onPress={localState.enableTimer} />
      }
    />
  );
};
