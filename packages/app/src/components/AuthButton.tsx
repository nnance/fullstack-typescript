import React from "react";
import { AppContext } from "./AppContext";
import { Button } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";

const AuthButton = (props: ButtonProps) => {
  const {
    props: { isAuthenticated },
    setAuthenticated
  } = React.useContext(AppContext);

  return !isAuthenticated ? (
    <Button {...props} onClick={() => setAuthenticated(true)}>
      Sign In
    </Button>
  ) : (
    <Button {...props} onClick={() => setAuthenticated(false)}>
      Sign Out
    </Button>
  );
};
AuthButton.muiName = "Button";

export default AuthButton;
