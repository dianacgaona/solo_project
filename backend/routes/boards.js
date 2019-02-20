const express = require("express");
const router = express.Router();

const { getAllBoards } = require("../db/queries/boardsQueries");

router.get("/", getAllBoards);

module.exports = router;
