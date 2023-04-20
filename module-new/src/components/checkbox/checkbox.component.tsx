import { CheckboxProps, Indicator, Root } from '@radix-ui/react-checkbox';
import * as React from 'react';

import { IBindingProps, useBindingState } from '../../hooks/form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config';
import { Label } from '../label/label.component';
import { ValidationErrors } from '../validationErrors/validationErrors.component';

import './checkbox.theme.css';

type BindType = NullOrUndefined<boolean | 'indeterminate'>;

export interface ICheckboxProps<TData extends BindType>
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'type' | 'checked'> {
  /** An IBindingProps<TData> object to bind the checkbox input to a form. (Optional) */
  bind?: IBindingProps<TData>;

  /** A TData value representing the initial checked state of the checkbox. This can be true, false, or 'indeterminate'. (Optional) */
  checked?: TData;

  /** A custom className to style the checkbox container. (Optional) */
  className?: string;

  /** A custom JSX.Element for the indeterminate state indicator. (Optional) */
  customIndeterminateIndicator?: JSX.Element;

  /** A custom JSX.Element for the checked indicator. (Optional) */
  customIndicator?: JSX.Element;

  /** A string representing the direction of the label relative to the checkbox. Default value is 'horizontal'. (Optional) */
  direction?: 'vertical' | 'horizontal';

  /** A boolean flag to disable the checkbox input. (Optional) */
  disabled?: boolean;

  /** A React.ReactNode to display a label for the checkbox input. (Optional) */
  label?: React.ReactNode;

  /** Class name for the label component */
  labelClassName?: string;

  /** A callback function (newValue: TData) => void to handle state when 'checked' is changed. (Optional) */
  onCheckedChange?: (newValue: TData) => void;

  /** A string to set a custom data-testid attribute for the checkbox container. (Optional) */
  testId?: string;

  /** A boolean flag to automatically scroll validation error messages into view. (Optional) */
  scrollValidationErrorsIntoView?: boolean;
}

export const Checkbox = React.forwardRef(
  <TData extends BindType>(
    {
      bind,
      className,
      checked,
      customIndicator,
      customIndeterminateIndicator,
      direction,
      disabled,
      onCheckedChange,
      label,
      labelClassName,
      scrollValidationErrorsIntoView,
      testId,
      ...nativeProps
    }: ICheckboxProps<TData>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const id = React.useId();

    const [value, setValue, bindConfig] = useBindingState(bind, { onChange: onCheckedChange, value: checked });

    const onCheckedChangeInternal = React.useCallback<Required<CheckboxProps>['onCheckedChange']>(
      newValue => {
        setValue?.(newValue as TData);
      },
      [setValue]
    );

    const globals = useArmstrongConfig({
      checkboxCustomIndicator: customIndicator,
      checkboxCustomIndeterminateIndicator: customIndeterminateIndicator,
    });

    const indicator = React.useMemo(() => {
      switch (value) {
        case 'indeterminate':
          return globals.checkboxCustomIndeterminateIndicator;
        default:
          return globals.checkboxCustomIndicator;
      }
    }, [value, globals.checkboxCustomIndicator, globals.checkboxCustomIndeterminateIndicator]);

    return (
      <>
        <div
          className={concat('arm-checkbox-container', className)}
          data-disabled={disabled}
          data-direction={direction}
          data-testid={testId}
          {...nativeProps}
        >
          <Root
            className="arm-checkbox"
            disabled={disabled}
            id={id}
            checked={value ?? undefined}
            onCheckedChange={onCheckedChangeInternal}
            ref={ref}
          >
            <Indicator className="arm-checkbox-indicator" asChild>
              {indicator}
            </Indicator>
          </Root>
          {label && (
            <Label className={concat('arm-checkbox-label', labelClassName)} data-direction={direction} htmlFor={id}>
              {label}
            </Label>
          )}
        </div>
        {!!bindConfig.validationErrorMessages?.length && bindConfig.shouldShowValidationErrorMessage && (
          <ValidationErrors
            validationErrors={bindConfig.validationErrorMessages}
            validationMode={bindConfig.validationMode}
            scrollIntoView={scrollValidationErrorsIntoView}
          />
        )}
      </>
    );
  }
) as (<TBind extends NullOrUndefined<boolean>>(
  props: ArmstrongFCProps<ICheckboxProps<TBind>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ICheckboxProps<NullOrUndefined<boolean>>>;

Checkbox.defaultProps = {
  direction: 'horizontal',
};

Checkbox.displayName = 'Checkbox';
