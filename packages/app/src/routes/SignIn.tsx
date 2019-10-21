import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { AppContext } from "../components/AppContext";
import { RouteComponentProps } from "react-router-dom";

import ErrorMsg from "../components/ErrorMsg";
import { testUsers } from "api";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn(props: RouteComponentProps) {
  const classes = useStyles(useTheme());

  const appContext = React.useContext(AppContext);

  const [state, setState] = React.useState(testUsers[0]);

  React.useEffect(() => {
    const { from } = props.location.state || { from: { pathname: "/" } };
    if (appContext.props.isAuthenticated) props.history.push(from);
  }, [appContext.props, props]);

  const signInHandler = () => {
    appContext.setAuthenticated(true, state);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <ErrorMsg
          open={appContext.props.authFailed || false}
          message={"Invalid email address or password!"}
        />
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            value={state.email}
            onChange={val => {
              const email = val.currentTarget.value;
              setState(prev => ({ ...prev, email }));
            }}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={state.password}
            onChange={val => {
              const password = val.currentTarget.value;
              setState(prev => ({ ...prev, password }));
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signInHandler}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
