import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { IUser, saveUser } from "api";
import { RouteProps, useHistory } from "react-router";

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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUp(props: RouteProps) {
  const classes = useStyles(useTheme());
  const history = useHistory();
  const user = Object.assign(
    {},
    props.location && (props.location.state as IUser)
  );
  const [state, setState] = React.useState(user);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Profile
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={state.name}
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={val => {
                  const name = val.currentTarget.value;
                  setState(prev => ({ ...prev, name }));
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={state.email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={val => {
                  const email = val.currentTarget.value;
                  setState(prev => ({ ...prev, email }));
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={state.password}
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                name="password"
                onChange={val => {
                  const password = val.currentTarget.value;
                  setState(prev => ({ ...prev, password }));
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Marketing consent"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={() => history.goBack()}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => saveUser(state).then(() => history.goBack())}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
