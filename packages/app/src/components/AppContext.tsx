import React from "react";
import { merge } from "lodash/fp";
import { url } from "inspector";

type AppProps = {
  isLightTheme: boolean;
  isAuthenticated: boolean;
};

const initialProps = (): AppProps => ({
  isLightTheme: true,
  isAuthenticated: false
});

const testUser = {
  email: "superman@gmail.com",
  password: "Bro"
};

export const AppContext = React.createContext({
  props: initialProps(),
  setLightTheme: (val: boolean) => {},
  setAuthenticated: (val: boolean) => {}
});

export const useAppContext = () => {
  const [props, setProps] = React.useState(initialProps());

  const setLightTheme = (val: boolean) =>
    setProps(cur => merge(cur, { isLightTheme: val }));

  const setAuthenticated = async (val: boolean) => {
    if (val) {
      const resp = await fetch("/users/login", {
        body: JSON.stringify(testUser),
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      setProps(cur => merge(cur, { isAuthenticated: resp.status === 200 }));
    } else {
      setProps(cur => merge(cur, { isAuthenticated: val }));
    }
  };

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
