import * as React from 'react';

import { useInViewport } from '../../hooks/useIsInViewport';
import { IStatusProps, Status } from '../status';

export interface IScrollToEndListenerProps extends IStatusProps {
  onScrollToEnd: () => void;

  rootMargin?: string;
}

export const ScrollToEndListener: React.FC<IScrollToEndListenerProps> = ({ children, onScrollToEnd, rootMargin, ...statusProps }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useInViewport(ref, { rootMargin, onEnter: onScrollToEnd });

  return (
    <>
      {children}

      {(statusProps.error || statusProps.pending) && (
        <div className="arm-scroll-to-end-listener-status">
          <Status {...statusProps} />
        </div>
      )}

      <div className="arm-scroll-to-end-listener-listener" ref={ref} />
    </>
  );
};

ScrollToEndListener.defaultProps = {
  rootMargin: '200px',
};
