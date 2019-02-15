const { db } = require("../index.js");

const getAllPins = (req, res, next) => {
  db.any("SELECT * FROM pins")
    .then(pins => {
      res.status(200).json({
        status: "success!",
        pins: pins,
        message: "got all pins!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllPins
};
