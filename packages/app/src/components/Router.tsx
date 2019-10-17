import React from "react";
import { flow } from "lodash/fp";

import {
  BrowserRouter,
  Switch,
  Route,
  RouteProps,
  Redirect
} from "react-router-dom";

import { withNavHeader } from "./NavHeader";
import { withCopyright } from "./Copyright";

import App from "../routes/App";
import SignIn from "../routes/SignIn";
import Orders from "../routes/Orders";
import Profile from "../routes/Profile";
import NotFound from "../routes/NotFound";
import { AppContext } from "./AppContext";

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
        <PrivateRoute path="/orders" component={withNavCopyright(Orders)} />
        <PrivateRoute path="/profile" component={withNavCopyright(Profile)} />
        <Route path="/login" component={withCopyright(SignIn)} />
        <Route component={withNavCopyright(NotFound)} />
      </Switch>
    </BrowserRouter>
  );
}

const PrivateRoute = (props: RouteProps) => {
  const Component = props.component;
  return (
    <AppContext.Consumer>
      {appContext => (
        <Route
          path={props.path}
          render={routeProps =>
            appContext.props.isAuthenticated && Component ? (
              <Component {...routeProps} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: routeProps.location }
                }}
              />
            )
          }
        />
      )}
    </AppContext.Consumer>
  );
};
