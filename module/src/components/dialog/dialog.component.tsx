import * as React from 'react';

import { useGeneratedId } from '../../hooks';
import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { IconButton } from '../iconButton';
import { IModalProps, Modal } from '../modal';

export interface IDialogProps extends IModalProps {
  /** (string) the value to render as the title, will have necessary aria tag added */
  title?: string;

  /** (IIcon) the icon to render by the title */
  titleIcon?: IIcon<IconSet>;

  /** (IIcon) the icon to render as the close button */
  closeButtonIcon?: IIcon<IconSet>;
}

/** Extends the Modal component (see docs for modal) with some extra features and styling for simple dialog popups */

export const Dialog = React.forwardRef<HTMLDivElement, IDialogProps>(
  ({ children, className, wrapperClassName, id: htmlId, title, onOpenChange, closeButtonIcon, titleIcon, ...modalProps }, ref) => {
    const id = useGeneratedId(htmlId);

    const titleId = `${id}_label`;

    const onClickClose = React.useCallback(() => {
      onOpenChange(false);
    }, [onOpenChange]);

    return (
      <Modal
        className={ClassNames.concat('arm-dialog', className)}
        wrapperClassName={ClassNames.concat('arm-dialog-wrapper', wrapperClassName)}
        id={id}
        aria-labelledby={title && `${id}_label`}
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

            <IconButton className="arm-dialog-close-button" icon={closeButtonIcon!} iconOnly onClick={onClickClose} />
          </div>
        ) : (
          <IconButton className="arm-dialog-close-button" icon={closeButtonIcon!} iconOnly onClick={onClickClose} />
        )}
        <div className="arm-dialog-inner">{children}</div>
      </Modal>
    );
  }
);

Dialog.defaultProps = {
  closeButtonIcon: IconUtils.getIconDefinition('Icomoon', 'cross2'),
};