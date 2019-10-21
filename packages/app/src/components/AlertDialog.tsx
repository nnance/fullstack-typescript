import React from "react";
import Button from "@material-ui/core/Button";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export type AlertReason =
  | "backdropClick"
  | "escapeKeyDown"
  | "cancel"
  | "accept";

export interface AlertProps extends DialogProps {
  open: boolean;
  title?: string;
  onClose: (reason: AlertReason) => void;
}

export default function AlertDialog(props: AlertProps) {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose("cancel")} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => props.onClose("accept")}
          color="primary"
          autoFocus
        >
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
}
