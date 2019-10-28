import React from "react";
import {
  Link,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
  Typography,
  Container
} from "@material-ui/core";

import { IOrder, orderURL } from "api";
import useFetch from "../hooks/useFetch";

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders() {
  const classes = useStyles(useTheme());

  const { data } = useFetch<IOrder[]>(orderURL);

  return (
    <Container maxWidth="md">
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Orders
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row: IOrder) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="">
          See more orders
        </Link>
      </div>
    </Container>
  );
}
