import express from "express";

const router = express.Router();

const users = [
  {
    name: "Superman",
    email: "superman@gmail.com",
    password: "Bro"
  }
];

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
