import * as React from 'react';

import { IBindingProps, ValidationMessage } from '../../hooks/form';
import { Arrays } from '../../utils/arrays';

/** For internal component use - combine validation errors from a prop with those from a bind */
export function useMyValidationErrorMessages(bind?: IBindingProps<any>, validationErrorMessages?: ValidationMessage[]) {
  return React.useMemo(
    () =>
      Arrays.flatten(
        validationErrorMessages,
        bind?.myValidationErrors?.map((error) => error.message)
      ),
    [validationErrorMessages, bind?.myValidationErrors]
  );
}
