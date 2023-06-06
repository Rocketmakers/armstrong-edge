import * as React from 'react';

import { contentDependency } from '../utils';
import { Document } from '../utils/globals';
import { useDidUpdateEffect } from './useDidUpdateEffect';
import { useEventListener } from './useEventListener';
import { useResizeObserver } from './useResizeObserver';

export type UseBoundingClientRectReturn = [DOMRect, () => void];

/**
 * Get the size of the element with the given ref - uses a resize observer, listens to scroll events, and listens to resize events
 * WARNING: positions will not update automatically unless happening at the same time as a resize, if you need to do anything fancier, you'll have to
 * use the callback which is the second item in the returned array to force a resize
 * @param ref the html element to watch
 */
export function useBoundingClientRect(
  ref: React.MutableRefObject<Element | undefined | null>,
  onChange?: (newBoundingClientRect: DOMRect) => void,
  listenToScroll = true
): UseBoundingClientRectReturn {
  const [rect, setRect] = React.useState<DOMRect>(
    ref.current?.getBoundingClientRect() || {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      x: 0,
      y: 0,

      toJSON: () => {},
    }
  );

  function domRectToObject(domRect: DOMRect) {
    const { top, right, bottom, left, width, height, x, y } = domRect;
    return { top, right, bottom, left, width, height, x, y };
  }

  const setRectSize = React.useCallback(() => {
    if (ref.current) {
      const boundingClientRect = ref.current.getBoundingClientRect();

      if (contentDependency(domRectToObject(boundingClientRect)) !== contentDependency(domRectToObject(rect))) {
        onChange?.(boundingClientRect);
        setRect(boundingClientRect);
      }
    }
  }, [ref, rect, onChange]);

  /** Run the callback to get the element's size whenever it resizes */
  useResizeObserver(setRectSize, {}, ref);

  useDidUpdateEffect(() => {
    if (listenToScroll) {
      setRectSize();
    }
  }, [listenToScroll]);

  const onScroll = React.useCallback(() => {
    if (listenToScroll) {
      setRectSize();
    }
  }, [listenToScroll, setRectSize]);

  useEventListener('resize', setRectSize, Document);
  useEventListener('scroll', onScroll, Document, { capture: true });

  React.useEffect(() => {
    setRectSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to re-trigger when the function is redefined
  }, []);

  return [rect, setRectSize];
}
