import { useMemo } from 'react';
import { useHybridAuthForm } from 'bl-modules/auth/hybrid-auth/adapters/form';
import { useHybridAuthLocalState } from 'bl-modules/auth/hybrid-auth/adapters/local-state';

export const useHybridAuthVariables = (form: ReturnType<typeof useHybridAuthForm>, localState: ReturnType<typeof useHybridAuthLocalState>) => {
  const isDisabledSubmit = useMemo(() => !form[localState.tab].formState.isDirty || !form[localState.tab].formState.isValid, [form, localState.tab]);

  return { isDisabledSubmit };
};
