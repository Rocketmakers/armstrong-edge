import * as React from 'react';

import { Objects } from '../utils';
import { Globals } from '../utils/globals';

/**
 * Use an resize observer to fire the passed callback - also cleans up on unmount. Can either be used by just passing in a ref, or by using the functions returned to observe and disconnect
 * @param ref the html element to watch
 * @param callback the callback to be fired
 * @param options options for the mutation observer
 *
 */

export function useResizeObserver(
  callback: ResizeObserverCallback,
  options?: ResizeObserverOptions,
  ref?: React.MutableRefObject<Element | undefined | null>
) {
  const observer = React.useRef<ResizeObserver>();

  const observe = React.useCallback(
    (element: Element) => {
      observer.current = new ResizeObserver(callback);
      observer.current.observe(element, options);
    },
    [callback, Objects.contentDependency(options)]
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
    if (!!ref?.current && Globals.isBrowser && Globals.supportsResizeObserver) {
      observe(ref.current);

      return () => {
        if (ref.current) {
          unobserve(ref.current!);
        }
      };
    }
  }, [observe, unobserve]);

  React.useEffect(() => disconnect, []);

  return {
    observer,
    unobserve,
    disconnect,
  };
}
