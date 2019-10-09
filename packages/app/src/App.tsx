import React from "react";
import { Button, Container, Typography, Box } from "@material-ui/core";
import { AppContext } from "./components/AppContext";
import ProTip from "./components/ProTip";
import AuthButton from "./components/AuthButton";
import Copyright from "./components/Copyright";

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
