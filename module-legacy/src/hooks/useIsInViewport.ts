import * as React from 'react';

import { useIntersectionObserver } from './useIntersectionObserver';

export interface IUseInViewportOptions {
  /** a string representation of the distance from the edge of the screen to trigger on, I.E. "-10px" (from IntersectionObserverInit) */
  rootMargin?: string;

  /** the percentage of the referenced element that needs to be intersecting in order to trigger the intersecting callback - pass an array of numbers to trigger it multiple times */
  threshold?: number | number[];

  /** if true, will return true once the referenced element has intersected and never change back */
  once?: boolean;

  /** a callback which is fired when the element intersects with the viewport */
  onEnter?: (entries: IntersectionObserverEntry[]) => void;

  /** a callback which is fired when the stops intersecting with the viewport */
  onExit?: (entries: IntersectionObserverEntry[]) => void;
}

/** Take a ref and return a piece of React state reflecting whether the referenced element is currently in the viewport or not  */
export function useInViewport(ref: React.MutableRefObject<HTMLElement | undefined | null>, options: IUseInViewportOptions = {}) {
  const [isInViewport, setIsInViewport] = React.useState(false);

  const onIntersect = React.useCallback<IntersectionObserverCallback>(
    (entries, observer) => {
      const isIntersecting = !!entries.find((entry) => entry.isIntersecting);

      if (isIntersecting && !isInViewport) {
        options.onEnter?.(entries);
        setIsInViewport(true);
        if (options.once) {
          observer.disconnect();
        }
      } else if (!isIntersecting && isInViewport) {
        options.onExit?.(entries);
        setIsInViewport(false);
      }
    },
    [options.onEnter, options.onExit, options.once, isInViewport]
  );

  const intersectionObserverOptions = React.useMemo<IntersectionObserverInit>(
    () => ({ rootMargin: options.rootMargin, threshold: options.threshold }),
    [options.rootMargin, options.threshold]
  );

  useIntersectionObserver(onIntersect, intersectionObserverOptions, ref);

  return isInViewport;
}
