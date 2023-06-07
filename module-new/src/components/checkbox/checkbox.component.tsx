import { CheckboxProps, Indicator, Root } from '@radix-ui/react-checkbox';
import * as React from 'react';

import { IBindingProps, useBindingState, ValidationMessage } from '../../form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config';
import { Label } from '../label/label.component';
import { StatusWrapper } from '../statusWrapper/statusWrapper.component';
import { IValidationErrorsProps, ValidationErrors } from '../validationErrors/validationErrors.component';

import './checkbox.theme.css';

type BindType = NullOrUndefined<boolean | 'indeterminate'>;

export interface ICheckboxProps<TData extends BindType>
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'type' | 'checked'>,
    Omit<IValidationErrorsProps, 'validationErrors'> {
  /** (Optional) An IBindingProps<TData> object to bind the checkbox input to a form. */
  bind?: IBindingProps<TData>;

  /** (Optional) A TData value representing the initial checked state of the checkbox. This can be true, false, or 'indeterminate'. */
  checked?: TData;

  /** (Optional) A custom className to style the checkbox container. */
  checkboxClassName?: string;

  /** (Optional) A custom JSX.Element for the indeterminate state indicator. */
  customIndeterminateIndicator?: JSX.Element;

  /** (Optional) A custom JSX.Element for the checked indicator. */
  customIndicator?: JSX.Element;

  /** (Optional) A boolean flag to disable the checkbox input. */
  disabled?: boolean;

  /** (Optional) A React.ReactNode to display a label for the checkbox input. */
  label?: React.ReactNode;

  /** (Optional) Class name for the label component */
  labelClassName?: string;

  /** (Optional) Id to use for the checkbox. Falls back to React ID if not provided */
  labelId?: string;

  /** (Optional) A callback function (newValue: TData) => void to handle state when 'checked' is changed. */
  onCheckedChange?: (newValue: TData) => void;

  /** (Optional) Classname to use for the status wrapper */
  statusClassName?: string;

  /** (Optional) A string to set a custom data-testid attribute for the checkbox container. */
  testId?: string;

  /** (Optional) Classname for the validation errors */
  validationErrorsClassName?: string;

  /** (Optional) Can be a string or {key, element} key is necessary for animating in new messages   */
  validationErrorMessages?: ValidationMessage[];

  /** (Optional) A boolean flag to automatically scroll validation error messages into view. */
  scrollValidationErrorsIntoView?: boolean;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, ICheckboxProps<BindType>>(
  (
    {
      bind,
      checkboxClassName,
      checked,
      customIndicator,
      customIndeterminateIndicator,
      disabled,
      onCheckedChange,
      label,
      labelClassName,
      labelId,
      scrollValidationErrorsIntoView,
      statusClassName,
      testId,
      validationErrorsClassName,
      validationErrorMessages,
      ...nativeProps
    },
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const reactId = React.useId();
    const id = nativeProps.id ?? reactId;

    const globals = useArmstrongConfig({
      scrollValidationErrorsIntoView,
      checkboxCustomIndicator: customIndicator,
      checkboxCustomIndeterminateIndicator: customIndeterminateIndicator,
    });

    const [boundValue, setBoundValue, bindConfig] = useBindingState(bind, {
      value: checked,
      onChange: onCheckedChange,
      validationErrorMessages,
      validationMode: globals.validationMode,
    });

    const onCheckedChangeInternal = React.useCallback<Required<CheckboxProps>['onCheckedChange']>(
      newValue => {
        setBoundValue?.(newValue);
      },
      [setBoundValue]
    );

    const indicator = React.useMemo(() => {
      switch (boundValue) {
        case 'indeterminate':
          return globals.checkboxCustomIndeterminateIndicator;
        default:
          return globals.checkboxCustomIndicator;
      }
    }, [boundValue, globals.checkboxCustomIndicator, globals.checkboxCustomIndeterminateIndicator]);

    return (
      <StatusWrapper
        className={concat(statusClassName, 'arm-input-base')}
        validationMode={bindConfig.validationMode}
        errorIcon={bindConfig.validationErrorIcon}
      >
        <div
          className={concat('arm-checkbox-container', checkboxClassName)}
          data-disabled={disabled}
          data-testid={testId}
          {...nativeProps}
        >
          <Root
            className="arm-checkbox"
            disabled={disabled}
            id={id}
            checked={boundValue ?? undefined}
            onCheckedChange={onCheckedChangeInternal}
            ref={ref}
          >
            <Indicator className="arm-checkbox-indicator" asChild>
              {indicator}
            </Indicator>
          </Root>

          {label && (
            <Label className={concat('arm-checkbox-label', labelClassName)} data-disabled={disabled} htmlFor={id}>
              {label}
            </Label>
          )}
        </div>
        {!!bindConfig.validationErrorMessages?.length && bindConfig.shouldShowValidationErrorMessage && (
          <ValidationErrors
            className={validationErrorsClassName}
            validationMode={globals.validationMode}
            validationErrors={bindConfig.validationErrorMessages}
            scrollIntoView={globals.scrollValidationErrorsIntoView}
          />
        )}
      </StatusWrapper>
    );
  }
) as (<TBind extends NullOrUndefined<boolean>>(
  props: ArmstrongFCProps<ICheckboxProps<TBind>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ICheckboxProps<NullOrUndefined<boolean>>>;

Checkbox.displayName = 'Checkbox';
