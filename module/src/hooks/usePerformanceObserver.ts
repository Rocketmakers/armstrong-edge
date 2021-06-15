import * as React from 'react';

import { Globals } from '../utils/globals';

/**
 * Use an performance observer to fire the passed callback - also cleans up on unmount.
 * @param ref the html element to watch
 * @param callback the callback to be fired
 * @param options options for the performance observer
 */

export function usePerformanceObserver(callback: PerformanceObserverCallback, options?: PerformanceObserverInit) {
  const observer = React.useRef<PerformanceObserver>();

  const observe = React.useCallback(() => {
    observer.current = new PerformanceObserver(callback);
    observer.current.observe(options);
  }, [callback]);

  const disconnect = React.useCallback(() => {
    observer.current?.disconnect();
  }, []);

  React.useLayoutEffect(() => {
    if (Globals.isBrowser && Globals.supportsPerformanceObserver) {
      observe();

      return () => {
        disconnect();
      };
    }
  }, [observer, callback]);

  React.useEffect(
    () => () => {
      disconnect();
    },
    []
  );
}
