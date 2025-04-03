import { UIButton } from 'ui/components/ui-kit';
import { Screen } from 'ui/components';
import { CodeConfirmForm } from 'ui/screens/auth/code-confirm/components';

import { useCodeConfirmAdapter } from 'bl-modules/auth/code-confirm';
import { ButtonTypes } from 'ui/components/ui-kit/ui-button/types';
import { ScreenHeaderTypes } from 'ui/components/screen/types';

export const CodeConfirmScreen = ({}) => {
  const { form, variables, handlers } = useCodeConfirmAdapter();

  return (
    <Screen
      headerType={ScreenHeaderTypes.Default}
      scroll
      content={
        <CodeConfirmForm
          duration={variables.duration}
          shouldShowTimer={variables.shouldShowTimer}
          onSubmit={handlers.submitHandler}
          authMethodTitle={variables.authMethodTitle}
          authDataTitle={variables.authDataTitle}
          form={form}
        />
      }
      footer={<UIButton disabled={variables.shouldShowTimer} type={ButtonTypes.filled} title={'Получить новый код'} onPress={handlers.enableTimer} />}
    />
  );
};
