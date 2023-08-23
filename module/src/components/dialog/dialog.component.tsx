import * as RadixDialog from '@radix-ui/react-dialog';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { useCompareValues } from '../../hooks/useCompareValues';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn } from '../../types';
import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config';

import './dialog.theme.css';

/** Dialog component props */
export interface IDialogProps<TData = unknown> extends Omit<React.RefAttributes<HTMLDivElement>, 'ref'> {
  /** Optional title to show at the top of the dialog in an H2 tag */
  title?: React.ReactNode;
  /** Optional description to show in the body of the dialog in a P tag */
  description?: React.ReactNode;
  /** Icon to use as the close button. Send `false` to hide the close button entirely */
  closeButtonIcon?: JSX.Element | false;
  /** Bool denoting whether the dialog is open or closed - for state controlled dialogs */
  open?: boolean;
  /** Function called when the dialog is opened/closed - for state controlled dialogs */
  onOpenChange?: (open: boolean) => void;
  /** Optional CSS class for the dialog component */
  className?: string;
  /** Optional CSS class for the dialog overlay */
  overlayClassName?: string;
  /** Optional Data to pass into the dialog. Data will be returned from the async dialog functions allowing for reusable form based dialogs */
  data?: TData;
  /** Function called when the dialog is closed. Don't use for state control, only for side effects. `onOpenChange` should be used for state control */
  onClose?: () => void;
  /** Optional test ID for the dialog */
  testId?: string;
  /** Optional time to delay closing for in MS (allows for CSS animations to complete, animate using the [data-visible] attribute) */
  delayCloseFor?: number;
}

/** String union describing the various actions that can be used to close a dialog */
export type DialogFinishAction = keyof Omit<DialogElement<unknown>, 'open'>;

/** The response type of the promise returned by the dialog `open` function  */
export interface IDialogOpenResponse<TData = unknown> {
  /** The action that caused the dialog to close */
  action: DialogFinishAction;
  /** Any data sent into the dialog `data` prop */
  data?: TData;
}

/** Dialog element toolkit - these functions are assigned to the ref passed into the dialog */
export interface DialogElement<TData = unknown> {
  /** Opens the dialog and returns a promise which resolves when the dialog closes */
  open: () => Promise<IDialogOpenResponse<TData>>;
  /** Closes the dialog with a "close" finish action */
  close: () => void;
  /** Closes the dialog with an "ok" finish action */
  ok: () => void;
  /** Closes the dialog with a "cancel" finish action */
  cancel: () => void;
}

/**
 * Dialog component. Used to display a full-screen modal dialog to the user.
 * - Can be state controlled with `open` and `onOpenChange` props.
 * - Can be async by assigning a ref and calling the utility functions (a `useDialog` helper hook is available for this.)
 * - Supports dynamic data in async mode, so that a form can be built as a reusable async dialog.
 */
export const Dialog = React.forwardRef(
  (props: React.PropsWithChildren<IDialogProps<unknown>>, ref: React.ForwardedRef<DialogElement<unknown>>) => {
    const {
      children,
      title,
      description,
      closeButtonIcon,
      open,
      onOpenChange,
      onClose,
      className,
      data,
      overlayClassName,
      testId,
      delayCloseFor,
      ...nativeProps
    } = props;

    /** Pull globals from context */
    const globals = useArmstrongConfig({ dialogCloseButtonIcon: closeButtonIcon });

    /** Finish action state is set when the dialog is closed */
    const [finishAction, setFinishAction] = React.useState<DialogFinishAction | undefined>(open ? undefined : 'close');

    /** Store state for whether the dialog is visible */
    const [visible, setVisible] = React.useState(open);

    /** Stores a reference to the promise resolver function */
    const resolverRef =
      React.useRef<(value: IDialogOpenResponse<unknown> | PromiseLike<IDialogOpenResponse<unknown>>) => void>();

    /** Used to create prop comparisons to use as effect triggers */
    const finishActionChanged = useCompareValues(finishAction);
    const openHasChanged = useCompareValues(open);

    /** Called when the internal open/close state of the dialog changes */
    const onInnerOpenChange = React.useCallback(
      (val: boolean) => {
        setFinishAction(val ? undefined : 'close');
        if (!val && delayCloseFor) {
          setTimeout(() => {
            setVisible(false);
          }, delayCloseFor);
          return;
        }
        setVisible(val);
      },
      [delayCloseFor]
    );

    /** Exposes the DialogElement utility functions to the ref */
    React.useImperativeHandle(
      ref,
      () => ({
        open: () =>
          new Promise(res => {
            onInnerOpenChange(true);
            resolverRef.current = res;
          }),
        close: () => setFinishAction('close'),
        ok: () => setFinishAction('ok'),
        cancel: () => setFinishAction('cancel'),
      }),
      [onInnerOpenChange, setFinishAction]
    );

    /** Listens to the `finishAction` state and runs the appropriate functions */
    React.useEffect(() => {
      if (finishAction && resolverRef.current) {
        resolverRef.current({ action: finishAction, data });
        resolverRef.current = undefined;
      }
      if (finishActionChanged) {
        onOpenChange?.(!finishAction);
        if (finishAction) {
          onClose?.();
          if (delayCloseFor) {
            setTimeout(() => {
              setVisible(false);
            }, delayCloseFor);
          } else {
            setVisible(false);
          }
        }
      }
    }, [finishActionChanged, finishAction, data, onOpenChange, onClose, delayCloseFor]);

    /** Listens to changes on the incoming `open` prop for controlled dialogs, and runs the appropriate functions  */
    React.useEffect(() => {
      if (openHasChanged && open !== undefined) {
        onInnerOpenChange(open);
      }
    }, [open, onInnerOpenChange, openHasChanged]);

    return (
      <RadixDialog.Root open={visible} onOpenChange={onInnerOpenChange}>
        {globals.globalPortalTo &&
          ReactDOM.createPortal(
            <RadixDialog.Overlay
              className={concat('arm-dialog-overlay', overlayClassName)}
              data-visible={!finishAction}
            >
              <RadixDialog.Content
                className={concat('arm-dialog', className)}
                data-has-title={title ? true : undefined}
                data-testid={testId}
                data-visible={!finishAction}
                {...nativeProps}
              >
                {title && <RadixDialog.Title className="arm-dialog-title">{title}</RadixDialog.Title>}
                {description && (
                  <RadixDialog.Description className="arm-dialog-description">{description}</RadixDialog.Description>
                )}
                {children && <div className="arm-dialog-content">{children}</div>}
                {globals.dialogCloseButtonIcon !== false && (
                  <RadixDialog.Close className="arm-dialog-close" aria-label="Close">
                    {globals.dialogCloseButtonIcon}
                  </RadixDialog.Close>
                )}
              </RadixDialog.Content>
            </RadixDialog.Overlay>,
            globals.globalPortalTo
          )}
      </RadixDialog.Root>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TData>(props: ArmstrongFCProps<IDialogProps<TData>, DialogElement<TData>>) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IDialogProps<unknown>>;

Dialog.displayName = 'Dialog';
