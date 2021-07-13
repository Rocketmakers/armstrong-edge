import * as React from 'react';
export interface IUseInViewportOptions {
    /** a string representation of the distance from the edge of the screen to trigger on, I.E. "-10px" (from IntersectionObserverInit) */
    rootMargin?: string;
    /** the percentage of the referenced element that needs to be intersecting in order to trigger the intersecting callback - pass an array of numbers to trigger it multiple times */
    threshold?: number | number[];
    /** if true, will return true once the referenced element has intersected and never change back */
    once?: boolean;
    /** a callback which is fired when the element intersects with the viewport */
    onEnter?: (entries: IntersectionObserverEntry[]) => void;
    /** a callback which is fired when the stops intersecting with the viewport */
    onExit?: (entries: IntersectionObserverEntry[]) => void;
}
/** Take a ref and return a piece of React state reflecting whether the referenced element is currently in the viewport or not  */
export declare function useInViewport(ref: React.MutableRefObject<HTMLElement | undefined | null>, options?: IUseInViewportOptions): boolean;
