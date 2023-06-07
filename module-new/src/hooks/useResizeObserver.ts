import * as React from 'react';

import { isBrowser, supportsResizeObserver } from '../utils/globals';
import { useContentMemo } from './useContentMemo';

/**
 * Use an resize observer to fire the passed callback - also cleans up on unmount. Can either be used by just passing in a ref, or by using the functions returned to observe and disconnect
 * @param callback the callback to be fired
 * @param optionsInput options for the mutation observer
 * @param ref the html element to watch
 *
 */
export function useResizeObserver(
  callback: ResizeObserverCallback,
  optionsInput?: ResizeObserverOptions,
  ref?: React.MutableRefObject<Element | undefined | null>
) {
  const observer = React.useRef<ResizeObserver>();
  const options = useContentMemo(optionsInput);

  const observe = React.useCallback(
    (element: Element) => {
      observer.current = new ResizeObserver(callback);
      observer.current.observe(element, options);
    },
    [callback, options]
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
    if (!!ref?.current && isBrowser && supportsResizeObserver) {
      observe(ref.current);

      return () => {
        if (ref.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps -- This is safe
          unobserve(ref.current);
        }
      };
    }
    return undefined;
  }, [observe, unobserve, ref]);

  React.useEffect(() => disconnect, [disconnect]);

  return {
    observer,
    unobserve,
    disconnect,
  };
}
