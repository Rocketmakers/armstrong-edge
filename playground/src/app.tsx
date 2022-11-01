import {
  Form,
  IconUtils,
  ReactSingleSelectRef,
} from "@rocketmakers/armstrong-dev";
import { PlaygroundSingleSelect } from "./components/playgroundSingleSelect";
import { useRef } from "react";
import { PlaygroundButton } from "./components/playgroundButton";

import "../theme/theme.scss";

function App() {
  const { formProp, formState } = Form.use({
    username: "",
    password: "",
    flava: "",
  });

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const singleSelectRef = useRef<ReactSingleSelectRef>(null);

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
        <textarea readOnly value={JSON.stringify(formState)} />
      </form>
    </div>
  );
}

export default App;
