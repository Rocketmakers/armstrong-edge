import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { Home } from "./views/home/home"
import { UserEdit } from "./views/user/user"

export const Shell: React.FC = () => {
  return (
    <div className="shell">
      <h1>Armstrong Rewrite Playground</h1>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/edit/:userId?" component={UserEdit} />
      </Switch>
    </div>
  )
}
