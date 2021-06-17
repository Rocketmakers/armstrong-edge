import * as React from 'react';

import { useTimeout } from './useTimeout';

/** Returns true once a given amount of time has elapsed since the returned callback has been run */
export function useHasTimeElapsed(time: number, onTimeElapse?: () => void): [boolean, () => void] {
  const [hasTimeElapsed, setHasTimeElapsed] = React.useState(false);
  const onTimeout = React.useCallback(() => {
    setHasTimeElapsed(true);
    onTimeElapse?.();
  }, []);
  const { set } = useTimeout(time, onTimeout);
  const begin = React.useCallback(() => set(), []);

  return [hasTimeElapsed, begin];
}

/** Returns true once a given amount of time has elapsed since the component mounted */
export function useHasTimeElapsedSinceMount(time: number, onTimeElapse?: () => void) {
  const [hasTimeElapsed, begin] = useHasTimeElapsed(time, onTimeElapse);
  React.useEffect(() => begin(), []);

  return hasTimeElapsed;
}
