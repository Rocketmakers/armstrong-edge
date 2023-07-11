import { HookReturn, IFormConfig, InitialDataFunction } from '../types';
/**
 * Turns a potentially complex nested object or array into a piece of live state and a set of helper tools designed to be used in a form.
 * @param initialDataProp (optional) The initial value of the form data object.
 * Can be passed as an object or a function which receives the live state and returns new state.
 * WARNING: if passing a function, it must be a callback protected by dependencies as it will be called every time it's reference updates to receive the new data.
 * @param formConfig (optional) The settings to use with the form.
 * @returns The form state, property accessor, and associated helper methods.
 */
export declare function useForm<TData extends object>(initialDataProp?: TData | InitialDataFunction<TData>, formConfig?: IFormConfig<TData>): HookReturn<TData>;
