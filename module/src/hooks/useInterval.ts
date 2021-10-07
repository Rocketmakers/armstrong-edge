import * as React from 'react';

import { useDidUpdateEffect } from './useDidUpdateEffect';

export interface IUseIntervalReturn {
  /** Set the interval, optionally give a callback which will override the one set at hook level */
  set: (callback?: () => void) => void;

  /** Clear the interval before its time has finished */
  clear: () => void;
}

export interface IUseIntervalConfig {
  /** Should the interval begin firing from when the component mounts */
  setOnMount?: boolean;
}

/**
 * set up a interval which is cleared automatically when the component unmounts
 * @param time the time in ms between each time the callback is fired
 * @param callback the callback to run after the given time
 */
export function useInterval(callback: () => void, time?: number, config?: IUseIntervalConfig): IUseIntervalReturn {
  const interval = React.useRef<any>();

  const clear = React.useCallback(() => {
    clearInterval(interval.current);
  }, []);

  const set = React.useCallback(() => {
    clear();
    interval.current = setInterval(callback, time);
  }, [time, callback]);

  useDidUpdateEffect(() => {
    if (interval.current) {
      set();
    }
  }, [callback]);

  React.useEffect(() => {
    if (config?.setOnMount) {
      set();
    }

    return () => {
      clear();
    };
  }, []);

  return { set, clear };
}
