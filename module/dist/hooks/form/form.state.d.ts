import { FormAction, IValidationError, ValidationAction } from './form.types';
/**
 * The reducer for the form state object
 * @param state The current form state.
 * @param action The action to respond to.
 * @returns The updated state.
 */
export declare function dataReducer<TData extends object>(state: TData, action: FormAction<TData, any>): TData;
export declare function validationReducer(state: IValidationError[] | undefined, action: ValidationAction): IValidationError[];
