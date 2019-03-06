const { db } = require('../index.js');

const getAllPins = (req, res, next) => {
  db.any('SELECT * FROM pins')
    .then(pins => {
      res.status(200).json({
        status: 'success!',
        pins: pins,
        message: 'got all pins!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSinglePin = (req, res, next) => {
  let pinId = parseInt(req.params.id);
  db.one('SELECT * FROM pins WHERE id=$1', [pinId])
    .then(pin => {
      res.status(200).json({
        status: 'success',
        pin: pin,
        message: 'Pin captured!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllPins,
  getSinglePin,
};
