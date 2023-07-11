import * as React from 'react';
import { FormValidationMode, IBindingProps } from '../../form';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, NullOrUndefined } from '../../types';
export interface ICharacterLimitProps<TBind extends NullOrUndefined<string>> extends Omit<React.RefAttributes<HTMLDivElement>, 'ref'> {
    /**  prop for binding to an Armstrong form binder (see forms documentation) */
    bind: IBindingProps<TBind>;
    /** the current value of the string to count */
    value?: TBind;
    /** the character limit for the bound input */
    limit: number;
    /** the limit should be enforced by the bind in this component - by default you will have to handle this yourself */
    shouldEnforce?: boolean;
    /** CSS className property */
    className?: string;
    /** the icon to use for the validation errors */
    validationErrorIcon?: JSX.Element;
    /** (Optional) Class name for the validation errors */
    validationErrorsClassName?: string;
    /** (Optional) Title for the validation errors */
    validationErrorsTitle?: string;
    /** how to render the validation errors */
    validationMode?: FormValidationMode;
}
/** Render a character limit from a bound value, showing as an error if the user  */
export declare const CharacterLimit: (<TBind extends NullOrUndefined<string>>(props: ArmstrongFCProps<ICharacterLimitProps<TBind>, HTMLDivElement>) => ArmstrongFCReturn) & ArmstrongFCExtensions<ICharacterLimitProps<NullOrUndefined<string>>>;
