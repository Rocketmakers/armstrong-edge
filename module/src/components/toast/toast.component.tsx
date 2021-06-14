import * as React from 'react';

import { Arrays } from '../..';
import { useGeneratedId, useTemporaryState, useTimeout } from '../../hooks';
import { ClassNames } from '../../utils/classNames';
import { Dates } from '../../utils/dates';
import { Objects } from '../../utils/objects';
import { IconUtils } from '../icon';
import { IconButton } from '../iconButton';
import { useToastConfig, useToasts } from './toast.context';
import { IToastNotification } from './toast.types';

export interface IToastNotificationProps extends IToastNotification {
  /** (() => void) dismiss this toast notification */
  onDismiss: () => void;
}

export const ToastNotification: React.FC<IToastNotificationProps> = ({ onDismiss, ...toast }) => {
  const { autoDismissTime, children, content, htmlProps, timestamp, title, type, allowManualDismiss } = toast;

  const [dismissing, setDismissing] = useTemporaryState(false, 500, onDismiss);
  const beginDismiss = React.useCallback(() => setDismissing(true), []);

  const { set: setAutoDismissTimeout, clear: clearAutoDismissTimeout } = useTimeout(autoDismissTime, beginDismiss);

  React.useEffect(() => {
    setAutoDismissTimeout();
  }, []);

  const id = useGeneratedId('arm-tst_', htmlProps?.id);

  const contentNode = React.useMemo<React.ReactNode>(
    () => (typeof content === 'function' ? content({ dismiss: beginDismiss, toast }) : content),
    [content, beginDismiss, toast]
  );

  const { timestampFormatString } = useToastConfig();

  const timestampString = React.useMemo(() => timestampFormatString && Dates.dateToString(timestamp!, timestampFormatString), [timestamp]);

  return (
    <div
      {...htmlProps}
      className={ClassNames.concat('arm-toast-notification', htmlProps?.className)}
      data-type={type}
      data-dismissing={dismissing}
      onMouseEnter={clearAutoDismissTimeout}
      onMouseLeave={() => setAutoDismissTimeout()}
    >
      <div className="arm-toast-notification-inner" role="status" aria-labelledby={`${id}_title`}>
        <div className="arm-toast-notification-top">
          <p className="arm-toast-notification-title" id={`${id}_title`}>
            {title}
          </p>

          {allowManualDismiss && <IconButton iconOnly icon={IconUtils.getIconDefinition('Icomoon', 'cross2')} onClick={beginDismiss} />}
        </div>

        {timestampString && <p>{timestampString}</p>}

        {typeof contentNode === 'string' || typeof contentNode === 'number' ? <p>{contentNode}</p> : contentNode}

        {children}
      </div>
    </div>
  );
};

ToastNotification.defaultProps = {
  allowManualDismiss: true,
};

export const ToastNotificationContainer: React.FC = () => {
  const toasts = useToasts();

  const splitToasts = React.useMemo(() => {
    return Arrays.arrayToArrayDictionary(toasts, (toast) => toast.location!);
  }, [toasts]);

  if (!toasts.length) {
    return null;
  }

  return (
    <div className="arm-toast-notification-container">
      <div className="arm-toast-notification-container-left">
        <div className="arm-toast-notification-toasts arm-toast-notification-toasts-top">
          {splitToasts['top-left']?.length &&
            splitToasts['top-left'].map((toast) => <ToastNotification {...toast} key={Objects.contentDependency(toast)} />)}
        </div>
        <div className="arm-toast-notification-toasts arm-toast-notification-toasts-bottom">
          {splitToasts['bottom-left']?.length &&
            splitToasts['bottom-left'].map((toast) => <ToastNotification {...toast} key={Objects.contentDependency(toast)} />)}
        </div>
      </div>
      <div className="arm-toast-notification-container-right">
        <div className="arm-toast-notification-toasts arm-toast-notification-toasts-top">
          {splitToasts['top-right']?.length &&
            splitToasts['top-right'].map((toast) => <ToastNotification {...toast} key={Objects.contentDependency(toast)} />)}
        </div>
        <div className="arm-toast-notification-toasts arm-toast-notification-toasts-bottom">
          {splitToasts['bottom-right']?.length &&
            splitToasts['bottom-right'].map((toast) => <ToastNotification {...toast} key={Objects.contentDependency(toast)} />)}
        </div>
      </div>
    </div>
  );
};
