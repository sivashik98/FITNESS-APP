import { UIButton } from 'ui/components/ui-kit';
import { Screen } from 'ui/components';
import { AuthForm } from 'ui/screens/auth/hybrid-auth/components';

import { ButtonTypes } from 'ui/components/ui-kit/ui-button/types';
import { useHybridAuthAdapter } from 'bl-modules/auth/hybrid-auth/adapters/adapter';
import { ScreenHeaderTypes } from 'ui/components/screen/types';

export const HybridAuthScreen = () => {
  const { handlers, form, variables } = useHybridAuthAdapter();

  return (
    <Screen
      headerProps={{ canGoBack: variables.canGoBack }}
      headerType={variables.canGoBack ? ScreenHeaderTypes.Default : undefined}
      scroll
      content={
        <AuthForm
          toggleTab={handlers.toggleTab}
          currentTab={variables.currentTab}
          form={form}
          shouldHideSegmentControl={variables.shouldHideSegmentControl}
          title={variables.title}
        />
      }
      footer={
        <UIButton
          disabled={variables.isDisabledSubmit}
          type={ButtonTypes.filled}
          loading={variables.isLoading}
          title={'Продолжить'}
          onPress={handlers.submitHandler}
        />
      }
    />
  );
};
