import React from "react";
import {
  IReactMultiSelectProps,
  MultiSelect,
  ReactSelectMultiRef,
} from "@rocketmakers/armstrong-dev";

export const PlaygroundMultiSelectCreatable = React.forwardRef<
  ReactSelectMultiRef,
  IReactMultiSelectProps<any, any>
>(({ ...props }, ref) => {
  return <MultiSelect ref={ref} {...props} allowCreate={true} />;
});
