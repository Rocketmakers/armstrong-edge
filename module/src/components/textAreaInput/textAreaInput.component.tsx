import * as React from 'react';

import { IBindingProps } from '../../hooks/form/form.types';
import { bindInputChangeEvent } from '../../hooks/form/form.utils';
import { ClassNames } from '../../utils/classNames';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper/inputWrapper.component';

export interface ITextAreaInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
    IInputWrapperProps {
  bind?: IBindingProps<string>;
}

export const TextAreaInput: React.FC<ITextAreaInputProps> = ({
  bind,
  onChange,
  value,
  className,
  leftIcon,
  rightIcon,
  leftOverlay,
  rightOverlay,
  ...nativeProps
}) => {
  const onChangeEvent = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      return bindInputChangeEvent(event, bind, onChange);
    },
    [bind, onChange]
  );

  return (
    <InputWrapper
      className={ClassNames.concat('arm-text-area-input', className)}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      leftOverlay={leftOverlay}
      rightOverlay={rightOverlay}
    >
      <textarea {...nativeProps} onChange={onChangeEvent} value={bind?.value ?? value ?? ''} />
    </InputWrapper>
  );
};

TextAreaInput.defaultProps = {};
