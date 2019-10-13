import express from "express";
import { orders } from "api";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(orders);
});

export default router;
