import React from "react";
import { Snackbar } from "@material-ui/core";

interface ErrorProps {
  open: boolean;
  message: string;
}

export default function(props: ErrorProps) {
  const [opened, setOpen] = React.useState(props.open);

  React.useEffect(() => setOpen(props.open), [props]);

  return (
    <Snackbar
      open={opened}
      autoHideDuration={4000}
      message={
        <span id="snackbar-fab-message-id">
          Invalid email address or password!
        </span>
      }
      onClose={() => setOpen(false)}
      // className={classes.snackbar}
    />
  );
}
