import * as React from "react";
import { Form, ISelectOption, Select } from "@rocketmakers/armstrong-edge";

export const SelectExample: React.FC = () => {
  const { formProp } = Form.use<{ coolId: string }>();

  const options: ISelectOption<string>[] = [
    { id: "1", name: "Ripped" },
    { id: "2", name: "Guys" },
    { id: "3", name: "Only" },
  ];

  return (
    <Select
      bind={formProp("coolId").bind()}
      options={options}
      placeholderOption="Select ur guy"
    />
  );
};
