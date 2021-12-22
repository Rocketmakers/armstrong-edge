import * as React from 'react';

import { Form } from '../../hooks';
import { ClassNames } from '../../utils/classNames';
import { IInputProps } from '../input/input.component';
import { InputWrapper } from '../inputWrapper';

export interface INumberInputProps extends Omit<IInputProps<number>, 'type'> {
  value?: number;
}

/** Wrap up a text input with type=num which binds to a number */
export const NumberInput = React.forwardRef<HTMLInputElement, INumberInputProps>(
  (
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
    },
    ref
  ) => {
    const [boundValue, setBoundValue, bindConfig] = Form.useBindingTools(bind, {
      value,
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
        setBoundValue?.(valueToSet);
        onValueChange?.(valueToSet);
      },
      [onValueChange, onChange, setBoundValue]
    );

    return (
      <InputWrapper
        className={ClassNames.concat(className, 'arm-input-base')}
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
);
