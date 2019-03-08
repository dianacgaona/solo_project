const express = require("express");
const router = express.Router();

const {
  getAllBoards,
  getSingleBoard,
  getBoardsForUser,
  createNewBoard,
  deleteBoard
} = require("../db/queries/boardsQueries");

router.get("/", getAllBoards);
router.get("/:id", getSingleBoard);
router.get("/user/:id", getBoardsForUser);
router.post("/new", createNewBoard);
router.delete("/:id", deleteBoard);

module.exports = router;
