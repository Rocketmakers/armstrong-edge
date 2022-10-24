import { Button, Form } from "@rocketmakers/armstrong-3";
import { PlaygroundButton } from "./components/playgroundButton";

import "../theme/theme.scss";

function App() {
  const { formProp, formState } = Form.use({
    username: "",
    password: "",
  });

  return (
    <div>
      <h1>It is me, the Armstrong playgroud</h1>
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
        <textarea readOnly value={JSON.stringify(formState)} />
      </form>
    </div>
  );
}

export default App;
