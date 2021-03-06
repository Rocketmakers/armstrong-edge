/* eslint-disable no-redeclare */
/** ******************************************************
 * FORM - Hooks file.
 * Contains the `useForm` hooks
 ******************************************************* */
import * as React from 'react';

import { IconSet, IIcon } from '../../components/icon';
import { useMyValidationErrorMessages } from '../../components/validationErrors';
import { Objects } from '../../utils/objects';
import { Typescript } from '../../utils/typescript';
import { useDebounceEffect } from '../useDebounce';
import { useDidUpdateLayoutEffect } from '../useDidUpdateEffect';
import { ValidationMessage } from '.';
import { dataReducer, validationReducer } from './form.state';
import {
  BindingTools,
  FormDispatcher,
  FormPropFactory,
  FormValidationMode,
  HookReturn,
  IBindConfig,
  IBindingProps,
  IFormConfig,
  InitialDataFunction,
  IValidationError,
  KeyChain,
} from './form.types';
import {
  childKeyChainStringFromParent,
  initialDataIsCallback,
  isArrayValue,
  isBindingProps,
  validationErrorsByKeyChain,
  validationKeyStringFromKeyChain,
  valueByKeyChain,
} from './form.utils';
import { validateAll, validateKeyChainProperty } from './form.validators';

/**
 * The base hook used by both of the `useForm` hooks.
 * @param formStateLive The live form state object from the reducer.
 * @param formStateRef The form state object ref (this allows "instant access" to latest form data for method chaining.)
 * @param dispatch The dispatcher for sending form state modification actions.
 * @param initialData The initial data as passed to the `useForm` hook.
 * @param formConfig The configuration as passed to the `useForm` hook.
 * @returns The form state, property accessor, and associated helper methods.
 */
