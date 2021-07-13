import React from 'react';
export interface IUseElementStatusReturn {
    loading: boolean;
    error: boolean;
    loaded: boolean;
    /** props that must be spread onto the element you want to listen to (must be the same element as the ref that's being passed in) */
    props: Pick<React.HTMLAttributes<Element>, 'onLoad' | 'onError'>;
}
/**
 * Listen to the onLoad and onError events on an element
 * can only be used on certain HTML tags
 * @returns some booleans representing the element's state, and some props that need to be spread on
 */
export declare const useElementStatus: (ref?: React.MutableRefObject<HTMLImageElement | null | undefined> | undefined) => IUseElementStatusReturn;
