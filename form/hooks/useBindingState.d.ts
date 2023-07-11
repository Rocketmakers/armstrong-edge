import type { IBindingProps, IUseBindingStateOverrides, UseBindingStateReturn } from '../types';
/**
 * Tool for unwrapping a bind prop into a getter, setter, and set of tools/elements to render
 * @param bind The incoming bind prop on a custom form components
 * @param overrides Optional overrides to support native getters/setters and validation data passed through props
 * @returns A tuple containing a getter/setter and a set of tools for interacting with bind state
 */
export declare function useBindingState<TData>(bind?: IBindingProps<TData>, overrides?: IUseBindingStateOverrides<TData>): UseBindingStateReturn<TData>;
