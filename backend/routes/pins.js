const express = require("express");
const router = express.Router();

const { getAllPins, getSinglePin } = require("../db/queries/pinsQueries");

router.get("/", getAllPins);
router.get("/:id", getSinglePin);

module.exports = router;
