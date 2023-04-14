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
  bind?: IBindingProps<TData>;
  checked?: TData;
  className?: string;
  customIndeterminateIndicator?: JSX.Element;
  customIndicator?: JSX.Element;
  direction?: string;
  disabled?: boolean;
  label?: React.ReactNode;
  onCheckedChange?: (newValue: TData) => void;
  testId?: string;
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
