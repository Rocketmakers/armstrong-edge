import { ApiHooksStore } from "@rocketmakers/api-hooks"
import { ToastProvider, DialogProvider } from "@rocketmakers/armstrong"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"
import { Shell } from "./shell"

import "./theme/theme.scss"

class App extends React.Component {
  componentDidCatch() {
    console.error("TODO - handle error")
  }

  render() {
    return (
      <ApiHooksStore.Provider>
        <ToastProvider>
          <DialogProvider>
            <HashRouter>
              <Shell />
            </HashRouter>
          </DialogProvider>
        </ToastProvider>
      </ApiHooksStore.Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("host"))
