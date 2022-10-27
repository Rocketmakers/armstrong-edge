import React from "react";
import { ISingleSelectProps, SingleSelect } from "@rocketmakers/armstrong-dev";

export const PlaygroundSingleSelect = React.forwardRef<any, ISingleSelectProps>(
  (
    { options, bind, label, placeholder, errorMessages, validationMode },
    ref: any
  ) => {
    return (
      <>
        <SingleSelect
          ref={ref}
          bind={bind}
          options={options}
          label={label}
          placeholder={placeholder}
          errorMessages={errorMessages}
          validationMode={validationMode}
        ></SingleSelect>
      </>
    );
  }
);
