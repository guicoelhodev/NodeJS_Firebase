import { getBaseRoute } from "../controllers/GET";
import express from "express";
import { addClinic, addUser } from "../controllers/POST";

export const router = express.Router();

router.get("/", getBaseRoute);

router.post("/createUser", addUser);

router.post("/addClinic", addClinic);
