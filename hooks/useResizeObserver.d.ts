import * as React from 'react';
/**
 * Use an resize observer to fire the passed callback - also cleans up on unmount. Can either be used by just passing in a ref, or by using the functions returned to observe and disconnect
 * @param callback the callback to be fired
 * @param optionsInput options for the mutation observer
 * @param ref the html element to watch
 *
 */
export declare function useResizeObserver(callback: ResizeObserverCallback, optionsInput?: ResizeObserverOptions, ref?: React.MutableRefObject<Element | undefined | null>): {
    observer: React.MutableRefObject<ResizeObserver | undefined>;
    unobserve: (element: Element) => void;
    disconnect: () => void;
};
