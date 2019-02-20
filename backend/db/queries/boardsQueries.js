const { db } = require("../index.js");

const getAllBoards = (req, res, next) => {
  db.any("SELECT * FROM boards")
    .then(boards => {
      res.status(200).json({
        status: "success!",
        boards: boards,
        message: "all boards aboard!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllBoards
};
