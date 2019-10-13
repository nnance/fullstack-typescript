import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../components/ProTip";
import { Button } from "@material-ui/core";
import { AppContext } from "../components/AppContext";
import AuthButton from "../components/AuthButton";

export default function App() {
  const { setLightTheme } = React.useContext(AppContext);
  const {
    props: { isAuthenticated, user }
  } = React.useContext(AppContext);

  const Status = () =>
    isAuthenticated ? (
      <React.Fragment>Welcome {user ? user.name : ""}!</React.Fragment>
    ) : (
      <React.Fragment>You are not logged in.</React.Fragment>
    );

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example with TypeScript
        </Typography>
        <Button onClick={() => setLightTheme(true)}>Light</Button>
        <Button onClick={() => setLightTheme(false)}>Dark</Button>
        <p>
          <Status />
          <AuthButton />
        </p>
        <ProTip />
      </Box>
    </Container>
  );
}
