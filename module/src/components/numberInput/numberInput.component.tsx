import * as React from 'react';

import { Form } from '../../hooks';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps, NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { IInputProps } from '../input/input.component';
import { InputWrapper } from '../inputWrapper';

/** Wrap up a text input with type=num which binds to a number */
export const NumberInput = React.forwardRef(
  <TBind extends NullOrUndefined<number>>(
    {
      bind,
      onChange,
      value,
      className,
      leftIcon,
      rightIcon,
      leftOverlay,
      rightOverlay,
      validationErrorMessages,
      validationMode,
      errorIcon: validationErrorIcon,
      pending,
      disableOnPending,
      disabled,
      statusPosition,
      onValueChange,
      ...nativeProps
    }: Omit<IInputProps<TBind>, 'type'>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [boundValue, setBoundValue, bindConfig] = Form.useBindingState(bind, {
      value: value !== null && value !== undefined ? (Number(value.toString()) as TBind) : undefined,
      validationErrorMessages,
      validationMode,
      validationErrorIcon,
    });

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);

        const currentValue = event.currentTarget.valueAsNumber;

        // force cast to allow undefined value to be passed up when valueAsNumber is NaN (i.e. if the input is cleared)
        // see: [this ticket](https://rocketmakers.atlassian.net/browse/ARM-187) to make form types play nicer with strict mode
        const valueToSet = (Number.isNaN(currentValue) ? undefined : currentValue ?? undefined) as number;
        setBoundValue?.(valueToSet as TBind);
        onValueChange?.(valueToSet as TBind);
      },
      [onValueChange, onChange, setBoundValue]
    );

    return (
      <InputWrapper
        className={concat(className, 'arm-input-base')}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        leftOverlay={leftOverlay}
        rightOverlay={rightOverlay}
        validationErrorMessages={bindConfig?.validationErrorMessages}
        errorIcon={bindConfig?.validationErrorIcon}
        validationMode={bindConfig?.validationMode}
        pending={pending}
        disabled={disabled}
        disableOnPending={disableOnPending}
        statusPosition={statusPosition}
      >
        <input
          {...nativeProps}
          ref={ref}
          className={'arm-input-base-input'}
          onChange={onChangeEvent}
          value={boundValue ?? (bind && '')}
          disabled={disabled}
          type="number"
        />
      </InputWrapper>
    );
  }
) as (<TBind extends NullOrUndefined<number>>(
  props: ArmstrongVFCProps<Omit<IInputProps<TBind>, 'type'>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<Omit<IInputProps<any>, 'type'>>;
