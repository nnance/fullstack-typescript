import React from "react";
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Container,
  Fab,
  makeStyles,
  useTheme,
  Theme,
  createStyles,
  IconButton
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  useHistory
} from "react-router-dom";

import { getUsers, IUser, deleteUser } from "api";

import AlertDialog, {
  AlertProps,
  AlertReason
} from "../components/AlertDialog";

const Link1 = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => <RouterLink innerRef={ref} {...props} />
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    margin: {
      margin: theme.spacing(1)
    }
  })
);

export default function Users() {
  const classes = useStyles(useTheme());
  const history = useHistory();

  const [rows, setRows] = React.useState<IUser[]>([]);

  const refreshRows = () => getUsers().then(setRows);

  React.useEffect(() => {
    refreshRows();
  }, []);

  const [alertState, setAlert] = React.useState<AlertProps>({
    open: false,
    onClose: () => {}
  });

  const closeAlert = () =>
    setAlert(state => ({ ...state, ...{ open: false } }));

  const deleteHandler = (user: IUser) => (reason: AlertReason) => {
    if (reason === "accept") {
      deleteUser(user)
        .then(refreshRows)
        .then(closeAlert);
    } else {
      closeAlert();
    }
  };

  return (
    <Container maxWidth="md">
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Users
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Action</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: IUser, index) => (
            <TableRow key={index}>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  className={classes.margin}
                  size="small"
                  onClick={() =>
                    setAlert({
                      open: true,
                      title: `Delete User ${row.name}`,
                      onClose: deleteHandler(row)
                    })
                  }
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <Link
                  component={Link1}
                  to={{
                    pathname: "/profile",
                    state: row
                  }}
                >
                  {row.name}
                </Link>
              </TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={() => history.push("/profile")}
      >
        <AddIcon />
      </Fab>
      <AlertDialog
        open={alertState.open}
        title={alertState.title}
        onClose={alertState.onClose}
      >
        Are you sure you want to delete the user?
      </AlertDialog>
    </Container>
  );
}
