import * as React from 'react';

import { useGeneratedId } from '../../hooks';
import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { IconButton } from '../iconButton';
import { IModalProps, Modal } from '../modal';

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
export const Dialog = React.forwardRef<HTMLDivElement, IDialogProps>(
  ({ children, className, wrapperClassName, id: htmlId, title, onOpenChange, closeButtonIcon, titleIcon, ...modalProps }, ref) => {
    const id = useGeneratedId(htmlId);

    const titleId = title && `${id}_label`;

    const onClickClose = React.useCallback(() => {
      onOpenChange?.(false);
    }, [onOpenChange]);

    return (
      <Modal
        className={ClassNames.concat('arm-dialog', className)}
        wrapperClassName={ClassNames.concat('arm-dialog-wrapper', wrapperClassName)}
        darkenBackground
        id={id}
        aria-labelledby={titleId}
        onOpenChange={onOpenChange}
        ref={ref}
        {...modalProps}
      >
        {!!title || !!titleIcon ? (
          <div className="arm-dialog-top">
            {titleIcon && <Icon iconSet={titleIcon.iconSet} icon={titleIcon.icon} />}

            {title && (
              <p className="arm-dialog-title" id={titleId}>
                {title}
              </p>
            )}

            <IconButton className="arm-dialog-close-button" icon={closeButtonIcon!} minimalStyle onClick={onClickClose} />
          </div>
        ) : (
          <IconButton className="arm-dialog-close-button" icon={closeButtonIcon!} minimalStyle onClick={onClickClose} />
        )}
        <div className="arm-dialog-inner">{children}</div>
      </Modal>
    );
  }
);

Dialog.defaultProps = {
  closeButtonIcon: IconUtils.getIconDefinition('Icomoon', 'cross2'),
};
