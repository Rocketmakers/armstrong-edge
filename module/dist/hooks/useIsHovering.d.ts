import * as React from 'react';
export declare type UseIsHoveringReturn = [boolean, Pick<React.HTMLAttributes<HTMLElement>, 'onMouseEnter' | 'onMouseLeave'>];
/**
 * Get, in React state, whether an element is being hovered.
 * Can be used by spreading the props returned from the second element in the returned array onto the element you want to listen to,
 * or by passing in a ref
 */
export declare function useIsHovering(ref?: React.MutableRefObject<Element | undefined | null>): UseIsHoveringReturn;
