import * as React from 'react';
import { IBindingProps } from '../../hooks/form';
import { IconSet, IIcon } from '../icon';
export interface ICharacterLimitProps {
    /**  prop for binding to an Armstrong form binder (see forms documentation) */
    bind: IBindingProps<string>;
    /** the current value of the string to count */
    value?: string;
    /** the character limit for the bound input */
    limit: number;
    /** the limit should be enforced by the bind in this component - by default you will have to handle this yourself */
    shouldEnforce?: boolean;
    /** CSS className property */
    className?: string;
    /** icon to render if error */
    exceedsIcon?: IIcon<IconSet>;
}
/** Render a character limit from a bound value, showing as an error if the user  */
export declare const CharacterLimit: React.FC<ICharacterLimitProps>;
