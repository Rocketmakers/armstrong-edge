import * as React from 'react';

import { useEventListener } from '.';

export type UseIsHoveredReturn = [boolean, Pick<React.HTMLAttributes<HTMLElement>, 'onMouseEnter' | 'onMouseLeave'>];

/**
 * Get, in React state, whether an element is being hovered.
 * Can be used by spreading the props returned from the second element in the returned array onto the element you want to listen to,
 * or by passing in a ref
 */
export function useIsHovered(ref?: React.MutableRefObject<Element | undefined | null>): UseIsHoveredReturn {
  const [isHovered, setIsHovered] = React.useState(false);

  const onMouseEnter = React.useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = React.useCallback(() => {
    setIsHovered(false);
  }, []);

  useEventListener('mouseEnter', onMouseEnter, ref?.current || undefined);
  useEventListener('mouseLeave', onMouseLeave, ref?.current || undefined);

  return [isHovered, { onMouseEnter, onMouseLeave }];
}
