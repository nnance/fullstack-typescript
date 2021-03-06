import createError from "http-errors";
import express from "express";
import logger from "morgan";

import usersRouter from "./routes/users";
import ordersRouter from "./routes/orders";

const app = express();
const port = process.env.PORT || 3010;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/orders", ordersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

export default app;
