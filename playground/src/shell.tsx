import { ModalProvider } from "@rocketmakers/armstrong-edge"
import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { CalendarExample } from "./views/examples/calendar"
import { DialogExample } from "./views/examples/dialog"
import { ScrollToEnd } from "./views/examples/scrollToBottom"
import { Home } from "./views/home/home"
import { UserEdit } from "./views/user/user"

export const Shell: React.FC = () => {
  return (
    <ModalProvider>
      <div className="shell">
        <h1>Armstrong Rewrite Playground</h1>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/edit/:userId?" component={UserEdit} />
          <Route path="/cal" component={CalendarExample} />
          <Route path="/dialogs" component={DialogExample} />
          <Route path="/scroll-to-end" component={ScrollToEnd} />
        </Switch>
      </div>
    </ModalProvider>

  )
}
