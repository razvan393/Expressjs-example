import express from "express";
import bodyParser from "body-parser";
import usersController from "../controllers/userController.js";

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router();

router.get("/", usersController.getUsers);

router.get("/:id(\\d+)", usersController.getUser);

router.post("/", urlencodedParser, usersController.addUser);

router.delete("/:id(\\d+)", usersController.deleteUser);

export default router;
