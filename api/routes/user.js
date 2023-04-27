import express from "express";
import { getUser, getitem, getitems } from "../controllers/user.js";

const router = express.Router();

router.post("/", getUser);

router.get("/items", getitems);


export default router;
