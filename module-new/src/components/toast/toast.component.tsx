import * as RadixToast from '@radix-ui/react-toast';
import * as React from 'react';

import { concat } from '../../utils';
import type { IToast, ToastPosition } from './toast.context';

import './toast.theme.css';

export interface IToastProps extends IToast {
  /** where to position the toast, defaults to "bottom-right" */
  position: ToastPosition;

  /** the icon to use for the dialog close button */
  closeButtonIcon: JSX.Element | false;
}

export const Toast: React.FC<IToastProps> = ({
  title,
  description,
  content,
  duration,
  position,
  closeButtonIcon,
  hideClose,
  className,
}) => {
  return (
    <RadixToast.Root className={concat('arm-toast', className)} duration={duration} data-position={position}>
      {title && <RadixToast.Title className="arm-toast-title">{title}</RadixToast.Title>}
      {description && <RadixToast.Description className="arm-toast-description">{description}</RadixToast.Description>}
      {closeButtonIcon !== false && !hideClose && (
        <RadixToast.Close className="arm-toast-close">{closeButtonIcon}</RadixToast.Close>
      )}
      {content}
    </RadixToast.Root>
  );
};

Toast.displayName = 'Toast';
