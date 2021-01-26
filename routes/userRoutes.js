const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

//localhost:9000/users/
//users routs
router.post("/login", userController.login);

router.post("/signup", userController.signup);

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.delete("/:id", userController.deleteUser);

router.patch("/:id", userController.updateUser);

module.exports = router;
