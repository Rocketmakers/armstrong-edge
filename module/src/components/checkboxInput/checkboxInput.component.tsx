import { CheckboxProps, Indicator, Root } from '@radix-ui/react-checkbox';
import * as React from 'react';

import { IBindingProps, useBindingState } from '../../hooks/form';
import { NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { IcomoonIcon } from '../icon';
import { ValidationErrors } from '../validationErrors';

type BindType = NullOrUndefined<boolean | 'indeterminate'>;

interface IArmstrongCheckboxInterface<TData extends BindType>
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

  /** A callback function (newValue: TData) => void to handle state when 'checked' is changed. (Optional) */
  onCheckedChange?: (newValue: TData) => void;

  /** A string to set a custom data-testid attribute for the checkbox container. (Optional) */
  testId?: string;

  /** A boolean flag to automatically scroll validation error messages into view. (Optional) */
  scrollValidationErrorsIntoView?: boolean;
}

export const CheckboxInput = React.forwardRef(
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
      testId,
      scrollValidationErrorsIntoView,
      ...nativeProps
    }: IArmstrongCheckboxInterface<TData>,
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

    const indicator = React.useMemo(() => {
      switch (value) {
        case 'indeterminate':
          return customIndeterminateIndicator ?? <IcomoonIcon icon="minus2" />;
        default:
          return customIndicator ?? <IcomoonIcon icon="checkmark3" />;
      }
    }, [value, customIndicator, customIndeterminateIndicator]);

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
            <label className="arm-checkbox-label" data-direction={direction} htmlFor={id}>
              {label}
            </label>
          )}
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
);

CheckboxInput.defaultProps = {
  direction: 'horizontal',
};
