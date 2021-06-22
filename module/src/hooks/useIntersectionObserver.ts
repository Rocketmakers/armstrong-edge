import * as React from 'react';

import { Globals } from '../utils/globals';

/**
 * Use an intersection observer to fire the passed callback - also cleans up on unmount. Can either be used by just passing in a ref, or by using the functions returned to observe and disconnect
 * @param ref the html element to watch
 * @param callback the callback to be fired
 * @param options options for the intersection observer
 */

export function useIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
  ref?: React.MutableRefObject<Element | undefined | null>
) {
  const observer = React.useRef<IntersectionObserver>();

  const observe = React.useCallback(
    (element: Element) => {
      observer.current = new IntersectionObserver(callback, options);
      observer.current.observe(element);
    },
    [callback, options]
  );

  const unobserve = React.useCallback((element: Element) => {
    observer.current?.unobserve(element);
  }, []);

  const disconnect = React.useCallback(() => {
    observer.current?.disconnect();
  }, []);

  React.useLayoutEffect(() => {
    if (!!ref && !!ref.current && Globals.isBrowser && Globals.supportsIntersectionObserver) {
      observe(ref.current);

      return () => {
        if (ref.current) {
          unobserve(ref.current);
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
