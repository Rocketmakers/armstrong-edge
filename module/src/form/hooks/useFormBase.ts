/*
 * useFormBase
 * --------------------------------------
 * Base React hook for form binding
 * NOTE: This hook shouldn't be used by consuming apps, it's used by `useForm` and `useChildForm`
 */
import * as React from 'react';

import { useContentMemo } from '../../hooks/useContentMemo';
import type {
  BindingTools,
  FormDispatcher,
  HookReturn,
  IBindConfig,
  IFormConfig,
  IValidationError,
  KeyChain,
  TouchedDispatcher,
  TouchedState,
  ValidationDispatcher,
  ValidationMessage,
} from '../types';
import { isArrayValue, keyStringFromKeyChain, valueByKeyChain } from '../utils/keyChain';
import { touchedStateForKeyChain } from '../utils/touchedState';
import { validationErrorsByKeyChain } from '../utils/validation';

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
 * @param globalTouchOverride Touch state if inherited from a child binder.
 * @param parentKeyChain The keyChain of the parent binder (passed from `useChildForm`.)
 * @returns The form state, property accessor, and associated helper methods.
 */
export const useFormBase = <TData extends object>(
  formStateLive: TData | undefined,
  formStateRef: React.MutableRefObject<TData | undefined>,
  dispatch: FormDispatcher<TData | undefined>,
  clientValidationErrors: IValidationError[],
  clientValidationDispatcher: ValidationDispatcher,
  touchedState: TouchedState,
  touchedStateRef: React.MutableRefObject<TouchedState>,
  touchedStateDispatcher: TouchedDispatcher,
  parseValidationSchema: (keyChain?: KeyChain, silent?: boolean) => boolean,
  initialDataObject?: Partial<TData>,
  formConfigObject?: IFormConfig<TData>,
  globalTouchOverride?: boolean,
  parentKeyChain?: KeyChain
): HookReturn<TData> => {
  const formConfig = useContentMemo(formConfigObject) as IFormConfig<unknown> | undefined;
  const initialData = useContentMemo(initialDataObject);

  const [isGlobalTouched, setGlobalTouched] = React.useState(globalTouchOverride ?? false);

  /**
   * For setting a new value for a target property
   */
  const set = React.useCallback(
    (keyChain: KeyChain, newValue: unknown) => {
      if (keyChain.length === 1) {
        dispatch({ type: 'set-one', propertyKey: keyChain[0], value: newValue });
      } else {
        dispatch({ type: 'set-path', keyChain, value: newValue });
      }
    },
    [dispatch]
  );

  React.useEffect(() => {
    setGlobalTouched(globalTouchOverride ?? false);
  }, [globalTouchOverride]);

  /**
   * For adding validation errors with a string key
   */
  const addValidationError = React.useCallback(
    (...errors: IValidationError[]) => {
      clientValidationDispatcher({ type: 'add-validation', errors });
    },
    [clientValidationDispatcher]
  );

  /**
   * For adding a validation error against a specific property from a keyChain.
   */
  const addValidationErrorFromKeyChain = React.useCallback(
    (keyChain: KeyChain, messages: ValidationMessage | ValidationMessage[], identifier?: string) => {
      const messageArray = Array.isArray(messages) ? messages : [messages];
      const key = keyStringFromKeyChain(keyChain, 'dots');
      addValidationError(...messageArray.map(message => ({ key, message, identifier })));
    },
    [addValidationError]
  );

  /**
   * Clears all client validation errors, optionally with specific identifiers
   */
  const clearClientValidationErrors = React.useCallback(
    (...identifiers: string[]) => {
      clientValidationDispatcher({
        type: 'clear-validation',
        identifiers: identifiers.length ? identifiers : undefined,
      });
    },
    [clientValidationDispatcher]
  );

  /**
   * For clearing all validation errors associated with a specific keyChain property
   */
  const clearValidationErrorsByKeyChain = React.useCallback(
    (keyChain: KeyChain, identifiers?: string[]) => {
      const dotKey = keyStringFromKeyChain(keyChain, 'dots');
      const bracketKey = keyStringFromKeyChain(keyChain, 'brackets');
      clientValidationDispatcher({ type: 'clear-validation', key: dotKey, identifiers });
      clientValidationDispatcher({ type: 'clear-validation', key: bracketKey, identifiers });
    },
    [clientValidationDispatcher]
  );

  /**
   * For adding an item to a target array property (will be available to array properties only.)
   */
  const add = React.useCallback(
    (keyChain: KeyChain, currentValue: unknown, newItem: unknown) => {
      if (isArrayValue(currentValue, 'formProp.add')) {
        const newValue = [...(currentValue ?? [])];
        newValue.push(newItem);
        dispatch({ type: 'set-path', keyChain, value: newValue });
      }
    },
    [dispatch]
  );

  /**
   * For removing an item from a target array property at a specific index (will be available to array properties only.)
   */
  const remove = React.useCallback(
    (keyChain: KeyChain, currentValue: unknown[], index: number) => {
      if (isArrayValue(currentValue, 'formProp.remove')) {
        const newValue = [...(currentValue ?? [])];
        newValue.splice(index, 1);
        dispatch({ type: 'set-path', keyChain, value: newValue });
      }
    },
    [dispatch]
  );

  /**
   * For inserting an item into a target array property at a specific index (will be available to array properties only.)
   */
  const insert = React.useCallback(
    (keyChain: KeyChain, currentValue: unknown[], index: number, newItem: unknown) => {
      if (isArrayValue(currentValue, 'formProp.insert')) {
        const newValue = [...(currentValue ?? [])];
        newValue.splice(index, 0, newItem);
        dispatch({ type: 'set-path', keyChain, value: newValue });
      }
    },
    [dispatch]
  );

  /**
   * For removing an item from the end of a target array property (will be available to array properties only.)
   */
  const pop = React.useCallback(
    (keyChain: KeyChain, currentValue: unknown[]) => {
      if (isArrayValue(currentValue, 'formProp.pop')) {
        const newValue = [...(currentValue ?? [])];
        newValue.pop();
        dispatch({ type: 'set-path', keyChain, value: newValue });
      }
    },
    [dispatch]
  );

  /**
   * Sets touched state for a field
   */
  const setTouched = React.useCallback(
    (keyChain: KeyChain, touched: boolean) => {
      touchedStateDispatcher({ type: 'set-touched', keyChain, touched });
    },
    [touchedStateDispatcher]
  );

  const combinedValidationErrors = React.useMemo(
    () => [...clientValidationErrors, ...(formConfig?.validationErrors ?? [])],
    [clientValidationErrors, formConfig?.validationErrors]
  );

  /**
   * For binding a target array property to a component (often an input)
   */
  const bind = React.useCallback(
    (keyChain: KeyChain, bindConfig?: IBindConfig<unknown>) => {
      const myTouchedState = touchedStateForKeyChain(touchedState, keyChain);
      const myValidationErrors = validationErrorsByKeyChain(combinedValidationErrors, keyChain);
      return {
        value: valueByKeyChain(formStateLive, keyChain),
        setValue: (newValue: unknown) => set(keyChain, newValue),
        bindConfig,
        formConfig,
        myValidationErrors,
        dispatch,
        keyChain,
        fullKeyChain: parentKeyChain ? [...parentKeyChain, ...keyChain] : keyChain,
        initialValue: valueByKeyChain(initialData, keyChain),
        addValidationError: (messages: ValidationMessage | ValidationMessage[], identifier?: string) =>
          addValidationErrorFromKeyChain(keyChain, messages, identifier),
        clearClientValidationErrors: (...identifiers: string[]) =>
          clearValidationErrorsByKeyChain(keyChain, identifiers),
        setTouched: (isTouched: boolean) => setTouched(keyChain, isTouched),
        isTouched: !!myTouchedState.length || isGlobalTouched || !!globalTouchOverride,
        myTouchedState,
        clientValidationDispatcher,
        touchedStateDispatcher,
        allTouched: isGlobalTouched,
        validate: (andSetInputToTouched = true, silent = false, validateAll = false) => {
          if (andSetInputToTouched) {
            setTouched(keyChain, true);
          }

          return parseValidationSchema(validateAll ? undefined : keyChain, silent);
        },
        isValid: !myValidationErrors.length,
        parseValidationSchema,
      };
    },
    [
      touchedState,
      combinedValidationErrors,
      formStateLive,
      formConfig,
      dispatch,
      parentKeyChain,
      initialData,
      isGlobalTouched,
      globalTouchOverride,
      clientValidationDispatcher,
      touchedStateDispatcher,
      parseValidationSchema,
      set,
      addValidationErrorFromKeyChain,
      clearValidationErrorsByKeyChain,
      setTouched,
    ]
  );

  /**
   * Validates all against the root schema
   * @param andSetGlobalTouched Should all inputs be set to "touched" before running the validator? defaults to `true`
   */
  const validate = React.useCallback(
    (andSetGlobalTouched = true, silent = false) => {
      if (andSetGlobalTouched) {
        setGlobalTouched(true);
      }
      return parseValidationSchema([], silent);
    },
    [parseValidationSchema, setGlobalTouched]
  );

  /**
   * The root method used to access a property within the form data object.
   * - Receives a strictly typed set of args for targeting nested properties within a complex data object.
   * - Can also allow targeting objects within an array by requesting an index number rather than a key.
   * - The args passed to `formProp` form a "key chain" which is then used to access properties within the data object.
   * @returns a set of tools for the property in question, notably `bind` and `set`.
   */
  const formProp = React.useCallback(
    (...keyChain: KeyChain): BindingTools<Required<TData>> => {
      const value = valueByKeyChain(formStateRef.current, keyChain);
      const myTouchedState = touchedStateForKeyChain(touchedStateRef.current, keyChain);
      const myValidationErrors = validationErrorsByKeyChain(combinedValidationErrors, keyChain);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- this is safe
      const methods: BindingTools<any> = {
        bind: (bindConfig?: IBindConfig<unknown>) => bind(keyChain, bindConfig),
        set: (newValue: unknown) => {
          set(keyChain, newValue);
          return formProp(...keyChain) as BindingTools<unknown>;
        },
        clear: () => {
          set(keyChain, undefined);
          return formProp(...keyChain) as BindingTools<unknown>;
        },
        get: () => value,
        add: (newItem: unknown) => {
          add(keyChain, value as unknown[], newItem);
          return formProp(...keyChain) as BindingTools<unknown>;
        },
        pop: () => {
          pop(keyChain, value as unknown[]);
          return formProp(...keyChain) as BindingTools<unknown>;
        },
        insert: (newItem: unknown, index: number) => {
          insert(keyChain, value as unknown[], index, newItem);
          return formProp(...keyChain) as BindingTools<unknown>;
        },
        remove: (index: number) => {
          remove(keyChain, value as unknown[], index);
          return formProp(...keyChain) as BindingTools<unknown>;
        },
        addValidationError: (messages: ValidationMessage | ValidationMessage[], identifier?: string) => {
          addValidationErrorFromKeyChain(keyChain, messages, identifier);
          return formProp(...keyChain) as BindingTools<unknown>;
        },
        clearClientValidationErrors: (...identifiers: string[]) => {
          clearValidationErrorsByKeyChain(keyChain, identifiers);
          return formProp(...keyChain) as BindingTools<unknown>;
        },
        validate: (andSetInputToTouched = true, silent = false) => {
          if (andSetInputToTouched) {
            setTouched(keyChain, true);
          }
          return parseValidationSchema(keyChain, silent);
        },
        isTouched: !!myTouchedState.length || isGlobalTouched || !!globalTouchOverride,
        setTouched: (isTouched: boolean) => {
          setTouched(keyChain, isTouched);
          return formProp(...keyChain) as BindingTools<unknown>;
        },
        isValid: !myValidationErrors.length,
      };
      return methods as BindingTools<Required<TData>>;
    },
    [
      formStateRef,
      touchedStateRef,
      isGlobalTouched,
      globalTouchOverride,
      combinedValidationErrors,
      bind,
      set,
      add,
      pop,
      insert,
      remove,
      addValidationErrorFromKeyChain,
      clearValidationErrorsByKeyChain,
      parseValidationSchema,
      setTouched,
    ]
  );

  /**
   * A simple getter to return the latest form data.
   */
  const getFormData = React.useCallback(() => {
    return formStateRef.current;
  }, [formStateRef]);

  /**
   * Resets form data to it's latest "initial" state.
   */
  const resetFormData = React.useCallback(() => {
    dispatch({ type: 'set-all', data: initialData });
  }, [initialData, dispatch]);

  /**
   * Sets all form data to a new object value.
   */
  const setFormData = React.useCallback(
    (newFormData: TData) => {
      return dispatch({ type: 'set-all', data: newFormData });
    },
    [dispatch]
  );

  /**
   * Marks all controls as "untouched" essentially resetting the form in terms of user interaction
   */
  const resetTouchedState = React.useCallback(() => {
    setGlobalTouched(false);
    touchedStateDispatcher({ type: 'reset-touched' });
  }, [touchedStateDispatcher]);

  return {
    formState: formStateLive,
    formProp,
    resetFormData,
    getFormData,
    setFormData,
    clearClientValidationErrors,
    addValidationError,
    validate,
    touchAll: () => setGlobalTouched(true),
    allTouched: isGlobalTouched,
    isValid: !clientValidationErrors.length && !formConfig?.validationErrors?.length,
    resetTouchedState,
  };
};
