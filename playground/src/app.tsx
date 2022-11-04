import { Form, IconUtils, ReactSelectMultiRef, ReactSelectRef } from "@rocketmakers/armstrong-dev"
import { PlaygroundSingleSelect } from "./components/playgroundSingleSelect"
import { useRef } from "react"
import { PlaygroundButton } from "./components/playgroundButton"
import { PlaygroundMultiSelect } from "./components/playgroundMultiSelect"

import "../theme/theme.scss"

function App() {
  const options = [
    { id: "chocolate", name: "Chocolate" },
    { id: "strawberry", name: "Strawberry" },
    { id: "vanilla", name: "Vanilla" },
    { id: 2, name: "Choc-chip" },
  ];

  const { formProp, formState } = Form.use({
    username: "",
    password: "",
    flava: 2,
    multiFlava: [...options.map((v) => v.id)],
  });

  const singleSelectRef = useRef<ReactSelectRef>(null);
  const multiSelectRef = useRef<ReactSelectMultiRef>(null);

  return (
    <div>
      <h1>It is me, the Armstrong playground</h1>
      <PlaygroundButton>HELLO THERE</PlaygroundButton>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={formState?.username}
          onChange={(e) => formProp("username").set(e.target.value)}
        />
        <input
          value={formState?.password}
          onChange={(e) => formProp("password").set(e.target.value)}
          type="password"
        />
        <PlaygroundSingleSelect
          options={options}
          bind={formProp("flava").bind()}
          validationMode="both"
          errorMessages={["Something ain't right..."]}
          ref={singleSelectRef}
          errorIcon={IconUtils.getIconDefinition("Icomoon", "warning")}
          isClearable={true}
          isSearchable={true}
        />

        <PlaygroundMultiSelect
          options={options}
          bind={formProp("multiFlava").bind()}
          ref={multiSelectRef}
          validationMode="both"
          errorIcon={IconUtils.getIconDefinition("Icomoon", "warning")}
          errorMessages={["Something ain't right..."]}
        />
        <textarea readOnly value={JSON.stringify(formState)} />
      </form>
    </div>
  );
}

export default App;
