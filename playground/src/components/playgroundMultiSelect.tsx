import React from "react";
import {
  IReactMultiSelectProps,
  MultiSelect,
  ReactSelectMultiRef,
} from "@rocketmakers/armstrong-dev";

export const PlaygroundMultiSelect = React.forwardRef<
  ReactSelectMultiRef,
  IReactMultiSelectProps<any, any>
>(({ ...props }, ref) => {
  return <MultiSelect ref={ref} {...props} />;
});
