import * as React from 'react';

import { Colours } from '../..';

export type ProgressBarLabelVariant = 'centre' | 'following';

export type ProgressBarDirection = 'left' | 'right' | 'down' | 'up';

export interface IProgressBarProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
  /** (number) the progress of the bar from 0 to 100 */
  progress: number;

  /** ('left' | 'right' | 'down' | 'up') the direction for the loading to increase */
  direction?: ProgressBarDirection;

  /** (string) the text to optionally display as a label */
  labelText?: string;

  /** ('centre' | 'following') the position to show the label - defaults to centre */
  labelVariant?: ProgressBarLabelVariant;

  /** (Colour[]) breakpoints for the colour to make the progress bar based on the progress  */
  colorBreakpoints?: Colours.Colour[];

  /** (string) colour when the progress has hit 100 */
  completeColor?: string;
}

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
    () => colorBreakpoints && Colours.multiLerpRGB(colorBreakpoints.map(Colours.colourToRGB), progress),
    [colorBreakpoints, progress]
  );

  return <div className="arm-progress-bar" {...nativeProps}></div>;
};
