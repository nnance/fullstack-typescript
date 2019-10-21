import express from "express";
import { IUser, testUsers, ILoginRequest, newUser } from "api";

const router = express.Router();

var users = ([] as IUser[]).concat(testUsers);

/* GET users listing. */
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  const user = newUser(name, email, password);
  users.push(user);
  res.send(user);
});

router.put("/:userId", (req, res) => {
  const id = parseInt(req.params.userId);
  users[id] = req.body as IUser;
  res.send(users[id]);
});

router.delete("/:userId", (req, res) => {
  const id = parseInt(req.params.userId);
  users = users.filter(user => user.id !== id);
  res.sendStatus(200);
});

router.post("/login", (req, res) => {
  const auth = req.body as ILoginRequest;
  const found = users.find(
    user => user.email === auth.email && user.password === auth.password
  );
  found ? res.send(users[0]) : res.sendStatus(401);
});

export default router;
