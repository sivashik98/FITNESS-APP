import { FC } from 'react';

import { FormCodeField, UIText, UIView } from 'ui/components';

import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { CodeConfirmFormProps } from 'ui/screens/auth/code-confirm/components/code-confirm-form/types';

export const CodeConfirmForm: FC<CodeConfirmFormProps> = ({ form, shouldShowTimer, authMethodTitle, authDataTitle, onSubmit, duration }) => {
  return (
    <>
      <UIText font={'h2'}>{authMethodTitle}</UIText>
      <UIText font={'h2'} type={TextTypes.secondary}>
        {authDataTitle}
      </UIText>
      <UIView marginT={70} gap={10}>
        <UIText font={'p1B'}>Теперь введите код</UIText>
        <FormCodeField
          name={'code'}
          control={form.code.control}
          cellCount={6}
          onFinishFillingCode={form.code.handleSubmit(onSubmit)}
          bottomHint={`Если код не придет, можно получить новый ${shouldShowTimer ? `через ${duration} сек` : 'сейчас'} `}
        />
      </UIView>
    </>
  );
};
