import type { IBindingProps, ValidationMessage } from '../../form';
/** For internal component use - combine validation errors from a prop with those from a bind */
export declare function useMyValidationErrorMessages<TData>(bind?: IBindingProps<TData>, validationErrorMessages?: ValidationMessage[]): ValidationMessage[];
