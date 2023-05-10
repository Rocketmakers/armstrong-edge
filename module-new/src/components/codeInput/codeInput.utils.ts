import { NullOrUndefined } from '../../types';
import { ITextInputProps } from '../input';

/**
 * Can be a number representing the length of an input, I.E [1,1,1]
 * Can be a string representing a piece of text inbetween inputs I.E. [1,1,'-',1,1]
 * Can be an object representing an input with some properties
 */
export type CodeInputPartDefinition<TBind extends NullOrUndefined<string>> = ICodeInputInput<TBind> | string | number;

export const getLengthFromPart = <T extends NullOrUndefined<string>>(part: CodeInputPartDefinition<T>) => {
  if (typeof part === 'number') {
    return part;
  }
  if (typeof part === 'string') {
    return 0;
  }
  return part.length;
};

export interface ICodeInputInput<TBind extends NullOrUndefined<string>>
  extends Omit<
    ITextInputProps<TBind>,
    | 'onChange'
    | 'value'
    | 'delay'
    | 'onValueChange'
    | 'validationErrorMessages'
    | 'validationMode'
    | 'ref'
    | 'maxLength'
    | 'onKeyDown'
    | 'bind'
  > {
  length: number;
}
