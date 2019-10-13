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

const NavHeader = () => {
  const classes = useStyles(useTheme());

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
            href="/orders"
            className={classes.link}
          >
            Orders
          </Link>
        </nav>
        <Button
          href="#"
          color="primary"
          variant="outlined"
          className={classes.link}
        >
          Sign In
        </Button>
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
