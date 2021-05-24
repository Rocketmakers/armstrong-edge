import * as React from 'react';

import { IBindingProps } from '../../hooks/form/form.types';
import { bindInputChangeEvent } from '../../hooks/form/form.utils';
import { ClassUtils } from '../../utils/classNames';
import { InputWrapper } from '../inputWrapper/inputWrapper.component';

export interface ITextAreaInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  bind?: IBindingProps<string>;
}

export const TextAreaInput: React.FC<ITextAreaInputProps> = ({ bind, onChange, value, className, ...nativeProps }) => {
  const onChangeEvent = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      return bindInputChangeEvent(event, bind, onChange);
    },
    [bind, onChange]
  );

  return (
    <InputWrapper className={ClassUtils.concat('arm-text-area-input', className)}>
      <textarea {...nativeProps} onChange={onChangeEvent} value={bind?.value ?? value ?? ''} />
    </InputWrapper>
  );
};

TextAreaInput.defaultProps = {};
