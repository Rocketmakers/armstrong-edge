import * as React from "react";

import { Colors } from "../..";
import { ClassNames } from "../../utils";

import "./progressBar.basic.scss";

export type ProgressBarLabelVariant = "centre" | "centre-progress";

export type ProgressBarDirection = "left" | "right" | "down" | "up";

export interface IProgressBarProps
  extends React.DetailedHTMLProps<
    React.HTMLProps<HTMLDivElement>,
    HTMLDivElement
  > {
  /** the progress of the bar from 0 to 100 */
  progress: number;

  /** the direction for the loading to increase */
  direction?: ProgressBarDirection;

  /** the text to optionally display as a label */
  labelText?: string;

  /** the position to show the label - defaults to centre, must be used with labelText */
  labelVariant?: ProgressBarLabelVariant;

  /** breakpoints for the color to make the progress bar based on the progress in an array, given either as hex strings */
  colorBreakpoints?: Colors.Color[];

  /** color when the progress has hit 100 */
  completeColor?: string;
}

/** Show a progress bar using a progress property */
export const ProgressBar = React.forwardRef<HTMLDivElement, IProgressBarProps>(
  (
    {
      progress,
      direction,
      labelText,
      labelVariant,
      colorBreakpoints,
      className,
      ...nativeProps
    },
    forwardedRef
  ) => {
    const color = React.useMemo(
      () =>
        !!colorBreakpoints?.length &&
        Colors.RGBToHex(
          Colors.multiLerpRGB(colorBreakpoints.map(Colors.colorToRGB), progress)
        ),
      [colorBreakpoints, progress]
    );

    return (
      <div
        className={ClassNames.concat("arm-progress-bar", className)}
        data-direction={direction}
        data-has-label={!!labelText}
        style={
          {
            "--arm-progress-bar-color": color,
            "--arm-progress-bar-progress": `${progress}%`,
          } as React.CSSProperties
        }
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={labelText}
        {...nativeProps}
        ref={forwardedRef}
      >
        <div className="arm-progress-bar-progress" />
        {labelText && (
          <div className="arm-progress-bar-label" data-variant={labelVariant}>
            <p>{labelText}</p>
          </div>
        )}
      </div>
    );
  }
);

ProgressBar.defaultProps = {
  direction: "right",
  labelVariant: "centre",
};
