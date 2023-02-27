import * as React from 'react';

import { concat } from '../../utils/classNames';
import { AutoResizer } from '../autoResizer/autoResizer.component';

export interface IExpandableProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
  /** is the expandable region open, if false will take up no space */
  isOpen?: boolean;

  /** which direction should the children open */
  direction?: 'vertical' | 'horizontal';
}

/** A div which expands to fit its children when isOpen is true, otherwise it takes up no space - can work horizontally or vertically */
export const Expandable = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IExpandableProps>>(
  ({ isOpen, className, direction, ...nativeProps }, forwardedRef) => {
    return (
      <AutoResizer
        {...nativeProps}
        ref={forwardedRef}
        tabIndex={isOpen ? undefined : -1}
        aria-hidden={!isOpen}
        className={concat('arm-expandable', className)}
        data-direction={direction}
        data-is-open={!!isOpen}
      />
    );
  }
);

Expandable.defaultProps = {
  direction: 'vertical',
};
