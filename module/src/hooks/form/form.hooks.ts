/* eslint-disable no-redeclare */
import * as React from 'react';

import { IconSet, IIcon } from '../../components/icon';
import { useMyValidationErrorMessages } from '../../components/validationErrors';
import { Objects } from '../../utils/objects';
import { Typescript } from '../../utils/typescript';
import { useDidUpdateEffect, useDidUpdateLayoutEffect } from '../useDidUpdateEffect';
import { reducer } from './form.state';
import {
  BindingTools,
  BindingToolsArray,
  FormDispatcher,
  FormPropFactory,
  FormValidationMode,
  HookReturn,
  IBindConfig,
  IBindingProps,
  IFormConfig,
  KeyChain,
} from './form.types';
import { isBindingProps, validationErrorsByKeyChain, valueByKeyChain } from './form.utils';

function useBase<TData extends object>(
  formStateLive: TData | undefined,
  formStateRef: React.MutableRefObject<TData | undefined>,
  dispatch: FormDispatcher<TData | undefined>,
  initialData?: Partial<TData>,
  formConfig?: IFormConfig
): HookReturn<TData> {
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

  const add = React.useCallback(
    (keyChain: KeyChain, currentValue: any[], newItem: any) => {
      const newValue = [...(currentValue ?? [])];
      newValue.push(newItem);
      dispatch({ type: 'set-path', keyChain, value: newValue });
    },
    [dispatch]
  );

  const remove = React.useCallback(
    (keyChain: KeyChain, currentValue: any[], index: number) => {
      const newValue = [...(currentValue ?? [])];
      newValue.splice(index, 1);
      dispatch({ type: 'set-path', keyChain, value: newValue });
    },
    [dispatch]
  );

  const insert = React.useCallback(
    (keyChain: KeyChain, currentValue: any[], index: number, newItem: any) => {
      const newValue = [...(currentValue ?? [])];
      newValue.splice(index, 0, newItem);
      dispatch({ type: 'set-path', keyChain, value: newValue });
    },
    [dispatch]
  );

  const pop = React.useCallback(
    (keyChain: KeyChain, currentValue: any[]) => {
      const newValue = [...(currentValue ?? [])];
      newValue.pop();
      dispatch({ type: 'set-path', keyChain, value: newValue });
    },
    [dispatch]
  );

  const bind = React.useCallback(
    (keyChain: KeyChain, bindConfig?: IBindConfig<any>) => {
      return {
        value: valueByKeyChain(formStateLive, keyChain),
        setValue: (newValue: any) => set(keyChain, newValue),
        bindConfig,
        formConfig,
        myValidationErrors: validationErrorsByKeyChain(formConfig?.validationErrors, keyChain),
        dispatch,
        keyChain,
        initialValue: valueByKeyChain(initialData, keyChain),
      };
    },
    [set, Objects.contentDependency(formConfig), dispatch, formStateLive, initialData]
  );

  const formProp = React.useCallback(
    (...keyChain: KeyChain): BindingTools<TData> => {
      const value = valueByKeyChain(formStateRef.current, keyChain);
      const arrayMethods: BindingToolsArray<any> = {
        bind: (bindConfig?: IBindConfig<any>) => bind(keyChain, bindConfig),
        set: (newValue: any) => {
          set(keyChain, newValue);
          return formProp(...keyChain) as BindingToolsArray<any>;
        },
        get: () => value,
        add: (newItem: any) => {
          add(keyChain, value as any[], newItem);
          return formProp(...keyChain) as BindingToolsArray<any>;
        },
        pop: () => {
          pop(keyChain, value as any[]);
          return formProp(...keyChain) as BindingToolsArray<any>;
        },
        insert: (newItem: any, index: number) => {
          insert(keyChain, value as any[], index, newItem);
          return formProp(...keyChain) as BindingToolsArray<any>;
        },
        remove: (index: number) => {
          remove(keyChain, value as any[], index);
          return formProp(...keyChain) as BindingToolsArray<any>;
        },
      };
      return arrayMethods as BindingTools<TData>;
    },
    [bind, set, add, pop, remove, insert, formStateLive]
  );

  const getFormData = React.useCallback(() => {
    return formStateRef.current;
  }, []);

  const resetFormData = React.useCallback(() => {
    dispatch({ type: 'set-all', data: initialData });
  }, [Objects.contentDependency(initialData), dispatch]);

  const setFormData = React.useCallback(
    (newFormData: TData) => {
      return dispatch({ type: 'set-all', data: newFormData });
    },
    [dispatch]
  );

  return { formState: formStateLive, formProp: formProp as FormPropFactory<TData>['formProp'], resetFormData, getFormData, setFormData };
}

