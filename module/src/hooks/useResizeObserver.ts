import * as React from 'react';

import { Globals } from '../utils/globals';

/**
 * Use an resize observer to fire the passed callback upon Resize - also cleans up on unmount
 * @param ref the html element to watch
 * @param callback the callback to be fired
 * @param options an Resize observer options object
 */

export function useResizeObserver(ref: React.MutableRefObject<HTMLElement>, callback: (entries: ResizeObserverEntry[], io: ResizeObserver) => any) {
  const observer = React.useRef<ResizeObserver>();

  React.useLayoutEffect(() => {
    if (!!ref && !!ref.current && Globals.isBrowser && Globals.supportsResizeObserver) {
      observer.current = new ResizeObserver((entries, createdObserver) => callback && callback(entries, createdObserver));
      observer.current.observe(ref.current);

      return () => observer.current?.unobserve(ref.current);
    }
  }, [ref, observer, callback]);
}
