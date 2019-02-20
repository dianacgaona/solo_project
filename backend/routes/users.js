const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  deleteUser,
  createUser,
  logoutUser,
  loginUser,
  isLoggedIn
} = require("../db/queries/userQueries");
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helper");

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.delete("/:id", deleteUser);
router.post("/new", createUser);
router.post("/login", passport.authenticate("local", {}), loginUser);
router.get("/isLoggedIn", isLoggedIn);
router.post("/logout", loginRequired, logoutUser);

module.exports = router;