function useForm<TData extends object>(initialData: TData, formConfig?: IFormConfig): HookReturn<TData> {
  const [formState, setFormState] = React.useState<TData>(initialData);

  const formStateRef = React.useRef<TData>(initialData);

  const dispatch = React.useCallback(
    (action) => {
      formStateRef.current = reducer(formStateRef.current, action);
      setFormState(formStateRef.current);
      return formStateRef.current;
    },
    [setFormState]
  );

  useDidUpdateEffect(() => {
    dispatch({ type: 'set-all', data: initialData });
  }, [Objects.contentDependency(initialData)]);

  return useBase<TData>(formState, formStateRef, dispatch, initialData, formConfig);
}

function useChild<TData extends object>(parentBinder: IBindingProps<TData>, formConfig?: IFormConfig): HookReturn<TData> {
  const formStateRef = React.useRef<TData | undefined>(parentBinder.value);

  useDidUpdateLayoutEffect(() => {
    formStateRef.current = parentBinder.value;
  }, [parentBinder.value]);

  const combinedConfig = React.useMemo<IFormConfig | undefined>(() => {
    const combination: IFormConfig = { ...(parentBinder.formConfig ?? {}), ...(formConfig ?? {}) };
    return Object.keys(combination).length ? combination : undefined;
  }, [Objects.contentDependency(formConfig), Objects.contentDependency(parentBinder.formConfig)]);

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

  return useBase<TData>(parentBinder.value, formStateRef, dispatch, parentBinder.initialValue, combinedConfig);
}

export function use<TData extends object>(parentBinder: IBindingProps<TData>, formConfig?: IFormConfig): HookReturn<TData>;
export function use<TData extends object>(initialData?: TData, formConfig?: IFormConfig): HookReturn<TData>;
export function use<TData extends object>(dataOrBinder: TData | IBindingProps<TData>, formConfig?: IFormConfig): HookReturn<TData> {
  if (isBindingProps<TData>(dataOrBinder)) {
    return useChild(dataOrBinder, formConfig);
  }
  return useForm(dataOrBinder, formConfig);
}

/** The values and callbacks returned from the useBindingTools hook */

interface IUseBindingToolsReturnUtils<TData> {
  /** Take any value and use the fromData formatter on it */
  getFormattedValueFromData: (val?: TData) => TData | undefined;

  /** Take any value and use the toData formatter on it */
  getFormattedValueToData: (val?: TData) => TData | undefined;

  /** Validation errors from the binder concatenated with manually passed in errors */
  myValidationErrorMessages: string[];

  /** The current validation mode for the form */
  validationMode?: FormValidationMode;

  /** The current validation mode for the form */
  validationErrorIcon?: IIcon<IconSet>;

  /** Derived from the validation mode */
  shouldShowValidationErrorIcon?: boolean;

  /** Derived from the validation mode */
  shouldShowValidationErrorMessage?: boolean;
}

type UseBindingToolsReturn<TData> = [TData | undefined, (newValue: TData) => void, IUseBindingToolsReturnUtils<TData>];

/** Used as overrides for the bind functionality, for use with component props */
interface IUseBindingToolsOverrides<TData> {
  /** The current value, will override the value from bind if both are provided */
  value?: TData;

  /** Called when the value is updated, is called alongside the binder's onChange */
  onChange?: (newValue: TData) => void;

  /** Component level validation errors, will be concatenated with the validation errors from the binder */
  validationErrorMessages?: string[];

  /** The current validation mode for the form */
  validationMode?: FormValidationMode;

  /** The current validation mode for the form */
  validationErrorIcon?: IIcon<IconSet>;
}

/**
 * An optional hook for internal form component use. Takes a bind and some optional overrides and ensures that onChange and value
 * use the bind's formatters
 */

export function useBindingTools<TData>(bind?: IBindingProps<TData>, overrides?: IUseBindingToolsOverrides<TData>): UseBindingToolsReturn<TData> {
  const value = React.useMemo(
    () => overrides?.value ?? bind?.bindConfig?.format?.fromData?.(bind?.value) ?? bind?.value,
    [overrides?.value, bind?.bindConfig?.format?.fromData, bind?.value]
  );

  const onChange = React.useCallback(
    (newValue: TData) => {
      overrides?.onChange?.(newValue);
      bind?.setValue?.(bind?.bindConfig?.format?.toData?.(newValue) ?? newValue);
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

  const myValidationErrorMessages = useMyValidationErrorMessages(bind, overrides?.validationErrorMessages);

  const validationMode = overrides?.validationMode ?? bind?.formConfig?.validationMode;
  const validationErrorIcon = overrides?.validationErrorIcon ?? bind?.formConfig?.validationErrorIcon;

  return [
    value,
    onChange,
    {
      getFormattedValueFromData,
      getFormattedValueToData,
      myValidationErrorMessages,
      validationMode,
      validationErrorIcon,
      shouldShowValidationErrorIcon: validationMode === 'icon' || validationMode === 'both',
      shouldShowValidationErrorMessage: validationMode === 'message' || validationMode === 'both',
    },
  ];
}
