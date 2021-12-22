import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { IInputProps, Input } from '../input/input.component';

export interface ITextInputProps<TBind extends string | undefined | null> extends Omit<IInputProps<TBind>, 'type'> {}

/** the type for a TextInput component which can bind to a string value or optionally a nullish value depending on the type it's given */
export type TextInputComponent = <TBind extends string | undefined | null>(
  props: React.PropsWithChildren<ITextInputProps<TBind>> & React.RefAttributes<HTMLInputElement>
) => ReturnType<React.FC> & { defaultProps?: Partial<ITextInputProps<TBind>> };

export const TextInput = React.forwardRef(
  <TBind extends string | undefined | null>({ className, ...props }: ITextInputProps<TBind>, ref: React.ForwardedRef<HTMLInputElement>) => {
    return <Input {...props} className={ClassNames.concat('arm-text-input', className)} ref={ref} type="text" />;
  }
) as TextInputComponent;

const a = () => {
  const [aa, aaa] = React.useState('');

  return <TextInput<string> value={aa} onValueChange={aaa} />;
};
