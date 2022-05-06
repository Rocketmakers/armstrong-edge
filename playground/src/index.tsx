import { ApiHooksStore } from "@rocketmakers/api-hooks"
import { ToastProvider, ModalProvider, ArmstrongConfigProvider } from "@rocketmakers/armstrong-edge"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { HashRouter, Link, useHistory, useLocation } from "react-router-dom"
import { Shell } from "./shell"

import "./theme/theme.scss"

const ConfigProvider: React.FC = ({children}) => {
  const location = useLocation()
  const { push, replace } = useHistory()

  return <ArmstrongConfigProvider routing={{ LinkComponent: Link, location, navigate: (to, action) => action === 'push' ? push(to) : replace(to) }}>{children}</ArmstrongConfigProvider>
}

class App extends React.Component {
  componentDidCatch() {
    console.error("TODO - handle error")
  }

  render() {
    return (
      <ApiHooksStore.Provider>
        <ToastProvider>
          <ModalProvider>
            <HashRouter>
              <ConfigProvider>
                <Shell />
              </ConfigProvider>
            </HashRouter>
          </ModalProvider>
        </ToastProvider>
      </ApiHooksStore.Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("host"))
