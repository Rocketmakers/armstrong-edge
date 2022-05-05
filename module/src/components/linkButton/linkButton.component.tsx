import * as React from 'react';

import { ClassNames } from '../../index';
import { ButtonInner, IButtonCoreProps, ValidationErrors } from '../index';
import { ILinkProps, Link } from '../link';

export type ILinkButtonProps<T extends Record<string, any>> = IButtonCoreProps & ILinkProps<T>;

export const LinkButton = <T extends Record<string, any>>(props: React.PropsWithChildren<ILinkButtonProps<T>>) => {
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
      >
        <ButtonInner {...props} />
      </Link>

      {!!validationErrorMessages?.length && <ValidationErrors validationErrors={validationErrorMessages} icon={errorIcon} />}
    </>
  );
};
