import * as React from 'react';

import { arrayToArrayDictionary } from '../..';
import { useGeneratedId, useTemporaryState, useTimeout } from '../../hooks';
import { concat } from '../../utils/classNames';
import { Dates } from '../../utils/dates';
import { contentDependency } from '../../utils/objects';
import { IconUtils } from '../icon';
import { IconButton } from '../iconButton';
import { useToasts } from './toast.context';
import { IToastNotification } from './toast.types';

import './toast.basic.scss';

export interface IToastNotificationProps
  extends Omit<IToastNotification, 'timestamp'>,
    Required<Pick<IToastNotification, 'timestamp'>> {}

/** Render a single toast notification with a title and some given information */
export const ToastNotification = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IToastNotificationProps>>(
  ({ onDismiss, ...toast }, ref) => {
    const { autoDismissTime, children, content, htmlProps, timestamp, title, type, allowManualDismiss } = toast;

    const [dismissing, setDismissing] = useTemporaryState(false, 500, onDismiss);
    const beginDismiss = React.useCallback(() => setDismissing(true), []);

    const { set: setAutoDismissTimeout, clear: clearAutoDismissTimeout } = useTimeout(beginDismiss, autoDismissTime);

    React.useEffect(() => {
      void setAutoDismissTimeout();
    }, []);

    const id = useGeneratedId('arm-tst_', htmlProps?.id);

    const contentNode = React.useMemo<React.ReactNode>(
      () => (typeof content === 'function' ? content({ dismiss: beginDismiss, toast }) : content),
      [content, beginDismiss, toast]
    );

    const {
      config: { timestampFormatString },
    } = useToasts();

    const timestampString = React.useMemo(
      () => timestampFormatString && Dates.dateToString(timestamp!, timestampFormatString),
      [timestamp]
    );

    return (
      <div
        {...htmlProps}
        className={concat('arm-toast-notification', htmlProps?.className)}
        data-type={type}
        data-dismissing={dismissing}
        onMouseEnter={clearAutoDismissTimeout}
        onMouseLeave={() => setAutoDismissTimeout()}
        ref={ref}
      >
        <div className="arm-toast-notification-inner" role="status" aria-labelledby={`${id}_title`}>
          <div className="arm-toast-notification-top">
            <p className="arm-toast-notification-title" id={`${id}_title`}>
              {title}
            </p>

            {allowManualDismiss && (
              <IconButton
                type="button"
                className="arm-toast-notification-close-button"
                minimalStyle
                icon={IconUtils.getIconDefinition('Icomoon', 'cross2')}
                onClick={beginDismiss}
              />
            )}
          </div>

          {timestampString && <p>{timestampString}</p>}

          {typeof contentNode === 'string' || typeof contentNode === 'number' ? <p>{contentNode}</p> : contentNode}

          {children}
        </div>
      </div>
    );
  }
);

ToastNotification.defaultProps = {
  allowManualDismiss: true,
};

export interface IToastNotificationContainerProps {
  /** the toasts to render inside this component */
  toasts?: IToastNotificationProps[];
}

/** A container which will render toasts passed in through props or toasts available from the ToastContext dispatched from useToastDispatch */
export const ToastNotificationContainer = React.forwardRef<HTMLDivElement, IToastNotificationContainerProps>(
  ({ toasts }, ref) => {
    const { toasts: contextToasts } = useToasts();
    const combinedToasts = React.useMemo(() => [...(contextToasts || []), ...(toasts || [])], [contextToasts, toasts]);

    const splitToasts = React.useMemo(
      () => arrayToArrayDictionary(combinedToasts, toast => toast.position!),
      [combinedToasts]
    );

    if (!combinedToasts.length) {
      return null;
    }

    return (
      <div className="arm-toast-notification-container" ref={ref}>
        <div className="arm-toast-notification-container-left">
          <div className="arm-toast-notification-toasts arm-toast-notification-toasts-top">
            {!!splitToasts['top-left']?.length &&
              splitToasts['top-left'].map(toast => <ToastNotification {...toast} key={contentDependency(toast)} />)}
          </div>
          <div className="arm-toast-notification-toasts arm-toast-notification-toasts-bottom">
            {!!splitToasts['bottom-left']?.length &&
              splitToasts['bottom-left'].map(toast => <ToastNotification {...toast} key={contentDependency(toast)} />)}
          </div>
        </div>
        <div className="arm-toast-notification-container-right">
          <div className="arm-toast-notification-toasts arm-toast-notification-toasts-top">
            {!!splitToasts['top-right']?.length &&
              splitToasts['top-right'].map(toast => <ToastNotification {...toast} key={contentDependency(toast)} />)}
          </div>
          <div className="arm-toast-notification-toasts arm-toast-notification-toasts-bottom">
            {!!splitToasts['bottom-right']?.length &&
              splitToasts['bottom-right'].map(toast => <ToastNotification {...toast} key={contentDependency(toast)} />)}
          </div>
        </div>
      </div>
    );
  }
);
