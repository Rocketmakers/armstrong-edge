import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { ButtonInner, IButtonCoreProps } from '../button/button.component';
import { ILinkProps, Link } from '../link/link.component';
import { ValidationErrors } from '../validationErrors/validationErrors.component';

export type ILinkButtonProps<TLinkProps> = IButtonCoreProps & ILinkProps<TLinkProps>;

export const LinkButton = React.forwardRef(
  <TLinkProps, TRef>(props: React.PropsWithChildren<ILinkButtonProps<TLinkProps>>, ref: TRef) => {
    const { className, disabled, minimalStyle, validationErrorMessages, error, errorIcon, pending, to, ...rootElementProps } = props;

    const shouldShowErrorIcon = !!validationErrorMessages?.length || error;

    return (
      <>
        <Link
          data-pending={pending}
          data-disabled={disabled || pending}
          data-error={shouldShowErrorIcon}
          {...rootElementProps}
          to={to}
          className={ClassNames.concat(minimalStyle ? 'arm-button-minimal' : 'arm-button', 'arm-link-button', className)}
          ref={ref as any}
        >
          <ButtonInner {...props} />
        </Link>

        {!!validationErrorMessages?.length && <ValidationErrors validationErrors={validationErrorMessages} icon={errorIcon} />}
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TLinkProps, TRef>(props: ILinkButtonProps<TLinkProps> & React.RefAttributes<TRef>) => ReturnType<React.FC>) & {
  defaultProps?: Partial<ILinkButtonProps<any>>;
};
