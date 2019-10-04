import React from "react";
import { merge } from "lodash/fp";

type AppProps = {
  isLightTheme: boolean;
  isAuthenticated: boolean;
};

const initialProps = (): AppProps => ({
  isLightTheme: true,
  isAuthenticated: false
});

export const AppContext = React.createContext({
  props: initialProps(),
  setLightTheme: (val: boolean) => {},
  setAuthenticated: (val: boolean) => {}
});

export const useAppContext = () => {
  const [props, setProps] = React.useState(initialProps());

  const setLightTheme = (val: boolean) =>
    setProps(cur => merge(cur, { isLightTheme: val }));

  const setAuthenticated = (val: boolean) =>
    setProps(cur => merge(cur, { isAuthenticated: val }));

  return {
    props,
    setLightTheme,
    setAuthenticated
  };
};

export const AppContextProvider: React.FC = props => (
  <AppContext.Provider value={useAppContext()}>
    {props.children}
  </AppContext.Provider>
);
