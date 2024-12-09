import { NullOrUndefined } from '../../types';
import { ITextInputProps } from '../input';

/** Type denoting the definition of an individual code input */
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
  /** How many characters should the input support */
  length: number;
}

/**
 * Can be a number representing the length of an input, I.E [1,1,1]
 * Can be a string representing a piece of text inbetween inputs I.E. [1,1,'-',1,1]
 * Can be an object representing an input with some properties
 */
export type CodeInputPartDefinition<TBind extends NullOrUndefined<string>> = ICodeInputInput<TBind> | string | number;
