import * as React from 'react';

import { Globals } from '../utils/globals';
import { useIntersectionObserver } from './useIntersectionObserver';
import { useResizeObserver } from './useResizeObserver';

export function useOnScrollToEnd(ref: React.MutableRefObject<HTMLElement | null | undefined>) {
  const [scrolledToBottom, setScrolledToBottom] = React.useState(false);

  const onScrollToBottom = React.useCallback(() => setScrolledToBottom(true), []);
  const reset = React.useCallback(() => setScrolledToBottom(false), []);

  useIntersectionObserver(ref);
  useResizeObserver(ref, {}, reset);
}
