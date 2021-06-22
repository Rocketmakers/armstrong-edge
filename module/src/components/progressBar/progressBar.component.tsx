import * as React from 'react';

import { Colors } from '../..';
import { ClassNames } from '../../utils';

export type ProgressBarLabelVariant = 'centre' | 'centre-progress';

export type ProgressBarDirection = 'left' | 'right' | 'down' | 'up';

export interface IProgressBarProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
  /** (number) the progress of the bar from 0 to 100 */
  progress: number;

  /** ('left' | 'right' | 'down' | 'up') the direction for the loading to increase */
  direction?: ProgressBarDirection;

  /** (string) the text to optionally display as a label */
  labelText?: string;

  /** ('centre' | 'centre-progress') the position to show the label - defaults to centre, must be used with labelText */
  labelVariant?: ProgressBarLabelVariant;

  /** (Color[]) breakpoints for the color to make the progress bar based on the progress in an array, given either as hex strings */
  colorBreakpoints?: Colors.Color[];

  /** (string) color when the progress has hit 100 */
  completeColor?: string;
}

/** Show a progress bar using a progress property */
export const ProgressBar: React.FC<IProgressBarProps> = ({
  progress,
  direction,
  labelText,
  labelVariant,
  colorBreakpoints,
  className,
  ...nativeProps
}) => {
  const color = React.useMemo(
    () => !!colorBreakpoints?.length && Colors.RGBToHex(Colors.multiLerpRGB(colorBreakpoints.map(Colors.colorToRGB), progress)),
    [colorBreakpoints, progress]
  );

  return (
    <div
      className={ClassNames.concat('arm-progress-bar', className)}
      data-direction={direction}
      style={{ '--arm-progress-bar-color': color, '--arm-progress-bar-progress': `${progress}%` } as React.CSSProperties}
      {...nativeProps}
    >
      <div className="arm-progress-bar-progress" />
      {labelText && (
        <div className="arm-progress-bar-label" data-variant={labelVariant}>
          <p>{labelText}</p>
        </div>
      )}
    </div>
  );
};

ProgressBar.defaultProps = {
  direction: 'right',
  labelVariant: 'centre',
};
