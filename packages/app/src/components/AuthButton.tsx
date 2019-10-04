import React from "react";
import { AppContext } from "./AppContext";
import { Button } from "@material-ui/core";

const AuthButton = () => {
  const {
    props: { isAuthenticated, user },
    setAuthenticated
  } = React.useContext(AppContext);

  return isAuthenticated ? (
    <p>
      Welcome {user ? user.name : ""}!
      <Button onClick={() => setAuthenticated(false)}>Sign out</Button>
    </p>
  ) : (
    <p>
      You are not logged in.
      <Button onClick={() => setAuthenticated(true)}>Sign In</Button>
    </p>
  );
};

export default AuthButton;
