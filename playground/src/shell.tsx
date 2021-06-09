import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { CalendarExample } from "./views/examples/calendar"
import { Home } from "./views/home/home"
import { UserEdit } from "./views/user/user"
import { ValidatedForm } from "./views/validated-form/validatedForm"

export const Shell: React.FC = () => {
  return (
    <div className="shell">
      <h1>Armstrong Rewrite Playground</h1>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/edit/:userId?" component={UserEdit} />
        <Route path="/validatedForm" component={ValidatedForm} />
        <Route path="/cal" component={CalendarExample} />
      </Switch>
    </div>
  )
}
