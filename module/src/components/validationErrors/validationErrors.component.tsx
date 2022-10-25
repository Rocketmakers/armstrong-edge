import * as React from "react";

import { ValidationMessage } from "../../hooks/form";
import { ClassNames } from "../../utils/classNames";
import { ErrorMessage } from "../errorMessage";
import { IconSet, IIcon } from "../icon";

export interface IValidationErrorsProps {
  /** The errors to render */
  /** Can be a string or {key, element} key is necessary for animating in new messages   */
  validationErrors: ValidationMessage[];

  /** CSS className property */
  className?: string;

  /** the icon to render beside the validation message */
  icon?: IIcon<IconSet>;

  /** will scroll the validation errors into view when the length of validationErrors changes */
  scrollIntoView?: boolean;
}

/** Render an array of validation errors as error messages */
export const ValidationErrors = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<IValidationErrorsProps>
>(({ validationErrors, className, icon, scrollIntoView }, ref) => {
  const internalRef = React.useRef<HTMLInputElement>(null);
  React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

  React.useEffect(() => {
    if (validationErrors.length > 0 && scrollIntoView) {
      internalRef.current?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  }, [validationErrors.length]);

  /** If the error is a JSX element use the key on the element or the index */
  const getKey = React.useCallback(
    (error: ValidationMessage, index: number) => {
      if (typeof error === "string") {
        return error + index;
      }
      return error?.key ?? index;
    },
    []
  );

  return (
    <div
      ref={internalRef}
      className={ClassNames.concat("arm-validation-errors", className)}
    >
      {validationErrors.map((error, i) => (
        <ErrorMessage message={error} key={getKey(error, i)} icon={icon} />
      ))}
    </div>
  );
});
