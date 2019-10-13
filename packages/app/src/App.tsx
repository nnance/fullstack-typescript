import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ProTip from "./components/ProTip";
import { Button } from "@material-ui/core";
import { AppContext } from "./components/AppContext";
import AuthButton from "./components/AuthButton";

function Copyright() {
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

export default function App() {
  const { setLightTheme } = React.useContext(AppContext);

  const switchHandler = (newValue: boolean) => () => {
    if (setLightTheme) setLightTheme(newValue);
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example with TypeScript
        </Typography>
        <Button onClick={switchHandler(true)}>Light</Button>
        <Button onClick={switchHandler(false)}>Dark</Button>
        <AuthButton />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
