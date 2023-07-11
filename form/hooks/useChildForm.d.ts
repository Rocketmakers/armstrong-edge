import { HookReturn, IBindingProps } from '../types';
/**
 * Turns an existing set of binding props into a piece of live state and a set of helper tools designed to be used in a form.
 * @param parentBinder A set of binding props associated with a property and returned from another `useForm` hook.
 * @returns The form state, property accessor, and associated helper methods.
 */
export declare function useChildForm<TData extends object>(parentBinder?: IBindingProps<TData>): HookReturn<TData>;
