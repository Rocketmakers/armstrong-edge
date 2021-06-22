import * as React from 'react';

import { useIntersectionObserver } from '../../hooks';

export interface IInfiniteLoaderProps {
  onScrollToBottom: () => void;

  rootMargin: string;
}

export const InfiniteLoader: React.FC<IInfiniteLoaderProps> = ({ children, onScrollToBottom, rootMargin }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useIntersectionObserver(onScrollToBottom, { rootMargin }, ref);

  return (
    <>
      {children}
      <div className="arm-infinite-loader-scroll-listener" ref={ref} />
    </>
  );
};
