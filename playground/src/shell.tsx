import { ModalProvider } from "@rocketmakers/armstrong-edge";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { CalendarExample } from "./views/examples/calendar";
import { DateTimeExample } from "./views/examples/dateTime";
import { DialogExample } from "./views/examples/dialog";
import { SelectExample } from "./views/examples/select";
import { TimeExample } from "./views/examples/time";
import { Home } from "./views/home/home";
import { UserEdit } from "./views/user/user";
import initReactFastclick from 'react-fastclick';

export const Shell: React.FC = () => {
  React.useEffect(() => {
    initReactFastclick();
  }, []);

  return (
    <ModalProvider>
      <div className="shell">
        <h1>Armstrong Rewrite Playground</h1>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/edit/:userId?" component={UserEdit} />
          <Route path="/cal" component={CalendarExample} />
          <Route path="/time" component={TimeExample} />
          <Route path="/datetime" component={DateTimeExample} />
          <Route path="/select" component={SelectExample} />
          <Route path="/dialogs" component={DialogExample} />
        </Switch>
      </div>
    </ModalProvider>
  );
};
