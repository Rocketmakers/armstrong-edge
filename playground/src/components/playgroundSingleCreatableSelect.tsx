import {
  IReactSelectBaseProps,
  ReactSelectRef,
  SingleSelect,
} from "@rocketmakers/armstrong-dev";
import React from "react";

export const PlaygroundSingleSelectCreatable = React.forwardRef<
  ReactSelectRef,
  IReactSelectBaseProps<any>
>(({ ...props }, ref) => {
  return <SingleSelect ref={ref} {...props} allowCreate={true} />;
});
