import React from "react";
import { flow } from "lodash/fp";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { withNavHeader } from "./components/NavHeader";
import { withCopyright } from "./components/Copyright";

import App from "./App";
import SignIn from "./SignIn";
import Orders from "./Orders";

function withNavCopyright<T>(Component: React.ComponentType<T>) {
  return flow(
    withNavHeader,
    withCopyright
  )(Component);
}

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={withNavCopyright(App)} />
        <Route path="/orders" component={withNavCopyright(Orders)} />
        <Route path="/login" component={withCopyright(SignIn)} />
        {/* <Route component={Notfound} /> */}
      </Switch>
    </BrowserRouter>
  );
}
