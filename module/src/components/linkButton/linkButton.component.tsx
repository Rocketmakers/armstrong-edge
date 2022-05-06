import * as React from 'react';

import { ClassNames } from '../../index';
import { ButtonInner, IButtonCoreProps, ValidationErrors } from '../index';
import { ILinkProps, Link } from '../link';

export type ILinkButtonProps<TLinkProps extends Record<string, any>> = IButtonCoreProps & ILinkProps<TLinkProps>;

export const LinkButton = React.forwardRef(
  <TLinkProps extends Record<string, any>>(props: React.PropsWithChildren<ILinkButtonProps<TLinkProps>>, ref: any) => {
    const { className, disabled, minimalStyle, validationErrorMessages, error, errorIcon, pending, to, rootElementProps } = props;

    const shouldShowErrorIcon = !!validationErrorMessages?.length || error;

    return (
      <>
        <Link
          rootElementProps={{
            'data-pending': pending,
            'data-disabled': disabled || pending,
            'data-error': shouldShowErrorIcon,
            ...rootElementProps,
          }}
          to={to}
          className={ClassNames.concat(minimalStyle ? 'arm-button-minimal' : 'arm-button', 'arm-link-button', className)}
          ref={ref}
        >
          <ButtonInner {...props} />
        </Link>

        {!!validationErrorMessages?.length && <ValidationErrors validationErrors={validationErrorMessages} icon={errorIcon} />}
      </>
    );
  }

  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TLinkProps extends Record<string, any>>(props: ILinkButtonProps<TLinkProps> & React.RefAttributes<any>) => ReturnType<React.FC>) & {
  defaultProps?: Partial<ILinkButtonProps<any>>;
};
