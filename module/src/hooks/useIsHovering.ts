import * as React from 'react';

export type UseIsHoveringReturn = [boolean, Pick<React.HTMLAttributes<HTMLElement>, 'onMouseEnter' | 'onMouseLeave'>];

/** Get, in React state, whether an element is being hovered, using the event listener props returned from the second element in the returned array */
export function useIsHovering(): UseIsHoveringReturn {
  const [isHovering, setIsHovering] = React.useState(false);

  const onMouseEnter = React.useCallback(() => {
    setIsHovering(true);
  }, []);

  const onMouseLeave = React.useCallback(() => {
    setIsHovering(false);
  }, []);

  return [isHovering, { onMouseEnter, onMouseLeave }];
}
