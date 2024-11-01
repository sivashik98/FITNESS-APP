import { UIButton } from 'ui/components/ui-kit';
import { Screen } from 'ui/components';
import { AccountForm } from 'ui/screens/profile/account/components';

import { ScreenHeaderTypes } from 'ui/components/screen/types';
import { ButtonTypes } from 'ui/components/ui-kit/ui-button/types';
import { useAccountAdapter } from 'bl-modules/profile/account';

export const AccountScreen = ({}) => {
  const { form, variables, handlers } = useAccountAdapter();

  return (
    <Screen
      scroll
      headerProps={{ title: 'Аккаунт' }}
      headerType={ScreenHeaderTypes.Default}
      bottomSpace={50}
      content={<AccountForm form={form} onChangeGender={handlers.onChangeGender} activeGender={variables.activeGender} />}
      footer={<UIButton type={ButtonTypes.filled} title={'Сохранить'} onPress={handlers.submitHandler} />}
    />
  );
};
