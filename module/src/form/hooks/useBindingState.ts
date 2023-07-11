/*
 * useBindingState
 * --------------------------------------
 * Hook for creating a `useState` equivalent from a bind prop
 */
import * as React from 'react';

import type { FormValidationMode, IBindingProps, IUseBindingStateOverrides, UseBindingStateReturn } from '../types';
import { useMyValidationErrorMessages } from './useMyValidationErrorMessages';

/**
 * Tool for unwrapping a bind prop into a getter, setter, and set of tools/elements to render
 * @param bind The incoming bind prop on a custom form components
 * @param overrides Optional overrides to support native getters/setters and validation data passed through props
 * @returns A tuple containing a getter/setter and a set of tools for interacting with bind state
 */
export function useBindingState<TData>(
  bind?: IBindingProps<TData>,
  overrides?: IUseBindingStateOverrides<TData>
): UseBindingStateReturn<TData> {
  const value = React.useMemo(
    () => overrides?.value ?? bind?.bindConfig?.format?.fromData?.(bind.value) ?? bind?.value,
    [overrides?.value, bind?.bindConfig?.format, bind?.value]
  );

  const onChange = React.useCallback(
    (newValue: TData | undefined) => {
      if (newValue !== undefined) {
        overrides?.onChange?.(newValue);
      }
      bind?.setValue?.(bind.bindConfig?.format?.toData?.(newValue) ?? newValue);
    },
    [bind, overrides]
  );

  const getFormattedValueFromData = React.useCallback(
    (val?: TData) => bind?.bindConfig?.format?.fromData?.(val) ?? val,
    [bind?.bindConfig?.format]
  );

  const getFormattedValueToData = React.useCallback(
    (val?: TData) => bind?.bindConfig?.format?.toData?.(val) ?? val,
    [bind?.bindConfig?.format]
  );

  const validationErrorMessages = useMyValidationErrorMessages(bind, overrides?.validationErrorMessages);

  const validationMode: FormValidationMode = overrides?.validationMode ?? bind?.formConfig?.validationMode ?? 'both';
  const validationErrorIcon = overrides?.validationErrorIcon ?? bind?.formConfig?.validationErrorIcon;

  return [
    value,
    onChange,
    {
      getFormattedValueFromData,
      getFormattedValueToData,
      validationErrorMessages,
      isTouched: bind?.isTouched ?? false,
      setTouched: touched => bind?.setTouched(touched),
      validate: (setInputTouched?: boolean, silent?: boolean) => bind?.validate(setInputTouched, silent) ?? true,
      isValid: (bind?.isValid ?? true) && !validationErrorMessages.length,
      validationMode,
      validationErrorIcon,
      shouldShowValidationErrorIcon: validationMode === 'icon' || validationMode === 'both',
      shouldShowValidationErrorMessage: validationMode === 'message' || validationMode === 'both',
    },
  ];
}
