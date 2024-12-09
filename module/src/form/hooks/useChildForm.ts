/*
 * useChildForm
 * --------------------------------------
 * Root React hook for creating a nested form binder from a parent form bind prop
 */
import React from "react";

import { useDidUpdateSSRLayoutEffect } from "../../hooks/useSSRLayoutEffect";
import { assertNever } from "../../utils";
import {
  FormDispatcher,
  HookReturn,
  IBindingProps,
  KeyChain,
  TouchedDispatcher,
  TouchedState,
  ValidationDispatcher,
} from "../types";
import {
  childKeyChainStringFromParent,
  isMyKeyChainItem,
  keyStringFromKeyChain,
  valueByKeyChain,
} from "../utils/keyChain";
import { useFormBase } from "./useFormBase";

/**
 * Turns an existing set of binding props into a piece of live state and a set of helper tools designed to be used in a form.
 * @param parentBinder A set of binding props associated with a property and returned from another `useForm` hook.
 * @returns The form state, property accessor, and associated helper methods.
 */
export function useChildForm<TData extends object>(
  parentBinder?: IBindingProps<TData>
): HookReturn<TData> {
  const formStateRef = React.useRef<TData | undefined>(parentBinder?.value);
  const touchedStateRef = React.useRef<TouchedState>(
    parentBinder?.myTouchedState ?? []
  );

  // keep state ref up to date for chaining
  useDidUpdateSSRLayoutEffect(() => {
    formStateRef.current = parentBinder?.value;
  }, [parentBinder?.value]);

  // modify validation error keys to be relative to child state
  const validationErrors = React.useMemo(() => {
    return (
      parentBinder?.myValidationErrors?.map((ve) => ({
        ...ve,
        key: childKeyChainStringFromParent(ve.key, parentBinder?.keyChain),
      })) ?? []
    );
  }, [parentBinder?.keyChain, parentBinder?.myValidationErrors]);

  // modify touched state keys to be relative to child state
  const touchedState = React.useMemo(() => {
    return (
      parentBinder?.myTouchedState?.map((k) =>
        childKeyChainStringFromParent(k, parentBinder?.keyChain)
      ) ?? []
    );
  }, [parentBinder?.keyChain, parentBinder?.myTouchedState]);

  // override state change dispatcher to add parent key chain back in
  const dispatch = React.useCallback<FormDispatcher<TData | undefined>>(
    (action) => {
      let fullState = {} as TData | undefined;
      switch (action.type) {
        case "set-all":
          fullState = parentBinder?.dispatch({
            type: "set-path",
            keyChain: parentBinder?.keyChain,
            value: action.data,
          });
          break;
        case "set-path":
          fullState = parentBinder?.dispatch({
            ...action,
            keyChain: [...(parentBinder?.keyChain ?? []), ...action.keyChain],
          });
          break;
        case "set-one":
          fullState = parentBinder?.dispatch({
            type: "set-path",
            keyChain: [...(parentBinder?.keyChain ?? []), action.propertyKey],
            value: action.value,
          });
          break;
        default:
          assertNever(action);
          throw new Error(
            `Invalid action: ${JSON.stringify(assertNever ?? {})}`
          );
      }

      formStateRef.current = valueByKeyChain<TData>(
        fullState,
        parentBinder?.keyChain
      ) as TData;

      return formStateRef.current;
    },
    [parentBinder]
  );

  // override validation error dispatcher to add parent key chain back in
  const addValidationError = React.useCallback<ValidationDispatcher>(
    (action) => {
      switch (action.type) {
        case "add-validation":
          parentBinder?.clientValidationDispatcher({
            ...action,
            errors: action.errors.map((e) => ({
              ...e,
              key: keyStringFromKeyChain(
                [...(parentBinder?.keyChain ?? []), e.key],
                "dots"
              ),
            })),
          });
          break;
        case "clear-validation":
          parentBinder?.clientValidationDispatcher({
            type: "clear-validation",
            key:
              action.key &&
              keyStringFromKeyChain(
                [...(parentBinder?.keyChain ?? []), action.key],
                "dots"
              ),
            identifiers: action.identifiers,
          });
          break;
        default:
          assertNever(action);
          throw new Error(`Invalid action: ${JSON.stringify(assertNever)}`);
      }
    },
    [parentBinder]
  );

  // override touched state dispatcher to add parent key chain back in
  const touchedStateDispatcher = React.useCallback<TouchedDispatcher>(
    (action) => {
      let fullTouchState = [] as TouchedState;
      switch (action.type) {
        case "set-touched":
          fullTouchState =
            parentBinder?.touchedStateDispatcher({
              ...action,
              keyChain: [...(parentBinder?.keyChain ?? []), ...action.keyChain],
            }) ?? [];
          break;
        case "reset-touched":
          fullTouchState =
            parentBinder?.touchedStateDispatcher({
              type: "set-touched",
              keyChain: parentBinder.keyChain,
              touched: false,
            }) ?? [];
          break;
        default:
          assertNever(action);
          throw new Error(`Invalid action: ${JSON.stringify(assertNever)}`);
      }
      touchedStateRef.current =
        fullTouchState
          .filter((k) =>
            isMyKeyChainItem(
              k,
              keyStringFromKeyChain(parentBinder?.keyChain, "dots")
            )
          )
          .map((k) =>
            childKeyChainStringFromParent(k, parentBinder?.keyChain ?? [])
          ) ?? [];
      return touchedStateRef.current;
    },
    [parentBinder]
  );

  // Calls the parent parseValidationSchema with the parent key chain added back in
  const parseValidationSchema = (keyChain?: KeyChain, silent?: boolean) => {
    if (!parentBinder?.parseValidationSchema) {
      return true;
    }
    return (
      parentBinder?.parseValidationSchema(
        [...(parentBinder?.keyChain ?? []), ...(keyChain ?? [])],
        silent
      ) ?? true
    );
  };

  // render base hook
  return useFormBase<TData>(
    parentBinder?.value,
    formStateRef,
    dispatch,
    validationErrors,
    addValidationError,
    touchedState,
    touchedStateRef,
    touchedStateDispatcher,
    parseValidationSchema,
    parentBinder?.initialValue,
    parentBinder?.formConfig,
    parentBinder?.allTouched,
    parentBinder?.fullKeyChain
  );
}
