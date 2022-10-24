import * as React from "react";

import "./group.basic.scss?inline";

export const Group = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>(({ children }, ref) => {
  return (
    <div className="arm-group" ref={ref}>
      {children}
    </div>
  );
});
