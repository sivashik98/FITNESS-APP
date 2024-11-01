import { useRef, useState } from 'react';

import { TIMER_DURATION } from 'bl-modules/auth/code-confirm/adapters/constants';

export const useCodeConfirmLocalState = () => {
  const [duration, setDuration] = useState(TIMER_DURATION);
  const [durationOutsideApp, setDurationOutsideApp] = useState(0);
  const [shouldShowTimer, setShouldShowTimer] = useState(true);
  const timerId = useRef<NodeJS.Timeout>();

  return {
    duration,
    setDuration,
    durationOutsideApp,
    setDurationOutsideApp,
    shouldShowTimer,
    timerId,
    setShouldShowTimer,
  };
};
