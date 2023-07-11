import type { IBindingProps, ValidationMessage } from '../types';
/**
 * Small utility hook to return the combined validation messages from a custom component
 * @param bind The bind prop on the custom component
 * @param validationErrorMessages An optional array of additional messages passed in on props
 * @returns A unique array of validation messages to display for the component
 */
export declare function useMyValidationErrorMessages<TData>(bind?: IBindingProps<TData>, validationErrorMessages?: ValidationMessage[]): ValidationMessage[];
