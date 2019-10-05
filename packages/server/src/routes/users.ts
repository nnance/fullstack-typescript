import express from "express";
import { IUser, testUsers as users } from "api";

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/login", (req, res) => {
  const auth = req.body as {
    email: string;
    password: string;
  };
  const found = users.find(
    user => user.email === auth.email && user.password === auth.password
  );
  found ? res.send(users[0]) : res.sendStatus(401);
});

export default router;
