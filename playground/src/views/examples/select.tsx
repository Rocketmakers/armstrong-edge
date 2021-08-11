import * as React from "react";
import {
  AutoCompleteInputMulti,
  Form,
  ISelectOption,
  Select,
  Tag,
} from "@rocketmakers/armstrong-edge";
import { AutoCompleteInput } from "@rocketmakers/armstrong";

export const SelectExample: React.FC = () => {
  const { formProp } = Form.use<{ coolId: string }>();

  const options: ISelectOption<string>[] = [
    { id: "1", name: "Ripped" },
    { id: "2", name: "Guys" },
    { id: "3", name: "Only" },
  ];

  const [items, setOptions] = React.useState(["1", "2"]);

  return (
    <>
      {/* <Select
        className="cool"
        bind={formProp("coolId").bind()}
        options={options}
        placeholderOption="Select ur guy"
      /> */}
      <AutoCompleteInputMulti
        options={options.map((o) => ({
          id: o.id,
          name: o.name,
          htmlProps: { className: o.name },
        }))}
        value={items}
        onChange={(items) => setOptions(items)}
        tagPosition="above"
      />
    </>
  );
};
