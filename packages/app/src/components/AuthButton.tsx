import React from "react";
import { AppContext } from "./AppContext";
import { Button } from "@material-ui/core";

const AuthButton = () => {
  const {
    props: { isAuthenticated },
    setAuthenticated
  } = React.useContext(AppContext);

  return isAuthenticated ? (
    <p>
      Welcome! <Button onClick={() => setAuthenticated(false)}>Sign out</Button>
    </p>
  ) : (
    <p>
      You are not logged in.
      <Button onClick={() => setAuthenticated(true)}>Sign In</Button>
    </p>
  );
};

export default AuthButton;
