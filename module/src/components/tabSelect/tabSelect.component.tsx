import * as React from 'react';

import { IBindingProps, useBindingTools } from '../../hooks/form';
import { ArmstrongId } from '../../types/core';
import { ClassNames } from '../../utils/classNames';
import { IInputWrapperProps } from '../inputWrapper';
import { IStatusWrapperProps, StatusWrapper } from '../statusWrapper';
import { ITabControlProps, TabControl } from '../tabControl';
import { ValidationErrors } from '../validationErrors';

export interface ITabSelectProps<Id extends ArmstrongId>
  extends Omit<ITabControlProps<Id>, 'currentTab' | 'onTabChange'>,
    IStatusWrapperProps,
    Pick<IInputWrapperProps, 'validationErrorMessages' | 'validationMode' | 'scrollValidationErrorsIntoView'> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<Id>;

  /** the current value of the input */
  value?: Id;

  /** the current value of the input */
  onValueChange?: (newValue: Id) => void;

  /** disable the input */
  disabled?: boolean;
}

/** A TabControl that can have its value bound to an Armstrong form */
export const TabSelect = React.forwardRef(
  <Id extends ArmstrongId>(
    {
      bind,
      value,
      onValueChange,
      className,
      pending,
      error,
      errorIcon,
      statusPosition,
      validationErrorMessages,
      validationMode,
      disabled,
      scrollValidationErrorsIntoView,
      ...tabControlProps
    }: ITabSelectProps<Id>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [boundValue, setBoundValue, bindConfig] = useBindingTools(bind, {
      onChange: onValueChange,
      value,
      validationErrorMessages,
      validationMode,
      validationErrorIcon: errorIcon,
    });

    return (
      <>
        <div
          className={ClassNames.concat('arm-tab-select', className)}
          data-pending={pending}
          data-error={error || (bindConfig.shouldShowValidationErrorIcon && !!bindConfig.validationErrorMessages.length)}
          data-disabled={disabled || pending}
        >
          <StatusWrapper
            pending={pending}
            error={error || (bindConfig.shouldShowValidationErrorIcon && !!bindConfig.validationErrorMessages.length)}
            errorIcon={bindConfig.validationErrorIcon}
            statusPosition={statusPosition}
          >
            <TabControl currentTab={boundValue!} onTabChange={disabled ? undefined : setBoundValue} {...tabControlProps} ref={ref} />
          </StatusWrapper>
        </div>

        {bindConfig.shouldShowValidationErrorMessage && (
          <ValidationErrors
            validationErrors={bindConfig.validationErrorMessages}
            icon={bindConfig.validationErrorIcon}
            scrollIntoView={scrollValidationErrorsIntoView}
          />
        )}
      </>
    );
  }

  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<Id extends ArmstrongId>(props: React.PropsWithRef<ITabSelectProps<Id>> & React.RefAttributes<HTMLDivElement>) => ReturnType<React.FC>) & {
  defaultProps?: Partial<ITabSelectProps<any>>;
};
