import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { AutoResizer } from '../autoResizer/autoResizer.component';

export interface IExpandableProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
  /** is the expandable region open, if false will take up no space */
  isOpen?: boolean;

  /** which direction should the children open */
  direction?: 'vertical' | 'horizontal';
}

/** A div which expands to fit its children when isOpen is true, otherwise it takes up no space - can work horizontally or vertically */
export const Expandable: React.FC<IExpandableProps> = ({ isOpen, className, direction, ...nativeProps }) => {
  return (
    <AutoResizer
      tabIndex={isOpen ? undefined : -1}
      aria-hidden={!isOpen}
      className={ClassNames.concat('arm-expandable', className)}
      data-direction={direction}
      data-is-open={!!isOpen}
      {...nativeProps}
    />
  );
};

Expandable.defaultProps = {
  direction: 'vertical',
};
