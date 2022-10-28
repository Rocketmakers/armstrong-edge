import React from "react";
import {
  ISingleSelectProps,
  ReactSingleSelectRef,
  SingleSelect,
} from "@rocketmakers/armstrong-dev";

export const PlaygroundSingleSelect = React.forwardRef<
  ReactSingleSelectRef,
  ISingleSelectProps
>(({ ...props }, ref) => {
  return <SingleSelect ref={ref} {...props}></SingleSelect>;
});
