import { useCallback, useRef, useState } from 'react';

import { TIMER_DURATION } from 'bl-modules/auth/code-confirm/adapters/constants';

export const useCodeConfirmLocalState = () => {
  const [duration, setDuration] = useState(TIMER_DURATION);
  const [durationOutsideApp, setDurationOutsideApp] = useState(0);
  const [shouldShowTimer, setShouldShowTimer] = useState(true);
  const timerId = useRef<NodeJS.Timeout>();

  const enableTimer = useCallback(() => setShouldShowTimer(true), [setShouldShowTimer]);
  const disableTimer = useCallback(() => setShouldShowTimer(false), [setShouldShowTimer]);
  const resetDuration = useCallback(() => setDuration(TIMER_DURATION), [setDuration]);
  const resetDurationOutsideApp = useCallback(() => setDurationOutsideApp(0), [setDurationOutsideApp]);

  return {
    duration,
    setDuration,
    resetDuration,
    durationOutsideApp,
    setDurationOutsideApp,
    shouldShowTimer,
    enableTimer,
    disableTimer,
    timerId,
    resetDurationOutsideApp,
  };
};
