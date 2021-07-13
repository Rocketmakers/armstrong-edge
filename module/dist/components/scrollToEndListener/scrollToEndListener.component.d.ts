import * as React from 'react';
import { IStatusProps } from '../status';
export interface IScrollToEndListenerProps extends IStatusProps {
    /** the callback to fire when the element rendered by this component at the end of a scrolling list comes into the viewport */
    onScrollToEnd: () => void;
    /** the distance from the edge of the screen the listener must be to run the callback */
    rootMargin?: string;
}
/**
 * Fire a callback when the bottom of its wrapper comes into view by rendering a div at the end with an intersection observer
 *
 * Can either wrap up some children, rendering the listener itself after those children, or can just be put at the bottom of a list
 *
 * As this doesn't render a wrapping div, it's up to the styling of whatever you're rendering this component inside to ensure the .arm-scroll-to-end-listener-listener div is rendered at the bottom of the container
 */
export declare const ScrollToEndListener: React.FC<IScrollToEndListenerProps>;
