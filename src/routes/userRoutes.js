import express from "express";
import usersController from "../controllers/userController.js";

const router = express.Router();

router.get("/", usersController.getUsers);

export default router;
