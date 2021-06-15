import * as React from 'react';

import { Globals } from '../utils/globals';
import { useIntersectionObserver } from './useIntersectionObserver';

/**
 * Fires a given callback when an element reaches a distance from the end defined by distanceFromEdge.
 *
 * Can be used in two ways: either by passing a ref into the ref argument, which adds an intersectionObserver to that ref that runs the callback when a threshold has been hit, or by using the returned onScroll callback and adding that to the element you want to listen to
 *
 * @param onScrollToEnd the callback to fire when the user has scrolled to the end of the element
 * @param distanceFromEdge the distance from the edge in px to fire the callback on
 * @param ref a reference to the element to detect
 */
export function useOnScrollToEnd(onScrollToEnd?: () => void, distanceFromEdge = 100, ref?: React.MutableRefObject<Element | null | undefined>) {
  const [scrolledToEnd, setScrolledToEnd] = React.useState(false);

  const onEndIntersecting = React.useCallback(() => {
    setScrolledToEnd(true);
    onScrollToEnd?.();
  }, [onScrollToEnd]);

  const reset = React.useCallback(() => setScrolledToEnd(false), []);

  const onIntersectionObserverCallback = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries.find((en) => en.isIntersecting);
      console.log(entry?.boundingClientRect.bottom);
      if (entry && Globals.Window && entry.boundingClientRect.bottom < Globals.Window.innerHeight - distanceFromEdge) {
        onEndIntersecting();
      } else {
        reset();
      }
    },
    [onEndIntersecting, reset]
  );

  useIntersectionObserver(onIntersectionObserverCallback, {}, ref);

  const onScroll = React.useCallback((event: React.UIEvent) => {
    if (event.currentTarget.scrollTop - event.currentTarget.clientHeight > event.currentTarget.scrollHeight - distanceFromEdge) {
      if (!scrolledToEnd) {
        onEndIntersecting();
      }
    } else {
      setScrolledToEnd(false);
    }
  }, []);

  return { scrolledToEnd, onScroll };
}
