import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  useTheme,
  makeStyles
} from "@material-ui/core";

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  useHistory,
  useLocation
} from "react-router-dom";

import { AppContext } from "./AppContext";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  }
}));

const Link1 = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => <RouterLink innerRef={ref} {...props} />
);

const NavHeader = () => {
  const classes = useStyles(useTheme());
  const history = useHistory();
  const location = useLocation();

  const {
    props: { isAuthenticated },
    setAuthenticated
  } = React.useContext(AppContext);

  const SignInButton = () =>
    !isAuthenticated ? (
      <Button
        href="#"
        color="primary"
        variant="outlined"
        className={classes.link}
        onClick={() => history.push("/login", { from: location })}
      >
        Sign In
      </Button>
    ) : (
      <Button
        href="#"
        color="primary"
        variant="outlined"
        className={classes.link}
        onClick={() => setAuthenticated(false)}
      >
        Sign Out
      </Button>
    );

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Company name
        </Typography>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            className={classes.link}
            component={Link1}
            to="/"
          >
            Home
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            className={classes.link}
            component={Link1}
            to="/orders"
          >
            Orders
          </Link>
        </nav>
        <SignInButton />
      </Toolbar>
    </AppBar>
  );
};

export function withNavHeader<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <React.Fragment>
      <NavHeader />
      <Component {...props} />
    </React.Fragment>
  );
}

export default NavHeader;
