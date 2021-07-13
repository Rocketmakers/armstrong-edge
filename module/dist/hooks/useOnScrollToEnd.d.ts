import * as React from 'react';
/**
 * Fires a given callback when an element reaches a distance from the end defined by distanceFromEdge.
 *
 * Can be used by using the returned onScroll callback and adding that to the element you want to listen to.
 *
 * Alternatively, there's a ScrollToEndListener component which will work more reliably as it doesn't rely on a scroll event being added to an element, and instead uses an intersection observer
 *
 * @param onScrollToEnd the callback to fire when the user has scrolled to the end of the element
 * @param distanceFromEdge the distance from the edge in px to fire the callback on
 */
export declare function useOnScrollToEnd(onScrollToEnd?: () => void, distanceFromEdge?: number): {
    scrolledToEnd: boolean;
    onScroll: (event: React.UIEvent) => void;
};
