import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";

export default function NoMatch() {
  const location = useLocation();

  return (
    <Container maxWidth="md">
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Not Found
      </Typography>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </Container>
  );
}
