import React from "react";
import { AppContext } from "./AppContext";
import { Button, makeStyles, useTheme } from "@material-ui/core";
import { withRouter, useLocation, useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1, 1.5)
  }
}));

const AuthButton = () => {
  const classes = useStyles(useTheme());
  const history = useHistory();
  const location = useLocation();

  const {
    props: { isAuthenticated },
    setAuthenticated
  } = React.useContext(AppContext);

  return !isAuthenticated ? (
    <Button
      color="primary"
      variant="outlined"
      className={classes.link}
      onClick={() => history.push("/login", { from: location })}
    >
      Sign In
    </Button>
  ) : (
    <Button
      color="primary"
      variant="outlined"
      className={classes.link}
      onClick={() => setAuthenticated(false)}
    >
      Sign Out
    </Button>
  );
};

export default withRouter(AuthButton);
