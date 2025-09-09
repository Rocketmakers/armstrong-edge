import * as React from 'react';

import { useBoundingClientRect } from '../../hooks/useBoundingClientRect';
import { concat } from '../../utils/classNames';

import './expandable.theme.css';

export interface IExpandableProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
  /** is the expandable region open, if false will take up no space */
  isOpen?: boolean;

  /** Should animate the height expansion */
  animate?: boolean;
}

/** A div which will automatically resize depending on the size of its children */
export const Expandable = (props: React.PropsWithChildren<IExpandableProps & { ref?: React.Ref<HTMLDivElement> }>) => {
  const { className, children, style, animate, isOpen, ref, ...nativeProps } = props;
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [{ height }] = useBoundingClientRect(contentRef);

  return (
    <div
      {...nativeProps}
      className={concat('arm-expandable', className)}
      style={
        {
          ...(animate ? { '--arm-expandable-height': `${height}px` } : {}),
          ...(style || {}),
        } as React.CSSProperties
      }
      data-animate={!!animate}
      data-is-open={!!isOpen}
      ref={ref}
    >
      <div ref={contentRef} className="arm-expandable-content">
        {children}
      </div>
    </div>
  );
};

Expandable.displayName = 'Expandable';

