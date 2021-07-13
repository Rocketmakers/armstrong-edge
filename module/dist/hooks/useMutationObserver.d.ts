import * as React from 'react';
/**
 * Use an mutation observer to fire the passed callback - also cleans up on unmount. Can either be used by just passing in a ref, or by using the functions returned to observe and disconnect
 * @param ref the html element to watch
 * @param callback the callback to be fired
 * @param options options for the mutation observer
 */
export declare function useMutationObserver(callback: MutationCallback, options?: MutationObserverInit, ref?: React.MutableRefObject<Element | undefined | null>): {
    observer: React.MutableRefObject<MutationObserver | undefined>;
    disconnect: () => void;
};
