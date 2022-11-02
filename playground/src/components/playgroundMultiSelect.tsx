import React from "react";
import {
  IReactMultiSelectProps,
  MultiSelect,
  ReactSelectMultiRef,
} from "@rocketmakers/armstrong-dev";

export const PlaygroundMultiSelect = React.forwardRef<
  ReactSelectMultiRef,
  IReactMultiSelectProps
>(({ ...props }, ref) => {
  return <MultiSelect ref={ref} {...props} />;
});
