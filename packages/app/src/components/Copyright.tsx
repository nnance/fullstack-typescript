import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link, Box } from "@material-ui/core";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export function withCopyright<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <React.Fragment>
      <Component {...props} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </React.Fragment>
  );
}
