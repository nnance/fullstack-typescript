import React from "react";
import { AppContext } from "./AppContext";
import { Button } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";
import { useLocation, useHistory } from "react-router-dom";

const AuthButton = (props: ButtonProps) => {
  const history = useHistory();
  const location = useLocation();

  const {
    props: { isAuthenticated },
    setAuthenticated
  } = React.useContext(AppContext);

  return !isAuthenticated ? (
    <Button
      {...props}
      onClick={() => history.push("/login", { from: location })}
    >
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
