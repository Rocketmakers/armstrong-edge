'use client';

import * as RadixToast from '@radix-ui/react-toast';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ToastDisplayMode } from '../../types';
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

interface IToastWitKey extends IToast {
  /** key for identifying the toast */
  key: string;
  exited: boolean;
}

/** Type denoting the position of a toast message */
export type ToastPosition = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';

/** Types of the global toast context */
interface IToastContext {
  /** Adds a new toast message to the global stack, returns the key of the added toast (if toast was added) */
  addToast: (newToast: IToast) => string | undefined;

  /** Dismisses a toast by its key, removing it from the stack */
  dismissToastByKey: (key: string) => void;
}

/** The default context to initialize with */
const initialContext: IToastContext = {
  addToast: () => {
    throw new Error(
      "Unable to dispatch toast, are you sure you've added either the <ArmstrongProvider> or <ToastProvider>?"
    );
  },
  dismissToastByKey: () => {
    throw new Error(
      "Unable to dismiss toast, are you sure you've added either the <ArmstrongProvider> or <ToastProvider>?"
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
  closeButtonIcon?: React.ReactElement | false;

  /** whether to add toasts to a stack or display one at a time */
  displayMode?: ToastDisplayMode;

  /** ignore toasts if an existing toast matches this predicate */
  ignorePredicate?: (existingToasts: IToast[], incomingToast: IToast) => boolean;
}

export const ToastProvider: React.FC<React.PropsWithChildren<IToastProviderProps>> = ({
  children,
  duration,
  position,
  closeButtonIcon,
  displayMode,
  ignorePredicate,
}) => {
  const globals = useArmstrongConfig({
    toastDuration: duration,
    toastPosition: position,
    toastCloseButtonIcon: closeButtonIcon,
    toastDisplayMode: displayMode,
    toastIgnorePredicate: ignorePredicate,
  });

  const nextToastKey = React.useRef(1);
  const [toasts, setToasts] = React.useState<IToastWitKey[]>([]);

  const swipeDirection =
    globals.toastPosition === 'bottom-left' || globals.toastPosition === 'top-left' ? 'left' : 'right';

  const addToast = React.useCallback(
    (newToast: IToast) => {
      if (
        globals.toastIgnorePredicate?.(
          toasts.filter(t => !t.exited).map(({ key, exited, ...toast }) => toast),
          newToast
        )
      ) {
        return undefined;
      }
      const key = `toast-${nextToastKey.current}`;
      nextToastKey.current += 1;
      const toast = { ...newToast, key, exited: false };
      setToasts(prevToasts => {
        if (globals.toastDisplayMode === 'add') {
          return [...prevToasts, toast];
        }
        return [toast];
      });
      return key;
    },
    [globals, toasts]
  );

  const removeToastByKey = React.useCallback((key: string) => {
    setToasts(prevToasts => prevToasts.map(toast => (toast.key === key ? { ...toast, exited: true } : toast)));
  }, []);

  const dismissToastByKey = React.useCallback((key: string) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.key !== key));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, dismissToastByKey }}>
      <RadixToast.Provider swipeDirection={swipeDirection} duration={globals.toastDuration}>
        {children}
        {toasts.map(({ key, ...toast }) => (
          <Toast
            key={key}
            duration={globals.toastDuration}
            position={globals.toastPosition}
            closeButtonIcon={globals.toastCloseButtonIcon}
            onExit={() => removeToastByKey(key)}
            {...toast}
          />
        ))}
        {globals.globalPortalTo &&
          ReactDOM.createPortal(
            <RadixToast.Viewport className="arm-toast-viewport" data-position={globals.toastPosition} />,
            globals.globalPortalTo
          )}
      </RadixToast.Provider>
    </ToastContext.Provider>
  );
};

ToastProvider.displayName = 'ToastProvider';
