import * as React from 'react';

export type UseIsHoveringReturn = [boolean, Pick<React.HTMLAttributes<HTMLElement>, 'onMouseEnter' | 'onMouseLeave'>];

export const useIsHovering = (): UseIsHoveringReturn => {
  const [isHovering, setIsHovering] = React.useState(false);

  const onMouseEnter = React.useCallback(() => {
    setIsHovering(true);
  }, []);

  const onMouseLeave = React.useCallback(() => {
    setIsHovering(false);
  }, []);

  return [isHovering, { onMouseEnter, onMouseLeave }];
};
