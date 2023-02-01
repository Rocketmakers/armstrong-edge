import * as React from 'react';

export interface IUseTimeoutReturn<T = void> {
  /** Set the timeout, optionally give a callback which will override the one set at hook level */
  set: (callback?: () => T, time?: number) => Promise<T>;

  /** Clear the timeout before its time has finished */
  clear: () => void;

  /** Has the timeout been triggered, but not elapsed */
  waiting: boolean;
}

/**
 * set up a timeout which is cleared automatically when the component unmounts
 * @param time the time to pass before the callback is fired
 * @param callback the callback to run after the given time
 */
export function useTimeout<T = void>(callback?: () => T, time?: number): IUseTimeoutReturn<T> {
  const timeout = React.useRef<any>();

  const [waiting, setWaiting] = React.useState(false);

  const resolvePromise = React.useRef<(value: T | PromiseLike<T>) => void>();

  const clear = React.useCallback(() => {
    clearTimeout(timeout.current);
    resolvePromise.current?.(undefined as any as T);
    resolvePromise.current = undefined;
  }, []);

  const set = React.useCallback(
    (overrideCallback?: () => T, overrideTime?: number) => {
      clear();

      return new Promise<T>((resolve) => {
        setWaiting(true);
        resolvePromise.current = resolve;

        timeout.current = setTimeout(() => {
          setWaiting(false);
          const value = (overrideCallback ?? callback)?.();
          resolve(value as T);
        }, overrideTime ?? time);
      });
    },
    [time, callback]
  );

  React.useEffect(() => clear , []);

  return { set, clear, waiting };
}
