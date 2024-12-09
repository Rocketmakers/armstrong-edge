import * as RadixProgress from "@radix-ui/react-progress";
import * as React from "react";

import { clamp, concat } from "../../utils";

import "./progressBar.theme.css";

export interface IProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** The content to display in the tooltip */
  progress?: number;

  /** Optional class name for the progress indicator element */
  indicatorClassName?: string;
}

export const ProgressBar = React.forwardRef<HTMLDivElement, IProgressBarProps>(
  ({ progress, className, indicatorClassName, ...props }, ref) => {
    const style = {
      "--arm-progress-bar-value": `${clamp(progress ?? 0, 0, 100)}%`,
    } as React.CSSProperties;

    return (
      <RadixProgress.Root
        className={concat(className, "arm-progress-bar")}
        value={progress}
        ref={ref}
        {...props}
      >
        <RadixProgress.Indicator
          className={concat(indicatorClassName, "arm-progress-bar-indicator")}
          style={style}
        />
      </RadixProgress.Root>
    );
  }
);

ProgressBar.displayName = "ProgressBar";
