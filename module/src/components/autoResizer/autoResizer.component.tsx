import * as React from "react";

import { useBoundingClientRect } from "../../hooks";
import { concat } from "../../utils/classNames";

export interface IAutoResizerProps
  extends React.DetailedHTMLProps<
    React.HTMLProps<HTMLDivElement>,
    HTMLDivElement
  > {
  /** Fired when the size changes with the new width and height */
  onSizeChange?: (newSize: { width: number; height: number }) => void;

  /** Should resize horizontally - true by default */
  resizeHorizontal?: boolean;

  /** Should resize vertically - true by default */
  resizeVertical?: boolean;
}

/** A div which will automatically resize depending on the size of its children */
export const AutoResizer = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<IAutoResizerProps>
>(
  (
    {
      className,
      children,
      style,
      onSizeChange,
      resizeHorizontal,
      resizeVertical,
      ...nativeProps
    },
    ref
  ) => {
    const contentRef = React.useRef<HTMLDivElement>(null);

    const onChange = React.useCallback(
      (rect: DOMRect) => {
        onSizeChange?.({ width: rect.width, height: rect.height });
      },
      [onSizeChange]
    );

    const [{ height, width }] = useBoundingClientRect(
      contentRef,
      onChange,
      false
    );

    return (
      <div
        {...nativeProps}
        className={concat("arm-auto-resizer", className)}
        style={
          {
            ...(resizeHorizontal
              ? { "--arm-auto-resizer-width": `${width}px` }
              : {}),
            ...(resizeVertical
              ? { "--arm-auto-resizer-height": `${height}px` }
              : {}),
            ...(style || {}),
          } as React.CSSProperties
        }
        data-animate-horizontal={resizeHorizontal}
        data-animate-vertical={resizeVertical}
        ref={ref}
      >
        <div ref={contentRef} className="arm-auto-resizer-content">
          {children}
        </div>
      </div>
    );
  }
);

AutoResizer.defaultProps = {
  resizeVertical: true,
  resizeHorizontal: true,
};
