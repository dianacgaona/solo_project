const express = require("express");
const router = express.Router();

const {
  getAllPins,
  getSinglePin,
  getPinsForUser,
  updatePinInfo,
  createNewPin,
  deletePin
} = require("../db/queries/pinsQueries");

router.get("/", getAllPins);
router.get("/:id", getSinglePin);
router.get("/user/:id", getPinsForUser);
router.patch("/:id", updatePinInfo);
router.post("/new", createNewPin);
router.delete("/:id", deletePin);

module.exports = router;
