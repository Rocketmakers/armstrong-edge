import * as React from "react";

import {
  BaseCalendarInput,
  TBaseCalendarInputCommonProps,
  TBaseCalendarInputNotSelectsRangeProps,
  TBaseDatePickerConfig,
} from "../baseCalendarInput";
import { IconUtils } from "../icon";
import { TextInput } from "../textInput";

export type TTimeInputProps = {
  locale: TBaseDatePickerConfig["locale"];
} & Omit<
  TBaseCalendarInputCommonProps & TBaseCalendarInputNotSelectsRangeProps,
  "selectsRange"
>;

const CustomInput = React.forwardRef<HTMLInputElement>((props, ref) => (
  <TextInput
    leftIcon={IconUtils.getIconDefinition("Icomoon", "clock")}
    {...props}
    ref={ref}
  />
));

/**
 * decision - option to use native input on mobile / tablet? - leave this issue entirely up to the consuming code
 * the following config is overridden: customInput, locale, showTimeSelect, showTimeSelectOnly
 */
export const TimeInput: React.FC<TTimeInputProps> = ({ locale, ...props }) => {
  const config = React.useMemo<TBaseDatePickerConfig>(() => {
    return {
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",

      ...props.config,

      customInput: <CustomInput />,
      locale,
      showTimeSelect: true,
      showTimeSelectOnly: true,
    };
  }, [locale, props.config]);

  return <BaseCalendarInput {...props} config={config} />;
};
