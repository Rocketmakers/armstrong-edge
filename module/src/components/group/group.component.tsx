import * as React from "react";

import { useGeneratedId } from "../../hooks";
import { ClassNames } from "../../utils";

import "./group.basic.scss";

export interface IGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** A title to show above the group */
  title?: string;
}

/** Incredibly simple component designed to take some of the boilerplate out of making some elements appear in a row */
export const Group = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<IGroupProps>
>(({ children, className, title, id: htmlId, ...htmlProps }, forwardedRef) => {
  const id = useGeneratedId("arm-grp", htmlId);

  const labelId = title && `${id}_label`;

  return (
    <div
      className={ClassNames.concat("arm-group", className)}
      {...htmlProps}
      ref={forwardedRef}
      data-has-title={!!title}
      id={id}
      aria-labelledby={labelId}
    >
      {title && (
        <p className="arm-group-title" id={labelId}>
          {title}
        </p>
      )}
      <div className="arm-group-inner">{children}</div>
    </div>
  );
});
