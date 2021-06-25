import * as React from 'react';

import { Globals } from '../utils/globals';
import { useEventListener } from './useEventListener';
import { useResizeObserver } from './useResizeObserver';

export type useBoundingClientRectReturn = [DOMRect, () => void];

/**
 * Get the size of the element with the given ref - uses a resize observer, listens to scroll events, and listens to resize events
 * WARNING: positions will not update automatically unless happening at the same time as a resize, if you need to do anything fancier, you'll have to
 * use the callback which is the second item in the returned array to force a resize
 * @param ref the html element to watch
 */
export function useBoundingClientRect(ref: React.MutableRefObject<Element | undefined | null>): useBoundingClientRectReturn {
  const [rect, setRect] = React.useState<DOMRect>({
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
  });

  const setRectSize = React.useCallback(() => {
    if (ref.current) {
      const boundingClientRect = ref.current.getBoundingClientRect();

      // todo - optimise so this is only run when one of its values changes - currently unnecessary re-renders will be called
      setRect(boundingClientRect);
    }
  }, [ref.current]);

  /** Run the callback to get the element's size whenever it resizes */
  useResizeObserver(setRectSize, {}, ref);

  useEventListener('resize', setRectSize);
  useEventListener('scroll', setRectSize, Globals.Window, { capture: true });

  return [rect, setRectSize];
}
