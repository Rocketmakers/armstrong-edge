import * as React from 'react';
/**
 * Use an intersection observer to fire the passed callback - also cleans up on unmount. Can either be used by just passing in a ref, or by using the functions returned to observe and disconnect
 * @param ref the html element to watch
 * @param callback the callback to be fired
 * @param options options for the intersection observer
 */
export declare function useIntersectionObserver(callback: IntersectionObserverCallback, options?: IntersectionObserverInit, ref?: React.MutableRefObject<Element | undefined | null>): {
    observer: React.MutableRefObject<IntersectionObserver | undefined>;
    unobserve: (element: Element) => void;
    disconnect: () => void;
};
