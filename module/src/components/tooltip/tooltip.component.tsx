import * as React from 'react';

import { IPortalProps } from '../..';
import { ClassNames } from '../../utils/classNames';
import { Modal } from '../modal';

export interface ITooltipProps
  extends React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Pick<IPortalProps, 'portalToSelector' | 'portalTo'> {
  /** (ReactNode) the contents of the tooltip */
  content: React.ReactNode;
}

export interface ITooltipRef {
  /** (HTMLDivElement) the element wrapping the children */
  rootRef: React.RefObject<HTMLDivElement | undefined>;

  /** (HTMLDivElement) the element wrapping the content which is filled with the dropdown children */
  modalRef: React.RefObject<HTMLDivElement | undefined>;
}

export const Tooltip = React.forwardRef<ITooltipRef, ITooltipProps>(
  ({ content, className, children, portalTo, portalToSelector, ...nativeProps }, ref) => {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const modalRef = React.useRef<HTMLDivElement>();

    React.useImperativeHandle(ref, () => ({ rootRef, modalRef }), [rootRef, modalRef]);

    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div className={ClassNames.concat('arm-tooltip-wrapper', className)} ref={rootRef} {...nativeProps}>
        {children}

        <Modal portalTo={portalTo} portalToSelector={portalToSelector} isOpen={isOpen} onOpenChange={setIsOpen}>
          {content}
        </Modal>
      </div>
    );
  }
);