function useFormBase<TData extends object>(
  formStateLive: TData | undefined,
  formStateRef: React.MutableRefObject<TData | undefined>,
  dispatch: FormDispatcher<TData | undefined>,
  initialData?: Partial<TData>,
  formConfig?: IFormConfig<TData>
): HookReturn<TData> {
  const [clientValidationErrors, clientValidationDispatch] = React.useReducer(validationReducer, []);
  const [isValid, setIsValid] = React.useState(false);

  /**
   * For setting a new value for a target property
   */
  const set = React.useCallback(
    (keyChain: KeyChain, newValue: any) => {
      if (keyChain.length === 1) {
        dispatch({ type: 'set-one', propertyKey: keyChain[0], value: newValue });
      } else {
        dispatch({ type: 'set-path', keyChain, value: newValue });
      }
    },
    [dispatch]
  );

  /**
   * For adding validation errors with a string key
   */
  const addValidationError = React.useCallback(
    (...errors: IValidationError[]) => {
      clientValidationDispatch({ type: 'add-validation', errors });
    },
    [clientValidationDispatch]
  );

  /**
   * For adding a validation error against a specific property from a keyChain.
   */
  const addValidationErrorFromKeyChain = React.useCallback(
    (keyChain: KeyChain, messages: ValidationMessage | ValidationMessage[], identifier?: string) => {
      const messageArray = Array.isArray(messages) ? messages : [messages];
      const key = validationKeyStringFromKeyChain(keyChain, 'dots');
      addValidationError(...messageArray.map((message) => ({ key, message, identifier })));
    },
    [clientValidationDispatch]
  );

  const clearClientValidationErrors = React.useCallback(
    (...identifiers: string[]) => {
      clientValidationDispatch({ type: 'clear-validation', identifiers });
    },
    [clientValidationDispatch]
  );

  /**
   * For clearing all validation errors associated with a specific keyChain property
   */
  const clearValidationErrorsByKeyChain = React.useCallback(
    (keyChain: KeyChain, identifiers?: string[]) => {
      const dotKey = validationKeyStringFromKeyChain(keyChain, 'dots');
      const bracketKey = validationKeyStringFromKeyChain(keyChain, 'brackets');
      clientValidationDispatch({ type: 'clear-validation', key: dotKey, identifiers });
      clientValidationDispatch({ type: 'clear-validation', key: bracketKey, identifiers });
    },
    [clientValidationDispatch]
  );

  /**
   * For adding an item to a target array property (will be available to array properties only.)
   */
  const add = React.useCallback(
    (keyChain: KeyChain, currentValue: any, newItem: any) => {
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
    (keyChain: KeyChain, currentValue: any[], index: number) => {
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
    (keyChain: KeyChain, currentValue: any[], index: number, newItem: any) => {
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
    (keyChain: KeyChain, currentValue: any[]) => {
      if (isArrayValue(currentValue, 'formProp.pop')) {
        const newValue = [...(currentValue ?? [])];
        newValue.pop();
        dispatch({ type: 'set-path', keyChain, value: newValue });
      }
    },
    [dispatch]
  );

  /**
   * For binding a target array property to a component (often an input)
   */
  const bind = React.useCallback(
    (keyChain: KeyChain, bindConfig?: IBindConfig<any>) => {
      const combinedValidationErrors = [...clientValidationErrors, ...(formConfig?.validationErrors ?? [])];
      return {
        value: valueByKeyChain(formStateLive, keyChain),
        setValue: (newValue: any) => set(keyChain, newValue),
        bindConfig,
        formConfig,
        myValidationErrors: validationErrorsByKeyChain(combinedValidationErrors, keyChain),
        dispatch,
        keyChain,
        initialValue: valueByKeyChain(initialData, keyChain),
        addValidationError: (messages: ValidationMessage | ValidationMessage[], identifier?: string) =>
          addValidationErrorFromKeyChain(keyChain, messages, identifier),
        clearClientValidationErrors: (...identifiers: string[]) => clearValidationErrorsByKeyChain(keyChain, identifiers),
      };
    },
    [
      set,
      Objects.contentDependency(formConfig),
      dispatch,
      formStateLive,
      initialData,
      clientValidationErrors,
      addValidationErrorFromKeyChain,
      clearValidationErrorsByKeyChain,
    ]
  );

  /**
   * Running validation against a specific formProp
   */
  const validateFormProp = React.useCallback<(keyChain: KeyChain) => boolean>(
    (keyChain) => {
      let valid = true;
      if (!formConfig?.validators) {
        // eslint-disable-next-line no-console
        console.warn('Attempted client validation without schema. Did you forget to write/add your validators to the form config?');
        return valid;
      }

      clearValidationErrorsByKeyChain(keyChain);

      validateKeyChainProperty(
        valueByKeyChain<any, any>(formConfig.validators, keyChain),
        keyChain,
        valueByKeyChain(formStateLive, keyChain),
        (kc, messages) => {
          valid = false;
          addValidationErrorFromKeyChain(kc, messages);
        },
        keyChain
      );

      return valid;
    },
    [formStateLive, addValidationErrorFromKeyChain, formConfig?.validators, clearValidationErrorsByKeyChain]
  );

  /**
   * Method to run all validators
   */
  const validate = React.useCallback<() => boolean>(() => {
    let valid = true;
    if (!formConfig?.validators) {
      // eslint-disable-next-line no-console
      console.warn('Attempted client validation without schema. Did you forget to write/add your validators to the form config?');
      return valid;
    }

    clearClientValidationErrors();

    validateAll(
      formConfig.validators,
      formStateLive as TData,
      (kc, messages) => {
        valid = false;
        addValidationErrorFromKeyChain(kc, messages);
      },
      []
    );

    return valid;
  }, [formConfig?.validators, formStateLive, clearClientValidationErrors]);

  /**
   * Runs all validators against the live form state
   */
  useDebounceEffect(
    () => {
      if (formConfig?.validators) {
        let valid = true;
        validateAll(
          formConfig.validators,
          formStateLive as TData,
          () => {
            valid = false;
          },
          []
        );

        setIsValid(valid);
      }
    },
    500,
    [formStateLive]
  );

  /**
   * The root method used to access a property within the form data object.
   * - Receives a strictly typed set of args for targeting nested properties within a complex data object.
   * - Can also allow targeting objects within an array by requesting an index number rather than a key.
   * - The args passed to `formProp` form a "key chain" which is then used to access properties within the data object.
   * @returns a set of tools for the property in question, notably `bind` and `set`.
   */
  const formProp = React.useCallback(
    (...keyChain: KeyChain): BindingTools<TData> => {
      const value = valueByKeyChain(formStateRef.current, keyChain);
      const arrayMethods: BindingTools<any> = {
        bind: (bindConfig?: IBindConfig<any>) => bind(keyChain, bindConfig),
        set: (newValue: any) => {
          set(keyChain, newValue);
          return formProp(...keyChain) as BindingTools<any>;
        },
        get: () => value,
        add: (newItem: any) => {
          add(keyChain, value as any[], newItem);
          return formProp(...keyChain) as BindingTools<any>;
        },
        pop: () => {
          pop(keyChain, value as any[]);
          return formProp(...keyChain) as BindingTools<any>;
        },
        insert: (newItem: any, index: number) => {
          insert(keyChain, value as any[], index, newItem);
          return formProp(...keyChain) as BindingTools<any>;
        },
        remove: (index: number) => {
          remove(keyChain, value as any[], index);
          return formProp(...keyChain) as BindingTools<any>;
        },
        addValidationError: (messages: ValidationMessage | ValidationMessage[], identifier?: string) => {
          addValidationErrorFromKeyChain(keyChain, messages, identifier);
        },
        clearClientValidationErrors: (...identifiers: string[]) => {
          clearValidationErrorsByKeyChain(keyChain, identifiers);
        },
        validate: () => validateFormProp(keyChain),
      };
      return arrayMethods as BindingTools<TData>;
    },
    [bind, set, add, pop, remove, insert, formStateLive, addValidationErrorFromKeyChain, clearValidationErrorsByKeyChain, formConfig]
  );

  /**
   * A simple getter to return the latest form data.
   */
  const getFormData = React.useCallback(() => {
    return formStateRef.current;
  }, []);

  /**
   * Resets form data to it's latest "initial" state.
   */
  const resetFormData = React.useCallback(() => {
    dispatch({ type: 'set-all', data: initialData });
  }, [Objects.contentDependency(initialData), dispatch]);

  /**
   * Sets all form data to a new object value.
   */
  const setFormData = React.useCallback(
    (newFormData: TData) => {
      return dispatch({ type: 'set-all', data: newFormData });
    },
    [dispatch]
  );

  return {
    formState: formStateLive,
    formProp: formProp as FormPropFactory<TData>['formProp'],
    resetFormData,
    getFormData,
    setFormData,
    clearClientValidationErrors,
    addValidationError,
    validate,
    isValid,
  };
}

/**
 * Turns a potentially complex nested object or array into a piece of live state and a set of helper tools designed to be used in a form.
 * @param initialData (optional) The initial value of the form data object.
 * Can be passed as an object or a function which receives the live state and returns new state.
 * WARNING: if passing a function, it must be a callback protected by dependencies as it will be called every time it's reference updates to receive the new data.
 * @param formConfig (optional) The settings to use with the form.
 * @returns The form state, property accessor, and associated helper methods.
 */
function useForm<TData extends object>(initialData: TData | InitialDataFunction<TData>, formConfig?: IFormConfig<TData>): HookReturn<TData> {
  const firstInitialData = React.useMemo<TData>(() => {
    return initialDataIsCallback(initialData) ? initialData() : initialData;
  }, []);

  const [formState, setFormState] = React.useState<TData>(firstInitialData);

  const formStateRef = React.useRef<TData>(firstInitialData);

  const liveInitialData = React.useMemo<TData>(() => {
    return initialDataIsCallback(initialData) ? initialData(formStateRef.current) : initialData;
  }, [initialDataIsCallback(initialData) ? initialData : Objects.contentDependency(initialData)]);

  const dispatch = React.useCallback(
    (action) => {
      formStateRef.current = dataReducer(formStateRef.current, action);
      setFormState(formStateRef.current);
      return formStateRef.current;
    },
    [setFormState]
  );

  useDidUpdateLayoutEffect(() => {
    dispatch({ type: 'set-all', data: liveInitialData });
  }, [Objects.contentDependency(liveInitialData)]);

  return useFormBase<TData>(formState, formStateRef, dispatch, liveInitialData, formConfig);
}

/**
 * Turns an existing set of binding props into a piece of live state and a set of helper tools designed to be used in a form.
 * @param parentBinder A set of binding props associated with a property and returned from another `useForm` hook.
 * @param formConfig (optional) The settings to use with the form.
 * @returns The form state, property accessor, and associated helper methods.
 */
function useChild<TData extends object>(parentBinder: IBindingProps<TData>, formConfig?: IFormConfig<TData>): HookReturn<TData> {
  const formStateRef = React.useRef<TData | undefined>(parentBinder.value);

  useDidUpdateLayoutEffect(() => {
    formStateRef.current = parentBinder.value;
  }, [parentBinder.value]);

  const combinedConfig = React.useMemo<IFormConfig<TData> | undefined>(() => {
    // format validation errors from parent
    const parentBinderConfig: IFormConfig<TData> | undefined = parentBinder.formConfig && {
      ...parentBinder.formConfig,
      validators: undefined,
      validationErrors: parentBinder.myValidationErrors?.map((ve) => ({
        ...ve,
        key: childKeyChainStringFromParent(ve.key, parentBinder.keyChain),
      })),
    };

    const combination: IFormConfig<TData> = Objects.mergeDeep(parentBinderConfig ?? {}, formConfig ?? {});
    return Object.keys(combination).length ? combination : undefined;
  }, [Objects.contentDependency(formConfig), Objects.contentDependency(parentBinder.formConfig), parentBinder.myValidationErrors]);

  const dispatch = React.useCallback<FormDispatcher<TData | undefined>>(
    (action) => {
      let fullState: any;
      switch (action.type) {
        case 'set-all':
          fullState = parentBinder.dispatch({ type: 'set-path', keyChain: parentBinder.keyChain, value: action.data });
          break;
        case 'set-path':
          fullState = parentBinder.dispatch({ ...action, keyChain: [...parentBinder.keyChain, ...action.keyChain] });
          break;
        case 'set-one':
          fullState = parentBinder.dispatch({
            type: 'set-path',
            keyChain: [...(parentBinder.keyChain as any), action.propertyKey],
            value: action.value,
          });
          break;
        default:
          Typescript.assertNever(action);
      }
      formStateRef.current = valueByKeyChain(fullState, parentBinder.keyChain);
      return formStateRef.current;
    },
    [parentBinder.keyChain, parentBinder.dispatch]
  );

  return useFormBase<TData>(parentBinder.value, formStateRef, dispatch, parentBinder.initialValue, combinedConfig);
}

/**
 * Turns an existing set of binding props into a piece of live state and a set of helper tools designed to be used in a form.
 * @param parentBinder A set of binding props associated with a property and returned from another `useForm` hook.
 * @param formConfig (optional) The settings to use with the form.
 * @returns The form state, property accessor, and associated helper methods.
 */
export function use<TData extends object>(parentBinder: IBindingProps<TData>, formConfig?: IFormConfig<TData>): HookReturn<TData>;
/**
 * Turns a potentially complex nested object or array into a piece of live state and a set of helper tools designed to be used in a form.
 * @param initialData (optional) The initial value of the form data object.
 * @param formConfig (optional) The settings to use with the form.
 * @returns The form state, property accessor, and associated helper methods.
 */
export function use<TData extends object>(initialData?: TData | InitialDataFunction<TData>, formConfig?: IFormConfig<TData>): HookReturn<TData>;
export function use<TData extends object>(
  dataOrBinder: TData | InitialDataFunction<TData> | IBindingProps<TData>,
  formConfig?: IFormConfig<TData>
): HookReturn<TData> {
  if (isBindingProps<TData>(dataOrBinder)) {
    return useChild(dataOrBinder, formConfig);
  }
  return useForm(dataOrBinder, formConfig);
}

/** The values and callbacks returned from the useBindingState hook */

interface IUseBindingStateReturnUtils<TData> {
  /** Take any value and use the fromData formatter on it */
  getFormattedValueFromData: (val?: TData) => TData | undefined;

  /** Take any value and use the toData formatter on it */
  getFormattedValueToData: (val?: TData) => TData | undefined;

  /** Validation errors from the binder concatenated with manually passed in errors */
  validationErrorMessages: ValidationMessage[];

  /** The current validation mode for the form */
  validationMode?: FormValidationMode;

  /** The current validation mode for the form */
  validationErrorIcon?: IIcon<IconSet>;

  /** Derived from the validation mode */
  shouldShowValidationErrorIcon?: boolean;

  /** Derived from the validation mode */
  shouldShowValidationErrorMessage?: boolean;
}

type UseBindingStateReturn<TData> = [TData | undefined, ((newValue: TData | undefined) => void) | undefined, IUseBindingStateReturnUtils<TData>];

/** Used as overrides for the bind functionality, for use with component props */
interface IUseBindingStateOverrides<TData> {
  /** The current value, will override the value from bind if both are provided */
  value?: TData;

  /** Called when the value is updated, is called alongside the binder's onChange */
  onChange?: (newValue: TData) => void;

  /** Component level validation errors, will be concatenated with the validation errors from the binder */
  validationErrorMessages?: ValidationMessage[];

  /** The current validation mode for the form */
  validationMode?: FormValidationMode;

  /** The current validation mode for the form */
  validationErrorIcon?: IIcon<IconSet>;
}

/**
 * An optional hook for internal form component use
 *
 * Returns a value and setter for the current input's state in a Form.use from a bind
 *
 * Refer to internal Armstrong code for Input for a clear example
 */

export function useBindingState<TData>(bind?: IBindingProps<TData>, overrides?: IUseBindingStateOverrides<TData>): UseBindingStateReturn<TData> {
  const value = React.useMemo(
    () => overrides?.value ?? bind?.bindConfig?.format?.fromData?.(bind.value) ?? bind?.value,
    [overrides?.value, bind?.bindConfig?.format?.fromData, bind?.value]
  );

  const onChange = React.useCallback(
    (newValue: TData | undefined) => {
      overrides?.onChange?.(newValue!);
      bind?.setValue?.(bind.bindConfig?.format?.toData?.(newValue) ?? newValue);
    },
    [overrides?.onChange, bind?.setValue, bind?.bindConfig?.format?.toData]
  );

  const getFormattedValueFromData = React.useCallback(
    (val?: TData) => bind?.bindConfig?.format?.fromData?.(val) ?? val,
    [bind?.bindConfig?.format?.fromData]
  );

  const getFormattedValueToData = React.useCallback(
    (val?: TData) => bind?.bindConfig?.format?.toData?.(val) ?? val,
    [bind?.bindConfig?.format?.toData]
  );

  const validationErrorMessages = useMyValidationErrorMessages(bind, overrides?.validationErrorMessages);

  const validationMode: FormValidationMode = overrides?.validationMode ?? bind?.formConfig?.validationMode ?? 'both';
  const validationErrorIcon = overrides?.validationErrorIcon ?? bind?.formConfig?.validationErrorIcon;

  return [
    value,
    overrides?.onChange || bind?.setValue ? onChange : undefined,
    {
      getFormattedValueFromData,
      getFormattedValueToData,
      validationErrorMessages,
      validationMode,
      validationErrorIcon,
      shouldShowValidationErrorIcon: validationMode === 'icon' || validationMode === 'both',
      shouldShowValidationErrorMessage: validationMode === 'message' || validationMode === 'both',
    },
  ];
}

/** DEPRECATED - useBindingTools has been renamed useBindingState */
export function useBindingTools<TData>(bind?: IBindingProps<TData>, overrides?: IUseBindingStateOverrides<TData>): UseBindingStateReturn<TData> {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.warn('useBindingTools has been renamed useBindingState - please update this usage of it');
  }, []);

  return useBindingState<TData>(bind, overrides);
}
