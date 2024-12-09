import * as RadixLabel from "@radix-ui/react-label";
import * as React from "react";
import { LabelHTMLAttributes } from "react";

import { DisplaySize } from "../../types";
import { concat } from "../../utils";
import { useArmstrongConfig } from "../config";

import "./label.theme.css";

export interface ILabelProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "ref"> {
  /** Should the label show a required indicator? */
  required?: boolean;

  /** Symbol to use as the required indicator, defaults to "*" */
  requiredIndicator?: React.ReactNode;

  /** which size variant to use */
  displaySize?: DisplaySize;
}

/** Render a status icon which can either be pending or errored */
export const Label = React.forwardRef<HTMLLabelElement, ILabelProps>(
  (
    {
      required,
      className,
      requiredIndicator,
      children,
      displaySize,
      ...nativeProps
    },
    ref
  ) => {
    const globals = useArmstrongConfig({
      inputDisplaySize: displaySize,
      requiredIndicator,
    });
    return (
      <RadixLabel.Root
        className={concat("arm-label", className)}
        ref={ref}
        data-size={globals.inputDisplaySize}
        {...nativeProps}
      >
        {children}
        {required && (
          <span className="arm-label-required-indicator">
            &nbsp;{globals.requiredIndicator}
          </span>
        )}
      </RadixLabel.Root>
    );
  }
);

Label.displayName = "Label";
