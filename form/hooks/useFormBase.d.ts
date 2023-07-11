import * as React from 'react';
import type { FormDispatcher, HookReturn, IFormConfig, IValidationError, KeyChain, TouchedDispatcher, TouchedState, ValidationDispatcher } from '../types';
/**
 * The base hook used by both of the `useForm` hooks.
 * @param formStateLive The live form state object from the reducer.
 * @param formStateRef The form state object ref (this allows "instant access" to latest form data for method chaining.)
 * @param dispatch The dispatcher for sending form state modification actions.
 * @param clientValidationErrors The client validation error state
 * @param clientValidationDispatcher The dispatcher for adding/clearing client validation errors
 * @param touchedState The array of keys that have been marked as touched
 * @param touchedStateRef The array of keys that have been marked as touched as a ref (this allows "instant access" to latest form data for method chaining.)
 * @param touchedStateDispatcher The dispatcher to mark a field as touched
 * @param parseValidationSchema The method to trigger validation against the validation schema
 * @param initialDataObject The initial data as passed to the `useForm` hook.
 * @param formConfigObject The configuration as passed to the `useForm` hook.
 * @returns The form state, property accessor, and associated helper methods.
 */
export declare const useFormBase: <TData extends object>(formStateLive: TData | undefined, formStateRef: React.MutableRefObject<TData | undefined>, dispatch: FormDispatcher<TData | undefined>, clientValidationErrors: IValidationError[], clientValidationDispatcher: ValidationDispatcher, touchedState: TouchedState, touchedStateRef: React.MutableRefObject<TouchedState>, touchedStateDispatcher: TouchedDispatcher, parseValidationSchema: (keyChain?: KeyChain, silent?: boolean) => boolean, initialDataObject?: Partial<TData> | undefined, formConfigObject?: IFormConfig<TData> | undefined, globalTouchOverride?: boolean) => HookReturn<TData>;
