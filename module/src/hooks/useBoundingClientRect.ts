import * as React from 'react';

import { Objects } from '../utils';
import { DOM } from '../utils/dom';
import { Globals } from '../utils/globals';
import { useDidUpdateEffect } from './useDidUpdateEffect';
import { useEventListener } from './useEventListener';
import { useResizeObserver } from './useResizeObserver';

export type useBoundingClientRectReturn = [DOMRect, () => void];

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
): useBoundingClientRectReturn {
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
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      toJSON: () => {},
    }
  );

  const setRectSize = React.useCallback(() => {
    if (ref.current) {
      const boundingClientRect = ref.current.getBoundingClientRect();

      if (Objects.contentDependency(DOM.domRectToObject(boundingClientRect)) !== Objects.contentDependency(DOM.domRectToObject(rect))) {
        onChange?.(boundingClientRect);
        setRect(boundingClientRect);
      }
    }
  }, [ref.current, rect]);

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

  useEventListener('resize', setRectSize, Globals.Document);
  useEventListener('scroll', onScroll, Globals.Document, { capture: true });

  React.useEffect(() => setRectSize(), []);

  return [rect, setRectSize];
}
