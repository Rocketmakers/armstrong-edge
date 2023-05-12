import { Indicator, Root } from '@radix-ui/react-progress';
import * as React from 'react';

import { concat } from '../../utils';

import './progressBar.theme.css';

export interface IProgressBarProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
  /** the progress of the bar from 0 to 100 */
  progress: number;

  /** The maximum value of the progress bar */
  max?: number;

  /** the text to optionally display as a label */
  label?: string;
}

/** Show a progress bar using a progress property */
export const ProgressBar = React.forwardRef<HTMLDivElement, IProgressBarProps>(
  ({ progress, label, className, max = 100 }, forwardedRef) => {
    return (
      <Root className={concat('arm-progress-root', className)} value={progress} max={max} ref={forwardedRef}>
        <Indicator
          className="arm-progress-indicator"
          style={{ transform: `translateX(-${100 - (progress / max) * 100}%)` }}
        />
        {label}
      </Root>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';
