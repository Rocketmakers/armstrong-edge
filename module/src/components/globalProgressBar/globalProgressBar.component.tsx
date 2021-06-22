import * as React from 'react';

import { ClassNames } from '../../utils';
import { IPortalProps, Portal } from '../portal';
import { IProgressBarProps, ProgressBar } from '../progressBar/progressBar.component';

export type GlobalProgressBarPosition = 'top' | 'bottom' | 'left' | 'right';

export interface IGlobalProgressBarProps extends IProgressBarProps, IPortalProps {
  /** ('top' | 'bottom' | 'left' | 'right') which side of the screen should the progress bar be rendered on */
  position?: GlobalProgressBarPosition;
}

/** A ProgressBar which is portaled into a fixed position on the edge of the screen */
export const GlobalProgressBar: React.FC<IGlobalProgressBarProps> = ({
  className,
  portalToSelector,
  portalTo,
  position,
  direction,
  ...progressBarProps
}) => {
  // ensure that direction is one that is compatible with position
  const fixedDirection = React.useMemo(() => {
    if ((position === 'top' || position === 'bottom') && !(direction === 'left' || direction === 'right')) {
      return 'right';
    }
    if ((position === 'left' || position === 'right') && !(direction === 'up' || direction === 'down')) {
      return 'up';
    }
    return direction;
  }, [position, direction]);

  return (
    <Portal portalToSelector={portalToSelector} portalTo={portalTo}>
      <ProgressBar
        direction={fixedDirection}
        data-position={position}
        className={ClassNames.concat('arm-global-progress-bar', className)}
        {...progressBarProps}
      />
    </Portal>
  );
};

GlobalProgressBar.defaultProps = {
  position: 'top',
};
