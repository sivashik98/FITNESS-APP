import { UIButton, UIView } from 'ui/components/ui-kit';
import { Screen } from 'ui/components';
import { AccountForm } from 'ui/screens/profile/account/components';

import { ScreenHeaderTypes } from 'ui/components/screen/types';
import { ButtonTypes } from 'ui/components/ui-kit/ui-button/types';
import { useAccountAdapter } from 'bl-modules/profile/account';
import { Skeleton } from 'moti/skeleton';
import { useLogoutAdapter } from 'bl-modules/logout';

const ScreenSkeleton = () => (
  <UIView marginT={20} ai={'center'} gap={30}>
    <Skeleton height={110} width={110} colorMode={'light'} radius={110} />
    <UIView gap={12} ai={'center'}>
      <Skeleton height={150} width={'90%'} colorMode={'light'} />
      <Skeleton height={150} width={'90%'} colorMode={'light'} />
      <Skeleton height={150} width={'90%'} colorMode={'light'} />
      <Skeleton height={150} width={'90%'} colorMode={'light'} />
    </UIView>
  </UIView>
);

export const AccountScreen = ({}) => {
  const { form, variables, handlers } = useAccountAdapter();
  const { handlers: logoutHandlers } = useLogoutAdapter();

  return (
    <Screen
      scroll
      shouldShowSkeleton={variables.isLoading}
      skeleton={<ScreenSkeleton />}
      headerProps={{ title: 'Аккаунт' }}
      headerType={ScreenHeaderTypes.Default}
      bottomSpace={50}
      content={
        <AccountForm
          form={form}
          onChangeGender={handlers.onChangeGender}
          activeGender={variables.activeGender}
          logout={logoutHandlers.logout}
          onChangeEmail={handlers.onChangeEmail}
          onChangePhone={handlers.onChangePhone}
          formattedPhone={variables.formattedPhone}
          email={variables.email}
        />
      }
      footer={<UIButton type={ButtonTypes.filled} title={'Сохранить'} onPress={handlers.submitHandler} />}
    />
  );
};
