import { useMemo } from 'react';
import { useHybridAuthForm } from 'bl-modules/auth/hybrid-auth/adapters/form';
import { useHybridAuthLocalState } from 'bl-modules/auth/hybrid-auth/adapters/local-state';
import { useHybridAuthRtkq } from 'bl-modules/auth/hybrid-auth/adapters/rtkq';

export const useHybridAuthVariables = (
  localState: ReturnType<typeof useHybridAuthLocalState>,
  rtkq: ReturnType<typeof useHybridAuthRtkq>,
  form: ReturnType<typeof useHybridAuthForm>
) => {
  const isDisabledSubmit = useMemo(
    () => !form[localState.tab.type].formState.isDirty || !form[localState.tab.type].formState.isValid,
    [form, localState.tab]
  );
  const isLoading = useMemo(() => rtkq.isLoadingEmail || rtkq.isLoadingPhone, [rtkq.isLoadingEmail, rtkq.isLoadingPhone]);
  const currentTab = localState.tab;

  return { isDisabledSubmit, isLoading, currentTab };
};
