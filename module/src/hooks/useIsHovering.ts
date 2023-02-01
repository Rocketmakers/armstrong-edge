import * as React from 'react';

import { useEventListener } from './useEventListener';

export type UseIsHoveringReturn = [boolean, Pick<React.HTMLAttributes<HTMLElement>, 'onMouseEnter' | 'onMouseLeave'>];

/**
 * Get, in React state, whether an element is being hovered.
 * Can be used by spreading the props returned from the second element in the returned array onto the element you want to listen to,
 * or by passing in a ref
 */
export function useIsHovering(ref?: React.MutableRefObject<Element | undefined | null>): UseIsHoveringReturn {
  const [isHovering, setIsHovering] = React.useState(false);

  const onMouseEnter = React.useCallback(() => {
    setIsHovering(true);
  }, []);

  const onMouseLeave = React.useCallback(() => {
    setIsHovering(false);
  }, []);

  useEventListener('mouseEnter', onMouseEnter, ref?.current || undefined);
  useEventListener('mouseLeave', onMouseLeave, ref?.current || undefined);

  return [isHovering, { onMouseEnter, onMouseLeave }];
}
