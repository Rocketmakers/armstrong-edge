import * as React from 'react';

/** A corner of the screen to render a toast notification */
export type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface IToastNotification {
  /** The optional title to render at the top of the toast notification */
  title?: string;

  /** The content of the toast - optionally takes a callback giving the React children access to a dismiss function and the full toast notification */
  content?: ((args: { dismiss?: () => void; toast: IToastNotification }) => React.ReactNode) | React.ReactNode;

  /** The date at which the toast notification was dispatched (can be overridden during the dispatch) */
  timestamp?: Date;

  /** Added as a data-type attribute, allowing styling based on the situation of the toast */
  type?: ToastType;

  /** The time, in ms, to auto-dismiss the toast. Is reset when the user enters the toast with their mouse. - can be set at the context level */
  autoDismissTime?: number;

  /** html attributes to spread onto the toast notification element */
  htmlProps?: React.HTMLAttributes<HTMLDivElement>;

  /** the position at which to render the toasts */
  position?: ToastPosition;

  /** whether to allow the user to manually dismiss the toast with a close button rendered at the top right - defaults to true */
  allowManualDismiss?: boolean;

  /** dismiss this toast notification, automatically fired after the given autoDismissTime */
  onDismiss?: () => void;
}

export interface IGlobalToastConfig extends Pick<IToastNotification, 'position' | 'autoDismissTime'> {
  /**
   * A formatter to apply to the timestamp.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   */
  timestampFormatString?: string;
}
