import { useCallback, useEffect } from 'react';
import { AppState, AppStateStatic } from 'react-native';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

import { useCodeConfirmHandlers } from 'bl-modules/auth/code-confirm/adapters/handlers';
import { useCodeConfirmLocalState } from 'bl-modules/auth/code-confirm/adapters/local-state';

export const useCodeConfirmEffects = (
  handlers: ReturnType<typeof useCodeConfirmHandlers>,
  localState: ReturnType<typeof useCodeConfirmLocalState>
) => {
  const isFocused = useIsFocused();

  // при нажатии "Получить новый код" вызывается enableTimer и отрабатывает этот эффект
  useEffect(() => {
    if (localState.shouldShowTimer && localState.duration < 1) {
      localState.resetDuration();
      localState.timerId.current = setInterval(() => localState.setDuration((prevState) => prevState - 1), 1000);
    }
  }, [localState.shouldShowTimer]);

  // при тике duration каждую секунду отрабатывает этот эффект и проверяет когда нужно остановить таймер (<1)
  useEffect(() => {
    if (localState.duration < 1) {
      clearInterval(localState.timerId.current);
      localState.disableTimer();
    }
  }, [localState.duration, localState.timerId.current, localState.disableTimer]);

  // эффект для работы таймера на бэкграунде андройд и эффект для запуска
  // так же эффект для запуска таймера при фокусе экрана и очистке листнеров
  useFocusEffect(
    useCallback(() => {
      let listener: ReturnType<AppStateStatic['addEventListener']> | undefined;
      if (isFocused && !localState.timerId.current)
        localState.timerId.current = setInterval(() => localState.setDuration((prevState) => prevState - 1), 1000);
      if (isFocused) listener = AppState.addEventListener('change', handlers.backgroundTimerHandler);
      return () => {
        if (typeof listener !== 'undefined') listener.remove();

        // TODO - таймер из-за этого не работает
        // clearInterval(localState.timerId.current);
      };
    }, [isFocused, handlers.backgroundTimerHandler])
  );
};
