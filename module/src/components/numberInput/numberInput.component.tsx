import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { IInputProps } from '../input/input.component';
import { InputWrapper } from '../inputWrapper';
import { useMyValidationErrorMessages } from '../validationErrors';

export const NumberInput = React.forwardRef<HTMLInputElement, Omit<IInputProps<number>, 'type'>>(
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
      ...nativeProps
    },
    ref
  ) => {
    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);

        const currentValue = event.currentTarget.valueAsNumber;

        if (bind) {
          const formattedValue = bind.bindConfig?.format?.toData?.(currentValue) || currentValue;
          bind.setValue(formattedValue);
        }
      },
      [bind, onChange]
    );

    const allValidationErrorMessages = useMyValidationErrorMessages(bind, validationErrorMessages);

    return (
      <InputWrapper
        className={ClassNames.concat(className, 'arm-input-base')}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        leftOverlay={leftOverlay}
        rightOverlay={rightOverlay}
        validationErrorMessages={allValidationErrorMessages}
        errorIcon={validationErrorIcon || bind?.formConfig?.validationErrorIcon}
        validationMode={validationMode || bind?.formConfig?.validationMode}
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
          value={bind?.bindConfig?.format?.fromData?.(bind?.value) ?? bind?.value ?? value}
          disabled={disabled}
          type="number"
        />
      </InputWrapper>
    );
  }
);
