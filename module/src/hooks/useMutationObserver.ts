import * as React from 'react';

import { Globals } from '../utils/globals';

/**
 * Use an mutation observer to fire the passed callback - also cleans up on unmount. Can either be used by just passing in a ref, or by using the functions returned to observe and disconnect
 * @param ref the html element to watch
 * @param callback the callback to be fired
 * @param options options for the mutation observer
 */

export function useMutationObserver(
  callback: MutationCallback,
  options?: MutationObserverInit,
  ref?: React.MutableRefObject<Element | undefined | null>
) {
  const observer = React.useRef<MutationObserver>();

  const observe = React.useCallback(
    (element: Element) => {
      observer.current = new MutationObserver(callback);
      observer.current.observe(element, options);
    },
    [callback, options]
  );

  const disconnect = React.useCallback(() => {
    observer.current?.disconnect();
  }, []);

  React.useLayoutEffect(() => {
    if (!!ref && !!ref.current && Globals.isBrowser && Globals.supportsMutationObserver) {
      observe(ref.current);

      return () => {
        if (ref.current) {
          disconnect();
        }
      };
    }
  }, [ref?.current, observer, callback, options]);

  React.useEffect(
    () => () => {
      disconnect();
    },
    []
  );

  return {
    observer,
    disconnect,
  };
}
