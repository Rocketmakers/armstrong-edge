import * as React from 'react';
export declare type useBoundingClientRectReturn = [DOMRect, () => void];
/**
 * Get the size of the element with the given ref - uses a resize observer, listens to scroll events, and listens to resize events
 * WARNING: positions will not update automatically unless happening at the same time as a resize, if you need to do anything fancier, you'll have to
 * use the callback which is the second item in the returned array to force a resize
 * @param ref the html element to watch
 */
export declare function useBoundingClientRect(ref: React.MutableRefObject<Element | undefined | null>): useBoundingClientRectReturn;
