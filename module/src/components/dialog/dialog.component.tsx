import * as React from 'react';

import { concat } from '../../utils/classNames';
import { Button } from '../button';
import { getIconDefinition, Icon, IconSet, IIcon } from '../icon';
import { IModalProps, Modal } from '../modal';
import { closeModal } from '../modal/modal.utils';

export interface IDialogProps extends Omit<IModalProps, 'darkenBackground'> {
  /** the value to render as the title, will have necessary aria tag added */
  title?: string;

  /** the icon to render by the title */
  titleIcon?: IIcon<IconSet>;

  /** the icon to render as the close button */
  closeButtonIcon?: IIcon<IconSet>;
}

/**
 * Extends the Modal component (see docs for modal) with some extra features and styling for simple dialog popups
 *
 * To improve accessibility, you should manage the users focus yourself. Ensure that when a dialog is open, everything else has aria-hidden="true", that
 * focus is moved to the first element in the modal, and that focus is moved back when the modal closes
 *
 * see: https://www.w3.org/WAI/GL/wiki/Using_ARIA_role%3Ddialog_to_implement_a_modal_dialog_box
 */
export const Dialog = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IDialogProps>>(
  (
    {
      children,
      className,
      wrapperClassName,
      id: htmlId,
      title,
      onOpenChange,
      closeButtonIcon,
      titleIcon,
      onClose,
      disableClose,
      ...modalProps
    },
    ref
  ) => {
    const id = React.useId();

    const titleId = title && `${id}_label`;

    const close = React.useCallback(
      () => closeModal({ disableClose, onClose, onOpenChange }),
      [onOpenChange, disableClose, onClose]
    );

    return (
      <Modal
        {...modalProps}
        className={concat('arm-dialog', className)}
        wrapperClassName={concat('arm-dialog-wrapper', wrapperClassName)}
        darkenBackground
        id={id}
        aria-labelledby={title && titleId}
        onOpenChange={onOpenChange}
        ref={ref}
        onClose={onClose}
        disableClose={disableClose}
        role="dialog"
      >
        {!!title || !!titleIcon ? (
          <div className="arm-dialog-top">
            {titleIcon && <Icon iconSet={titleIcon.iconSet} icon={titleIcon.icon} />}

            {title && (
              <p className="arm-dialog-title" id={titleId}>
                {title}
              </p>
            )}

            <Button className="arm-dialog-close-button" onClick={close}>
              <Icon iconSet={'Icomoon'} icon={closeButtonIcon!.icon} />
            </Button>
          </div>
        ) : (
          <Button className="arm-dialog-close-button" onClick={close}>
            <Icon iconSet={'Icomoon'} icon={closeButtonIcon!.icon} />
          </Button>
        )}
        <div className="arm-dialog-inner">{children}</div>
      </Modal>
    );
  }
);

Dialog.defaultProps = {
  closeButtonIcon: getIconDefinition('Icomoon', 'cross2'),
};

Dialog.displayName = 'Dialog';
