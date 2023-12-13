/*
 * useForm
 * --------------------------------------
 * Root React hook for form binding
 */
import * as React from 'react';

import { useContentMemo } from '../../hooks/useContentMemo';
import { useDidUpdateSSRLayoutEffect } from '../../hooks/useSSRLayoutEffect';
import {
  FormDispatcher,
  HookReturn,
  IFormConfig,
  InitialDataFunction,
  IValidationError,
  KeyChain,
  TouchedDispatcher,
  TouchedState,
} from '../types';
import { dataReducer, initialDataIsCallback } from '../utils/data';
import { keyStringFromKeyChain } from '../utils/keyChain';
import { touchedStateReducer } from '../utils/touchedState';
import { clientValidationReducer, getMyZodErrors, zodFromValidationSchema } from '../utils/validation';
import { useFormBase } from './useFormBase';

/**
 * Turns a potentially complex nested object or array into a piece of live state and a set of helper tools designed to be used in a form.
 * @param initialDataProp (optional) The initial value of the form data object.
 * Can be passed as an object or a function which receives the live state and returns new state.
 * WARNING: if passing a function, it must be a callback protected by dependencies as it will be called every time it's reference updates to receive the new data.
 * @param formConfig (optional) The settings to use with the form.
 * @returns The form state, property accessor, and associated helper methods.
 */
export function useForm<TData extends object>(
  initialDataProp?: TData | InitialDataFunction<TData>,
  formConfig?: IFormConfig<TData>
): HookReturn<TData> {
  const initialData = useContentMemo(initialDataProp);

  // create state stores for values, validation errors and touched state
  const [formState, setFormState] = React.useState<TData>(
    initialDataIsCallback(initialData) ? initialData() : initialData ?? ({} as TData)
  );
  const [clientValidationErrors, clientValidationDispatcher] = React.useReducer(clientValidationReducer, []);
  const [touchedState, setTouchedState] = React.useState<TouchedState>([]);

  const formStateRef = React.useRef<TData>(formState);
  const touchedStateRef = React.useRef<TouchedState>(touchedState);

  // read initial data
  const liveInitialDataObject = React.useMemo<TData>(() => {
    return initialDataIsCallback(initialData) ? initialData(formStateRef.current) : initialData ?? ({} as TData);
  }, [initialData]);

  const liveInitialData = useContentMemo(liveInitialDataObject);

  // create manual dispatcher to keep ref up to date for chaining
  const dispatch = React.useCallback<FormDispatcher<TData | undefined>>(
    action => {
      formStateRef.current = dataReducer<TData>(formStateRef.current, action);
      setFormState(formStateRef.current);
      return formStateRef.current;
    },
    [setFormState]
  );

  // create manual touch state dispatcher to keep ref up to date for chaining
  const touchedStateDispatcher = React.useCallback<TouchedDispatcher>(
    action => {
      touchedStateRef.current = touchedStateReducer(touchedStateRef.current, action);
      setTouchedState(touchedStateRef.current);
      return touchedStateRef.current;
    },
    [setTouchedState]
  );

  // set initial data to store
  useDidUpdateSSRLayoutEffect(() => {
    dispatch({ type: 'set-all', data: liveInitialData });
  }, [liveInitialData]);

  /**
   * Transform incoming validation schema into zod compatible schema and memoize
   */
  const zodValidationSchema = React.useMemo(() => {
    const initialSchema = formConfig?.validationSchema;
    if (initialSchema) {
      const finalSchema = typeof initialSchema === 'function' ? initialSchema(formState) : initialSchema;
      return zodFromValidationSchema(finalSchema);
    }
    return undefined;
  }, [formConfig?.validationSchema, formState]);

  /**
   * Runs the Zod validation for the whole form, or optionally for a specific key chain
   */
  const parseZodSchema = React.useCallback(
    (keyChain: KeyChain = [], silent?: boolean) => {
      if (!zodValidationSchema) {
        throw new Error('No validation schema has been provided');
      }

      const keyChainString = keyChain.length ? keyStringFromKeyChain(keyChain, 'dots') : undefined;
      if (!silent) {
        clientValidationDispatcher({ type: 'clear-validation', key: keyChainString });
      }

      const results = zodValidationSchema.safeParse(formStateRef.current ?? {});

      let errors: IValidationError[] = [];

      if (!results.success) {
        errors = getMyZodErrors(results.error.errors, keyChainString);

        if (errors.length && !silent) {
          clientValidationDispatcher({ type: 'add-validation', errors });
        }
      }

      return !errors.length;
    },
    [zodValidationSchema, clientValidationDispatcher, formStateRef]
  );

  /**
   * Runs the Zod validation for the whole form, if no schema is present the default true will be returned
   */
  const parseValidationSchema = (keyChain?: KeyChain, silent?: boolean) => {
    if (zodValidationSchema) {
      return parseZodSchema(keyChain, silent);
    }

    return true;
  };

  // render base hook
  return useFormBase<TData>(
    formState,
    formStateRef,
    dispatch,
    clientValidationErrors,
    clientValidationDispatcher,
    touchedState,
    touchedStateRef,
    touchedStateDispatcher,
    parseValidationSchema,
    liveInitialData,
    formConfig
  );
}
