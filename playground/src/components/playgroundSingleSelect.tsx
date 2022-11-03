import React from "react";
import {
  IReactSelectBaseProps,
  ReactSelectRef,
  SingleSelect,
} from "@rocketmakers/armstrong-dev";

export const PlaygroundSingleSelect = React.forwardRef<
  ReactSelectRef,
  IReactSelectBaseProps<any>
>(({ ...props }, ref) => {
  return <SingleSelect ref={ref} {...props} />;
});
