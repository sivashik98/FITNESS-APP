import { useCodeConfirmLocalState } from 'bl-modules/auth/code-confirm/adapters/local-state';
import { useCodeConfirmNavigation } from 'bl-modules/auth/code-confirm/adapters/navigation';

export const useCodeConfirmVariables = (
  localState: ReturnType<typeof useCodeConfirmLocalState>,
  navigation: ReturnType<typeof useCodeConfirmNavigation>,
) => {
  const shouldShowTimer = localState.shouldShowTimer;
  const duration = localState.duration;
  const authMethodTitle = `Код отправили на ${navigation.method === 'phone' ? 'номер' : 'почту'}:`;
  const authDataTitle = `${navigation.method === 'phone' ? `+7 ${navigation.data}` : navigation.data}`;

  return { shouldShowTimer, duration, authMethodTitle, authDataTitle };
};
