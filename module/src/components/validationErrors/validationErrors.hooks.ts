import * as React from "react";

import type { IBindingProps, ValidationMessage } from "../../form";
import { flatten } from "../../utils/arrays";

/** For internal component use - combine validation errors from a prop with those from a bind */
export function useMyValidationErrorMessages<TData>(
  bind?: IBindingProps<TData>,
  validationErrorMessages?: ValidationMessage[]
) {
  return React.useMemo(
    () =>
      flatten(
        validationErrorMessages || [],
        bind?.myValidationErrors?.map((error) => error.message) || []
      ),
    [validationErrorMessages, bind?.myValidationErrors]
  );
}
