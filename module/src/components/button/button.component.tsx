import * as React from 'react';

import { ValidationMessage } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { IconSet, IconUtils, IIcon } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';
import { IStatusWrapperProps, StatusWrapper } from '../statusWrapper/statusWrapper.component';
import { ValidationErrors } from '../validationErrors';

export type ButtonElementTag = 'button' | 'div';

type ButtonHTMLProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type DivHTMLProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type IButtonProps<TTag extends ButtonElementTag = 'button'> = IIconWrapperProps<IconSet, IconSet> &
  Omit<TTag extends 'button' ? ButtonHTMLProps : DivHTMLProps, 'ref'> &
  IStatusWrapperProps & {
    /** CSS className property */
    className?: string;

    /** array of validation errors to render */
    validationErrorMessages?: ValidationMessage[];

    /** the icon to use for validation errors */
    errorIcon?: IIcon<IconSet>;

    /** show a spinner and disable */
    pending?: boolean;

    /** hide the icon on the same side as the status if there is an active status - defaults to true */
    hideIconOnStatus?: boolean;

    /** disable use */
    disabled?: boolean;

    /** don't style beyond removing the default css styling */
    minimalStyle?: boolean;

    /** what tag to use for the button element - use div if nesting inside an a tag (i.e. in a <Link />) */
    elementTag?: TTag;
  };

/** Renders the inside of a button, for use in altering the tag used for the wrapper */
export const ButtonInner: React.FC<IButtonProps<any>> = ({
  validationErrorMessages,
  errorIcon,
  pending,
  error,
  leftIcon,
  rightIcon,
  children,
  statusPosition,
  hideIconOnStatus,
}) => {
  const shouldShowErrorIcon = !!validationErrorMessages?.length || error;

  const showLeftIcon = statusPosition !== 'left' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);
  const showRightIcon = statusPosition !== 'right' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);

  return (
    <IconWrapper leftIcon={showLeftIcon ? leftIcon : undefined} rightIcon={showRightIcon ? rightIcon : undefined}>
      <StatusWrapper
        pending={pending}
        errorIcon={errorIcon}
        statusPosition={statusPosition}
        error={error}
        validationErrorMessages={validationErrorMessages}
      >
        {typeof children === 'string' || typeof children === 'number' ? <span>{children}</span> : children}
      </StatusWrapper>
    </IconWrapper>
  );
};

type ButtonElementTagElement<TTag extends ButtonElementTag> = TTag extends 'button' ? HTMLButtonElement : HTMLDivElement;

// this component uses a generic to ensure that the ref is the correct type - this should be inferred from the value of the "elementTag" prop which defaults to "button"

/** Renders an HTML button element with some useful additions */
export const Button = React.forwardRef(
  <TTag extends ButtonElementTag = 'button'>(props: IButtonProps<TTag>, ref?: React.ForwardedRef<ButtonElementTagElement<TTag> | null>) => {
    const {
      className,
      disabled,
      minimalStyle,
      elementTag,
      validationErrorMessages,
      error,
      errorIcon,
      pending,
      leftIcon,
      rightIcon,
      children,
      statusPosition,
      hideIconOnStatus,
      ...nativeProps
    } = props;
    const shouldShowErrorIcon = !!validationErrorMessages?.length || error;

    const elementProps = {
      className: ClassNames.concat(minimalStyle ? 'arm-button-minimal' : 'arm-button', className),
      'data-pending': pending,
      'data-disabled': disabled || pending,
      'data-error': shouldShowErrorIcon,
      disabled: disabled || pending,
      tabIndex: disabled ? -1 : nativeProps.tabIndex,
    };

    return (
      <>
        {elementTag === 'button' && (
          // due to a typescript limitation, the elementTag === 'button' above isn't causing the conditional types to be inferred so this cast is necessary
          <button {...(nativeProps as ButtonHTMLProps)} ref={ref as React.ForwardedRef<ButtonElementTagElement<'button'>>} {...elementProps}>
            <ButtonInner {...props} />
          </button>
        )}

        {elementTag === 'div' && (
          // due to a typescript limitation, the elementTag === 'button' above isn't causing the conditional types to be inferred so this cast is necessary
          <div {...(nativeProps as DivHTMLProps)} ref={ref as React.ForwardedRef<ButtonElementTagElement<'div'>>} {...elementProps}>
            <ButtonInner {...props} />
          </div>
        )}

        {!!validationErrorMessages?.length && <ValidationErrors validationErrors={validationErrorMessages} icon={errorIcon} />}
      </>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TTag extends ButtonElementTag = 'button'>(
  props: React.PropsWithRef<IButtonProps<TTag>> & React.RefAttributes<ButtonElementTagElement<TTag>>
) => ReturnType<React.FC>) & { defaultProps?: Partial<IButtonProps<any>> };

Button.defaultProps = {
  errorIcon: IconUtils.getIconDefinition('Icomoon', 'warning'),
  statusPosition: 'right',
  hideIconOnStatus: true,
  elementTag: 'button',
};
