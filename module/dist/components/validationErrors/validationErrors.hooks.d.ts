import { IBindingProps } from '../../hooks/form';
/** For internal component use - combine validation errors from a prop with those from a bind */
export declare function useMyValidationErrorMessages(bind?: IBindingProps<any>, validationErrorMessages?: string[]): string[];
