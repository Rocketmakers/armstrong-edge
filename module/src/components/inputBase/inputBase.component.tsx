import * as React from 'react';

import { IBindingProps } from '../../hooks/form/form.types';
import { bindInputChangeEvent } from '../../hooks/form/form.utils';
import { ClassUtils } from '../../utils/classNames';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper/inputWrapper.component';

export interface IInputBaseProps<TValue>
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    IInputWrapperProps {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TValue>;
}

/** A component which wraps up a native input element with some binding logic and some common logic for components which only contain a single input element. */

export const InputBase = React.forwardRef<HTMLInputElement, IInputBaseProps<any>>(
  ({ bind, onChange, value, className, leftIcon, rightIcon, leftOverlay, rightOverlay, ...nativeProps }, ref) => {
    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        return bindInputChangeEvent(event, bind, onChange);
      },
      [bind, onChange]
    );

    return (
      <InputWrapper
        className={ClassUtils.concat(className, 'arm-input-base')}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        leftOverlay={leftOverlay}
        rightOverlay={rightOverlay}
      >
        <input ref={ref} className={'arm-input-base-input'} {...nativeProps} onChange={onChangeEvent} value={bind?.value ?? value ?? ''} />
      </InputWrapper>
    );
  }
);
