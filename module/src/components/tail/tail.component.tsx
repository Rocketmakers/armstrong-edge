import * as React from 'react';

import { ClassNames } from '../../utils';

export type TailPosition = 'above' | 'below' | 'left' | 'right';

export interface ITailProps extends React.HTMLProps<HTMLDivElement> {
  /** the position to render the tail */
  position: TailPosition;
}

/** a simple visual component used for adding a tail (notch, arrow, nubbin, etc.) in a pseudo element beside its child */
export const Tail = React.forwardRef<HTMLDivElement, ITailProps>(({ position, children, className, ...htmlProps }, ref) => {
  return (
    <div {...htmlProps} ref={ref} className={ClassNames.concat('arm-tail-wrapper', className)} data-position={position}>
      {children}
    </div>
  );
});
