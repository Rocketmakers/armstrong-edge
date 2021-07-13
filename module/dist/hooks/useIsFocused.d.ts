import * as React from 'react';
export declare type UseIsFocusedReturn = [boolean, Pick<React.HTMLAttributes<HTMLElement>, 'onFocus' | 'onBlur'>];
/**
 * Get, in React state, whether an element is being focused.
 * Can be used by spreading the props returned from the second element in the returned array onto the element you want to listen to,
 * or by passing in a ref
 */
export declare const useIsFocused: (ref?: React.MutableRefObject<Element | null | undefined> | undefined) => UseIsFocusedReturn;
