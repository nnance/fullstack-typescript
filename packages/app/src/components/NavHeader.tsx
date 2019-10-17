import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  useTheme,
  makeStyles
} from "@material-ui/core";

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from "react-router-dom";

import AuthButton from "./AuthButton";
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
  const context = React.useContext(AppContext);

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
          <Link
            variant="button"
            color="textPrimary"
            className={classes.link}
            component={Link1}
            to="/users"
          >
            Users
          </Link>
        </nav>
        {context.props.isAuthenticated ? (
          <Link
            variant="button"
            color="textPrimary"
            className={classes.link}
            component={Link1}
            to={{
              pathname: "/profile",
              state: context.props.user
            }}
          >
            Profile
          </Link>
        ) : (
          <AuthButton
            color="inherit"
            variant="outlined"
            className={classes.link}
          />
        )}
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
