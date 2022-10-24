import * as React from 'react';

import { useInViewport } from '../../hooks/useIsInViewport';
import { IStatusProps, Status } from '../status';

export interface IScrollToEndListenerProps
  extends React.PropsWithoutRef<IStatusProps>,
    React.PropsWithoutRef<React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement>> {
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
export const ScrollToEndListener = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IScrollToEndListenerProps>>(
  ({ children, onScrollToEnd, rootMargin, ...statusProps }, forwardedRef) => {
    const listenerRef = React.useRef<HTMLDivElement>(null);

    useInViewport(listenerRef, { rootMargin, onEnter: onScrollToEnd });

    return (
      <div className="arm-scroll-to-end-listener" ref={forwardedRef}>
        {children}

        {(statusProps.error || statusProps.pending) && (
          <div className="arm-scroll-to-end-listener-status">
            <Status {...statusProps} />
          </div>
        )}

        <div className="arm-scroll-to-end-listener-listener" ref={listenerRef} />
      </div>
    );
  }
);

ScrollToEndListener.defaultProps = {
  rootMargin: '200px',
};
