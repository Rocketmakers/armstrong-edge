/*
 * useMyValidationErrorMessages
 * --------------------------------------
 * React hook for rendering validation messages
 */
import * as React from "react";

import type { IBindingProps, ValidationMessage } from "../types";
import { uniq } from "../../utils/arrays";

/**
 * Small utility hook to return the combined validation messages from a custom component
 * @param bind The bind prop on the custom component
 * @param validationErrorMessages An optional array of additional messages passed in on props
 * @returns A unique array of validation messages to display for the component
 */
export function useMyValidationErrorMessages<TData>(
  bind?: IBindingProps<TData>,
  validationErrorMessages?: ValidationMessage[]
) {
  return React.useMemo(
    () =>
      uniq([
        ...(validationErrorMessages ?? []),
        ...(bind?.myValidationErrors?.map((error) => error.message) ?? []),
      ]),
    [validationErrorMessages, bind?.myValidationErrors]
  );
}
