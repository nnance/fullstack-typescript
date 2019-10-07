import React from "react";
import { merge } from "lodash/fp";
import { IUser, login, ILoginRequest } from "api";

type AppProps = {
  isLightTheme: boolean;
  isAuthenticated: boolean;
  user?: IUser;
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
  setAuthenticated: (val: boolean, req?: ILoginRequest) => {}
});

export const useAppContext = () => {
  const [props, setProps] = React.useState(initialProps());

  const setLightTheme = (val: boolean) =>
    setProps(cur => merge(cur, { isLightTheme: val }));

  const setAuthenticated = async (val: boolean, req?: ILoginRequest) => {
    if (val) {
      const user = await login(req ? req : testUser);
      setProps(cur => merge(cur, { isAuthenticated: true, user }));
    } else {
      setProps(cur => merge(cur, { isAuthenticated: false, user: undefined }));
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
