import {
  Form,
  GroupedOption,
  IconUtils,
  ReactSelectMultiRef,
  ReactSelectRef,
} from "@rocketmakers/armstrong-dev";
import { useRef } from "react";
import { PlaygroundMultiSelect } from "./components/playgroundMultiSelect";

import "../theme/theme.scss";
import { PlaygroundSingleSelect } from "./components/playgroundSingleSelect";

function App() {
  const flavourOptions = [
    { id: "chocolate", name: "Chocolate" },
    { id: "strawberry", name: "Strawberry" },
    { id: "vanilla", name: "Vanilla" },
    { id: 2, name: "Choc-chip" },
  ];

  const colourOptions = [
    { id: "red", name: "Red" },
    { id: "yellow", name: "Yellow" },
    { id: "blue", name: "Blue" },
  ];

  const groupedOptions: GroupedOption<any>[] = [
    {
      label: "Colours",
      options: colourOptions,
    },
    {
      label: "Flavours",
      options: flavourOptions,
    },
  ];

  const { formProp, formState } = Form.use({
    flava: flavourOptions[1].id,
    multiFlava: ["vanilla", "chocolate", 2],
    multiGroupFlava: groupedOptions
      .map((o) => o.options.map((o: { id: any }) => o.id))
      .flat(1),
  });

  const singleSelectRef = useRef<ReactSelectRef>(null);
  const multiSelectRef = useRef<ReactSelectMultiRef>(null);

  return (
    <div>
      <h1>It is me, the Armstrong playground</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <PlaygroundSingleSelect
          options={groupedOptions}
          bind={formProp("flava").bind()}
          validationMode="both"
          errorMessages={["Something ain't right..."]}
          ref={singleSelectRef}
          errorIcon={IconUtils.getIconDefinition("Icomoon", "warning")}
          isClearable={true}
          isSearchable={true}
          dropdownIcon={IconUtils.getIconDefinition("Icomoon", "airplane3")}
        />

        <PlaygroundMultiSelect
          options={flavourOptions}
          bind={formProp("multiFlava").bind()}
          ref={multiSelectRef}
          validationMode="both"
          errorIcon={IconUtils.getIconDefinition("Icomoon", "warning")}
          errorMessages={["Something ain't right..."]}
          dropdownIcon={IconUtils.getIconDefinition("Icomoon", "icecream")}
          closeMenuOnSelect={false}
        />

        <PlaygroundMultiSelect
          options={groupedOptions}
          bind={formProp("multiGroupFlava").bind()}
          ref={multiSelectRef}
          validationMode="both"
          errorIcon={IconUtils.getIconDefinition("Icomoon", "warning")}
          errorMessages={["Something ain't right..."]}
          dropdownIcon={IconUtils.getIconDefinition("Icomoon", "icecream")}
          closeMenuOnSelect={false}
        />

        <textarea
          readOnly
          value={JSON.stringify(formState)}
          style={{ height: 100 }}
        />
      </form>
    </div>
  );
}

export default App;
