import * as RadixToast from '@radix-ui/react-toast';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { useArmstrongConfig } from '../config';
import { Toast } from './toast.component';

import './toast.theme.css';

/** Type denoting a toast message */
export interface IToast {
  /** optional title for the toast popup (will be displayed above description & content) */
  title?: string;
  /** optional text content for the toast popup (will be displayed below title & above content) */
  description?: string;
  /** optional JSX content for the toast popup (will be displayed below title & description) */
  content?: React.ReactNode;
  /** how long to show the toast in ms for (will default to global setting or failing that 5000) */
  duration?: number;
  /** hide the close button entirely? */
  hideClose?: boolean;
  /** optional class name to add to the toast element */
  className?: string;
  /** optional test id to add to the toast element */
  testId?: string;
  /** optional additional props to spread onto the toast component */
  additionalProps?: React.RefAttributes<HTMLLIElement>;
}

/** Type denoting the position of a toast message */
export type ToastPosition = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';

/** Types of the global toast context */
interface IToastContext {
  /** Adds a new toast message to the global stack */
  addToast: (newToast: IToast) => void;
}

/** The default context to initialize with */
const initialContext: IToastContext = {
  addToast: () => {
    throw new Error(
      "Unable to dispatch toast, are you sure you've added either the <ArmstrongProvider> or <ToastProvider>?"
    );
  },
};

/** The global toast context */
export const ToastContext = React.createContext<IToastContext>(initialContext);

/** The props for the toast provider */
interface IToastProviderProps {
  /** how long ot show toast messages for in ms, defaults to 5000 */
  duration?: number;

  /** where to position the toast, defaults to "bottom-right" */
  position?: ToastPosition;

  /** the icon to use for the dialog close button */
  closeButtonIcon?: JSX.Element | false;
}

export const ToastProvider: React.FC<React.PropsWithChildren<IToastProviderProps>> = ({
  children,
  duration,
  position,
  closeButtonIcon,
}) => {
  const [toasts, addToast] = React.useReducer<React.Reducer<IToast[], IToast>>(
    (state, action) => [...state, action],
    []
  );
  const globals = useArmstrongConfig({
    toastDuration: duration,
    toastPosition: position,
    toastCloseButtonIcon: closeButtonIcon,
  });

  const swipeDirection =
    globals.toastPosition === 'bottom-left' || globals.toastPosition === 'top-left' ? 'left' : 'right';

  return (
    <ToastContext.Provider value={{ addToast }}>
      <RadixToast.Provider swipeDirection={swipeDirection} duration={globals.toastDuration}>
        {children}
        {toasts.map((toast, i) => (
          <Toast
            key={`${toast.title}-${i}`}
            duration={globals.toastDuration}
            position={globals.toastPosition}
            closeButtonIcon={globals.toastCloseButtonIcon}
            {...toast}
          />
        ))}
        {globals.globalPortalTo && ReactDOM.createPortal(
          <RadixToast.Viewport className="arm-toast-viewport" data-position={globals.toastPosition} />,
          globals.globalPortalTo
        )}
      </RadixToast.Provider>
    </ToastContext.Provider>
  );
};

ToastProvider.displayName = 'ToastProvider';
