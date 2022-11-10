import {
  Form,
  GroupedOption,
  IconUtils,
  ReactSelectMultiRef,
  ReactSelectRef,
} from "@rocketmakers/armstrong-dev";
import { useRef } from "react";
import { PlaygroundMultiSelect } from "./components/playgroundMultiSelect";
import { PlaygroundSingleSelect } from "./components/playgroundSingleSelect";
import { PlaygroundSingleSelectCreatable } from "./components/playgroundSingleCreatableSelect";
import { PlaygroundMultiSelectCreatable } from "./components/playgroundMultiCreatableSelect";

import "../theme/theme.scss";

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
    singleOnly: flavourOptions[1].id,
    singleCreatable: groupedOptions
      .map((o) => o.options.map((o: { id: any }) => o.id))
      .flat(1)[0],
    multiOnly: ["vanilla", "chocolate", 2],
    multiGroup: groupedOptions
      .map((o) => o.options.map((o: { id: any }) => o.id))
      .flat(1),
    multiCreatable: ["vanilla", "chocolate", 2],
  });

  const singleSelectRef = useRef<ReactSelectRef>(null);
  const multiSelectRef = useRef<ReactSelectMultiRef>(null);

  return (
    <div>
      <h1>It is me, the Armstrong playground</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        // SingleSelect
        <PlaygroundSingleSelect
          options={groupedOptions}
          bind={formProp("singleOnly").bind()}
          validationMode="both"
          errorMessages={["Something ain't right..."]}
          ref={singleSelectRef}
          errorIcon={IconUtils.getIconDefinition("Icomoon", "warning")}
          isClearable={true}
          isSearchable={true}
          dropdownIcon={IconUtils.getIconDefinition("Icomoon", "airplane3")}
        />
        <br />
        // SingleSelectCreatable
        <PlaygroundSingleSelectCreatable
          options={groupedOptions}
          bind={formProp("singleCreatable").bind()}
          ref={singleSelectRef}
          validationMode="both"
          errorMessages={["Something ain't right..."]}
          errorIcon={IconUtils.getIconDefinition("Icomoon", "warning")}
          isClearable={true}
          isSearchable={true}
          dropdownIcon={IconUtils.getIconDefinition("Icomoon", "apple")}
        />
        <br />
        // MultiSelectOnly - non-grouped
        <PlaygroundMultiSelect
          options={flavourOptions}
          bind={formProp("multiOnly").bind()}
          ref={multiSelectRef}
          validationMode="both"
          errorIcon={IconUtils.getIconDefinition("Icomoon", "warning")}
          errorMessages={["Something ain't right..."]}
          dropdownIcon={IconUtils.getIconDefinition("Icomoon", "icecream")}
          closeMenuOnSelect={false}
        />
        <br />
        // MultiSelectOnly - grouped
        <PlaygroundMultiSelect
          options={groupedOptions}
          bind={formProp("multiGroup").bind()}
          ref={multiSelectRef}
          validationMode="both"
          errorIcon={IconUtils.getIconDefinition("Icomoon", "warning")}
          errorMessages={["Something ain't right..."]}
          dropdownIcon={IconUtils.getIconDefinition("Icomoon", "icecream")}
          closeMenuOnSelect={false}
        />
        <br />
        // MultiSelectCreatable
        <PlaygroundMultiSelectCreatable
          options={groupedOptions}
          bind={formProp("multiCreatable").bind()}
          ref={multiSelectRef}
          validationMode="both"
          errorIcon={IconUtils.getIconDefinition("Icomoon", "warning")}
          errorMessages={["Something ain't right..."]}
          dropdownIcon={IconUtils.getIconDefinition("Icomoon", "icecream")}
          closeMenuOnSelect={false}
        />
        <br />
        <textarea
          readOnly
          value={JSON.stringify(formState, null, "\t")}
          style={{ height: 400 }}
        />
      </form>
    </div>
  );
}

export default App;
