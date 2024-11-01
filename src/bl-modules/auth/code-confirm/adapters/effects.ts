import { useCallback, useEffect } from 'react';
import { AppState, AppStateStatic, AppStateStatus } from 'react-native';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

import { useCodeConfirmLocalState } from 'bl-modules/auth/code-confirm/adapters/local-state';
import { DateService } from 'tools/services';
import { TIMER_DURATION } from 'bl-modules/auth/code-confirm/adapters/constants';

const backgroundTimerHandler = (state: AppStateStatus, localState: ReturnType<typeof useCodeConfirmLocalState>) => {
  if (state === 'background') {
    const timestamp = new Date().getTime();
    localState.setDurationOutsideApp(timestamp);
    clearInterval(localState.timerId.current);
  }
  if (state === 'active') {
    const timestamp = new Date().getTime();
    const difference = DateService.getDifferenceInSeconds(timestamp, localState.durationOutsideApp);
    if (localState.duration - difference < 1) {
      clearInterval(localState.timerId.current);
      localState.setShouldShowTimer(false);
      localState.setDuration(0);
    } else {
      localState.setDuration(localState.duration - difference);
      localState.timerId.current = setInterval(() => localState.setDuration((prevState) => prevState - 1), 1000);
    }
    localState.setDurationOutsideApp(0);
  }
};

export const useCodeConfirmEffects = (localState: ReturnType<typeof useCodeConfirmLocalState>) => {
  const isFocused = useIsFocused();

  // при нажатии "Получить новый код" вызывается enableTimer и отрабатывает этот эффект
  useEffect(() => {
    if (localState.shouldShowTimer && localState.duration < 1) {
      localState.setDuration(TIMER_DURATION);
      localState.timerId.current = setInterval(() => localState.setDuration((prevState) => prevState - 1), 1000);
    }
  }, [localState.shouldShowTimer]);

  // при тике duration каждую секунду отрабатывает этот эффект и проверяет когда нужно остановить таймер (<1)
  useEffect(() => {
    if (localState.duration < 1) {
      clearInterval(localState.timerId.current);
      localState.setShouldShowTimer(false);
    }
  }, [localState.duration, localState.timerId.current, localState.setShouldShowTimer]);

  // эффект для работы таймера на бэкграунде андройд и эффект для запуска
  // так же эффект для запуска таймера при фокусе экрана и очистке листнеров
  useFocusEffect(
    useCallback(() => {
      let listener: ReturnType<AppStateStatic['addEventListener']> | undefined;
      if (isFocused && !localState.timerId.current)
        localState.timerId.current = setInterval(() => localState.setDuration((prevState) => prevState - 1), 1000);
      if (isFocused) listener = AppState.addEventListener('change', (state: AppStateStatus) => backgroundTimerHandler(state, localState));
      return () => {
        if (typeof listener !== 'undefined') listener.remove();
        // TODO - таймер из-за этого не работает
        // clearInterval(localState.timerId.current);
      };
    }, [isFocused])
  );
};
