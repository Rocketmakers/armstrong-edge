import * as React from 'react';

import { IBindingProps } from '../hooks/form/form.types';
import { bindInputChangeEvent } from '../hooks/form/form.utils';
import { ClassUtils } from '../utils/classNames';
import { InputWrapper } from './inputWrapper.component';

export interface IInputBaseProps<TValue> extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  bind?: IBindingProps<TValue>;
}

export const InputBase = React.forwardRef<HTMLInputElement, IInputBaseProps<any>>(({ bind, onChange, value, className, ...nativeProps }, ref) => {
  const onChangeEvent = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      return bindInputChangeEvent(event, bind, onChange);
    },
    [bind, onChange]
  );

  return (
    <InputWrapper className={ClassUtils.concat(className, 'arm-input-base')}>
      <input ref={ref} className={'arm-input-base-input'} {...nativeProps} onChange={onChangeEvent} value={bind?.value ?? value ?? ''} />
    </InputWrapper>
  );
});
