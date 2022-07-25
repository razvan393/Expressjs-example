import express from "express";
import usersController from "../controllers/userController.js";

const router = express.Router();

router.get("/", usersController.getUsers);

router.get("/:id(\\d+)", usersController.getUser);

router.delete("/:id(\\d+)", usersController.deleteUser)

export default router;
