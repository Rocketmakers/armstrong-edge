import * as React from 'react';

import { Globals } from '../utils/globals';

/**
 * Use an intersection observer to fire the passed callback upon intersection - also cleans up on unmount
 * @param ref the html element to watch
 * @param callback the callback to be fired
 * @param options an intersection observer options object
 */

export function useIntersectionObserver(
  ref: React.MutableRefObject<HTMLElement>,
  callback: (isIntersecting: boolean, entries: IntersectionObserverEntry[], io: IntersectionObserver) => any,
  options?: IntersectionObserverInit
) {
  const observer = React.useRef<IntersectionObserver>();

  React.useLayoutEffect(() => {
    if (!!ref && !!ref.current && Globals.isBrowser && Globals.supportsIntersectionObserver) {
      observer.current = new IntersectionObserver(
        (entries, createdObserver) => callback && callback(entries[0].isIntersecting, entries, createdObserver),
        options
      );
      observer.current.observe(ref.current);

      return () => observer.current?.unobserve(ref.current);
    }
  }, [ref, observer, callback]);
}
