import * as React from "react";

/**
 * Fires a given callback when an element reaches a distance from the end defined by distanceFromEdge.
 *
 * Can be used by using the returned onScroll callback and adding that to the element you want to listen to.
 * *
 * @param onScrollToEnd the callback to fire when the user has scrolled to the end of the element
 * @param distanceFromEdge the distance from the edge in px to fire the callback on
 */
export function useOnScrollToEnd(
  onScrollToEnd?: () => void,
  distanceFromEdge = 100
) {
  const [scrolledToEnd, setScrolledToEnd] = React.useState(false);

  const onEndIntersecting = React.useCallback(() => {
    setScrolledToEnd(true);
    onScrollToEnd?.();
  }, [onScrollToEnd]);

  const reset = React.useCallback(() => setScrolledToEnd(false), []);

  const onScroll = React.useCallback((event: React.UIEvent) => {
    if (
      event.currentTarget.scrollTop - event.currentTarget.clientHeight >
      event.currentTarget.scrollHeight - distanceFromEdge
    ) {
      if (!scrolledToEnd) {
        onEndIntersecting();
      }
    } else {
      reset();
    }
  }, []);

  return { scrolledToEnd, onScroll };
}
