import React from "react";
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Container
} from "@material-ui/core";

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from "react-router-dom";

import { getUsers, IUser } from "api";

const Link1 = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => <RouterLink innerRef={ref} {...props} />
);

export default function Users() {
  const [rows, setRows] = React.useState<IUser[]>([]);
  React.useEffect(() => {
    getUsers().then(setRows);
  }, []);

  return (
    <Container maxWidth="md">
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Orders
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: IUser, index) => (
            <TableRow key={index}>
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
    </Container>
  );
}
