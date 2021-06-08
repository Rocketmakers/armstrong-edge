import * as React from 'react';

import { Globals } from '../utils/globals';

export interface IUseTimeoutReturn {
  /** Set the timeout, optionally give a callback which will override the one set at hook level */
  set: (callback?: () => void) => void;

  /** Clear the timeout before its time has finished */
  clear: (callback?: () => void) => void;
}

/**
 * set up a timeout which is cleared automatically when the component unmounts
 * @param time the time to pass before the callback is fired
 * @param callback the callback to run after the given time
 */
export function useTimeout(time?: number, callback?: () => void): IUseTimeoutReturn {
  const timeout = React.useRef<number>();

  const set = React.useCallback(
    (overrideCallback?: () => void) => {
      if (overrideCallback || callback) {
        timeout.current = Globals.Window?.setTimeout(overrideCallback ?? callback!, time);
      }
    },
    [time, callback]
  );

  const clear = React.useCallback(() => {
    Globals?.Window?.clearTimeout(timeout.current);
  }, []);

  React.useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  return { set, clear };
}
