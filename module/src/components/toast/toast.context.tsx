import * as React from 'react';

import { IPortalProps, Portal } from '../portal';
import { IToastNotificationProps, ToastNotificationContainer } from './toast.component';
import { IGlobalToastConfig, IToastNotification } from './toast.types';

export type DispatchToast = (...toast: IToastNotificationProps[]) => void;
export type DismissToast = (toast: IToastNotificationProps) => void;

interface IToastContext {
  dispatch?: DispatchToast;
  dismiss?: DismissToast;
  dismissAll?: () => void;
  toasts: IToastNotificationProps[];
  config: IGlobalToastConfig;
}

const ToastContext = React.createContext<IToastContext>({
  dismiss: undefined,
  dismissAll: undefined,
  dispatch: undefined,
  toasts: [],
  config: {},
});
const useToastContext = () => React.useContext(ToastContext);

interface IAddToastAction {
  type: 'add';
  toasts: IToastNotificationProps[];
}
interface IDismissToastAction {
  type: 'dismiss';
  toast: IToastNotificationProps;
}
interface IDismissAllToastAction {
  type: 'dismiss-all';
}
type ToastAction = IAddToastAction | IDismissToastAction | IDismissAllToastAction;

const toastReducer: React.Reducer<IToastNotificationProps[], ToastAction> = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, ...action.toasts];
    case 'dismiss':
      return [...state.filter(toast => toast !== action.toast)];
    case 'dismiss-all':
      return [];
    default:
      return state;
  }
};

export interface IToastProviderProps extends Pick<IPortalProps, 'portalTo' | 'portalToSelector'>, IGlobalToastConfig {
  /** set to false to completely customise how your application uses toast notifications, you'll need to render your own toasts using useToasts  */
  renderToastContainer?: boolean;
}

/** Provides the context for Armstrong toast notifications, and by default renders a ToastContainer which will display all dispatched toasts */
export const ToastProvider: React.FC<React.PropsWithChildren<IToastProviderProps>> = ({
  children,
  portalTo,
  portalToSelector,
  renderToastContainer,
  ...config
}) => {
  const [toasts, dispatchAction] = React.useReducer(toastReducer, []);

  /** Dispatch a new toast notification */
  const dispatch = React.useCallback(
    (...newToasts: IToastNotificationProps[]) => {
      dispatchAction({ type: 'add', toasts: newToasts });
    },
    [dispatchAction]
  );

  /** Dismiss a toast notification by index */
  const dismiss = React.useCallback(
    (toast: IToastNotificationProps) => {
      dispatchAction({ type: 'dismiss', toast });
    },
    [dispatchAction]
  );

  /** Dismiss all toast notifications */
  const dismissAll = React.useCallback(() => dispatchAction({ type: 'dismiss-all' }), [dispatchAction]);

  return (
    <ToastContext.Provider value={{ dispatch, dismissAll, dismiss, toasts, config }}>
      {children}

      {renderToastContainer && (
        <>
          {portalTo || portalToSelector ? (
            <Portal portalTo={portalTo} portalToSelector={portalToSelector}>
              <ToastNotificationContainer />
            </Portal>
          ) : (
            <ToastNotificationContainer />
          )}
        </>
      )}
    </ToastContext.Provider>
  );
};

ToastProvider.defaultProps = {
  autoDismissTime: 5000,
  position: 'bottom-right',
  renderToastContainer: true,
};

/** Dispatch a toast notification into the toasts state */
export function useDispatchToast() {
  const { dismiss, dispatch, config } = useToastContext();

  const dispatchToasts = React.useCallback(
    (...toasts: (IToastNotification | string)[]) => {
      dispatch!(
        ...toasts.map(toast => {
          const newToast: IToastNotificationProps =
            typeof toast === 'string'
              ? {
                  title: toast,
                  timestamp: new Date(),
                  autoDismissTime: config.autoDismissTime,
                  position: config.position,
                  onDismiss: () => dismiss!(newToast),
                }
              : {
                  timestamp: new Date(),
                  autoDismissTime: toast.autoDismissTime ?? config.autoDismissTime,
                  position: toast.position ?? config.position,
                  ...toast,
                  onDismiss: () => {
                    dismiss!(newToast);
                    toast.onDismiss?.();
                  },
                };

          return newToast;
        })
      );
    },
    [config.position, config.autoDismissTime]
  );

  return dispatchToasts;
}

/** Get the array of currently active toast notifications */
export function useToasts() {
  const { toasts, config, dismiss, dismissAll } = useToastContext();
  return { toasts, config, dismiss: dismiss!, dismissAll: dismissAll! };
}
