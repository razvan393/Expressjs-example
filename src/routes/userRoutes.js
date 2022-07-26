import express from "express";
import bodyParser from "body-parser";
import usersController from "../controllers/userController.js";

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router();

router.get("/", usersController.getUsers);
router.get("/:id(\\d+)", usersController.getUser);
router.get("/:id(\\s+)", usersController.getUser2)

router.post("/", urlencodedParser, usersController.addUser);
router.patch("/:id(\\d+)", urlencodedParser, usersController.updateUser);
router.put("/:id(\\d+)", urlencodedParser, usersController.updateUser2);

router.delete("/:id(\\d+)", usersController.deleteUser);

export default router;
