import * as React from 'react';

import { ArmstrongId, DataAttributes, Form, IArmstrongExtendedOption } from '../..';
import { useOverridableState } from '../../hooks';
import { IBindingProps } from '../../hooks/form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { IInputWrapperProps } from '../inputWrapper';
import { OptionContent } from '../optionContent';
import { Status } from '../status';
import { ValidationErrors } from '../validationErrors';

import './checkboxInput.basic.scss';

export interface ICheckboxInputProps<TBind extends NullOrUndefined<boolean>>
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'type' | 'checked'>,
    Pick<
      IInputWrapperProps,
      | 'scrollValidationErrorsIntoView'
      | 'validationMode'
      | 'errorIcon'
      | 'disabled'
      | 'pending'
      | 'error'
      | 'validationErrorMessages'
      | 'className'
    >,
    Pick<IArmstrongExtendedOption<ArmstrongId>, 'name' | 'leftIcon' | 'rightIcon'> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TBind>;

  /** icon to render on the input when checked */
  checkedIcon?: IIcon<IconSet>;

  /** icon to render on the input when not checked */
  uncheckedIcon?: IIcon<IconSet>;

  /** current checked status of input */
  checked?: TBind;

  /** fired when the value changes */
  onValueChange?: (newValue: TBind) => void;

  /** props to spread onto the input element */
  inputProps?: Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange' | 'type' | 'ref' | 'checked'
  > &
    DataAttributes;

  /** the direction for the content to flow */
  direction?: 'vertical' | 'horizontal';

  /** should hide the checkbox itself, showing only the label, allowing you to handle visualising the state of the input yourself */
  hideCheckbox?: boolean;

  /** JSX to render as the label - replaces name, can take a function which receives the active state of the option and returns the JSX to render */
  content?: IArmstrongExtendedOption<ArmstrongId>['content'];
}

/** Render a checkbox that uses DOM elements allow for easier styling */
export const CheckboxInput = React.forwardRef(
  <TBind extends NullOrUndefined<boolean>>(
    {
      bind,
      validationErrorMessages,
      validationMode,
      className,
      errorIcon,
      error,
      pending,
      disabled,
      checked,
      onChange,
      checkedIcon,
      content,
      uncheckedIcon,
      leftIcon,
      rightIcon,
      scrollValidationErrorsIntoView,
      onValueChange,
      inputProps,
      direction,
      name,
      hideCheckbox,
      ...nativeProps
    }: ICheckboxInputProps<TBind>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [boundValue, setBoundValue, bindConfig] = Form.useBindingState(bind, {
      value: checked as TBind,
      validationErrorMessages,
      validationErrorIcon: errorIcon,
      validationMode,
      onChange: onValueChange,
    });

    // use an overridable internal state so it can be used without a binding
    const [isChecked, setIsChecked] = useOverridableState((checked ?? false) as TBind, boundValue, setBoundValue);

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.currentTarget.checked as TBind);
        onChange?.(event);
      },
      [bind, onChange]
    );

    return (
      <>
        <div
          className={concat('arm-input', 'arm-checkbox-input', className)}
          data-disabled={disabled || pending}
          data-error={error || !!validationErrorMessages?.length}
          data-checked={isChecked}
          data-direction={direction}
          {...nativeProps}
        >
          <input
            className="arm-checkbox-input-checkbox-input"
            onChange={onChangeEvent}
            type="checkbox"
            ref={ref}
            checked={isChecked ?? undefined}
            {...inputProps}
          />

          <label>
            {!hideCheckbox && (
              <div className="arm-checkbox-input-checkbox">
                {checkedIcon && (
                  <Icon
                    className="arm-checkbox-input-checked-icon"
                    iconSet={checkedIcon.iconSet}
                    icon={checkedIcon.icon}
                  />
                )}
                {uncheckedIcon && (
                  <Icon
                    className="arm-checkbox-input-unchecked-icon"
                    iconSet={uncheckedIcon.iconSet}
                    icon={uncheckedIcon.icon}
                  />
                )}
              </div>
            )}

            <OptionContent
              content={content}
              name={name}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              isActive={isChecked ?? undefined}
            />

            <Status
              error={
                bindConfig.shouldShowValidationErrorIcon && (!!bindConfig.validationErrorMessages?.length || error)
              }
              pending={pending}
              errorIcon={bindConfig.validationErrorIcon}
            />
          </label>
        </div>

        {!!bindConfig.validationErrorMessages?.length && bindConfig.shouldShowValidationErrorMessage && (
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
) as (<TBind extends NullOrUndefined<boolean>>(
  props: ArmstrongFCProps<ICheckboxInputProps<TBind>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ICheckboxInputProps<any>>;

CheckboxInput.defaultProps = {
  checkedIcon: IconUtils.getIconDefinition('Icomoon', 'checkmark3'),
  validationMode: 'both',
  direction: 'horizontal',
};
