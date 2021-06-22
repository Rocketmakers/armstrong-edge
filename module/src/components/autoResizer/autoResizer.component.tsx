import * as React from 'react';

import { useBoundingClientRect } from '../../hooks';
import { ClassNames } from '../../utils/classNames';

/** A div which will automatically resize depending on the size of its children */
export const AutoResizer: React.FC<React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement>> = ({
  className,
  children,
  style,
  ...nativeProps
}) => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  const [{ height, width }] = useBoundingClientRect(contentRef);

  return (
    <div
      {...nativeProps}
      className={ClassNames.concat('arm-auto-resizer', className)}
      style={{ '--arm-auto-resizer-width': `${width}px`, '--arm-auto-resizer-height': `${height}px`, ...(style || {}) } as React.CSSProperties}
    >
      <div ref={contentRef} className="arm-auto-resizer-content">
        {children}
      </div>
    </div>
  );
};
