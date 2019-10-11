import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme, { darkTheme } from "./theme";
import { AppContext, useAppContext } from "./components/AppContext";
import Router from "./Router";

const Container = () => {
  const switcher = useAppContext();
  return (
    <AppContext.Provider value={switcher}>
      <ThemeProvider theme={switcher.props.isLightTheme ? theme : darkTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

ReactDOM.render(<Container />, document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
