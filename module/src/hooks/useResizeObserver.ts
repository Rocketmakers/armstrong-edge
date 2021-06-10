import * as React from 'react';

import { Globals } from '../utils/globals';

/**
 * Use an resize observer to fire the passed callback upon Resize - also cleans up on unmount
 * @param ref the html element to watch
 * @param callback the callback to be fired
 * @param options an Resize observer options object
 */

export function useResizeObserver(
  callback: (entries: ResizeObserverEntry[], io: ResizeObserver) => any,
  ref?: React.MutableRefObject<Element | undefined | null>
) {
  const observer = React.useRef<ResizeObserver>();

  const observe = React.useCallback(
    (element: Element) => {
      observer.current = new ResizeObserver((entries, createdObserver) => callback && callback(entries, createdObserver));
      observer.current.observe(element);
    },
    [callback]
  );

  const unobserve = React.useCallback((element: Element) => {
    if (observer.current) {
      observer.current.unobserve(element);
    }
  }, []);

  const disconnect = React.useCallback(() => {
    observer.current?.disconnect();
  }, []);

  React.useLayoutEffect(() => {
    if (!!ref && !!ref.current && Globals.isBrowser && Globals.supportsResizeObserver) {
      observe(ref.current);

      return () => {
        if (ref.current) {
          unobserve(ref.current!);
        }
      };
    }
  }, [ref?.current, observer, callback]);

  React.useEffect(
    () => () => {
      disconnect();
    },
    []
  );

  return {
    observer,
    unobserve,
    disconnect,
  };
}
