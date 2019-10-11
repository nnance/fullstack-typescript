import React from "react";
import { flow } from "lodash/fp";

import {
  BrowserRouter,
  Switch,
  Route,
  RouteProps,
  Redirect
} from "react-router-dom";

import { withNavHeader } from "./components/NavHeader";
import { withCopyright } from "./components/Copyright";

import App from "./App";
import SignIn from "./SignIn";
import Orders from "./Orders";
import { AppContext } from "./components/AppContext";

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
        <Route path="/login" component={withCopyright(SignIn)} />
        {/* <Route component={Notfound} /> */}
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
