import * as React from 'react';

import { ClassNames } from '../../utils';
import { IPortalProps, Portal } from '../portal';
import { IProgressBarProps, ProgressBar } from '../progressBar/progressBar.component';

export type GlobalProgressBarPosition = 'top' | 'bottom' | 'left' | 'right';

export interface IGlobalProgressBarProps extends IProgressBarProps, IPortalProps {
  /** which side of the screen should the progress bar be rendered on */
  position?: GlobalProgressBarPosition;

  /** should hide off edge of screen */
  hidden?: boolean;
}

/** A ProgressBar which is portaled into a fixed position on the edge of the screen */
export const FixedProgressBar = React.forwardRef<HTMLDivElement, IGlobalProgressBarProps>(
  ({ className, portalToSelector, portalTo, hidden, position, direction, ...progressBarProps }, forwardedRef) => {
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
          {...progressBarProps}
          ref={forwardedRef}
          data-hidden={hidden}
          direction={fixedDirection}
          data-position={position}
          className={ClassNames.concat('arm-global-progress-bar', className)}
        />
      </Portal>
    );
  }
);

FixedProgressBar.defaultProps = {
  position: 'top',
};
