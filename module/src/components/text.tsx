import * as React from 'react';
import { IBindingProps } from '../hooks/form/form.types';
import { bindInputChangeEvent } from '../hooks/form/form.utils';

interface IInputBaseProps<TValue> extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  bind?: IBindingProps<TValue>;
}

const InputBase: React.FC<IInputBaseProps<any>> = ({ bind, onChange, value, ...nativeProps }) => {
  const onChangeEvent = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      return bindInputChangeEvent(event, bind, onChange);
    },
    [bind, onChange]
  );

  return (
    <div className="armstrong-input">
      <input {...nativeProps} onChange={onChangeEvent} value={bind?.value ?? value ?? ''} />
    </div>
  );
};

export const TextInput = React.forwardRef<HTMLInputElement, Omit<IInputBaseProps<string>, 'type'>>((props, ref) => {
  return <InputBase ref={ref} type="text" {...props} />;
});
export const NumberInput = React.forwardRef<HTMLInputElement, Omit<IInputBaseProps<number>, 'type'>>((props, ref) => {
  return <InputBase ref={ref} type="number" {...props} />;
});
export const EmailInput = React.forwardRef<HTMLInputElement, Omit<IInputBaseProps<string>, 'type'>>((props, ref) => {
  return <InputBase ref={ref} type="email" {...props} />;
});
