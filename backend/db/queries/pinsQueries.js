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

const getPinsForUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any('SELECT * FROM pins WHERE user_id=$1', [userId])
    .then(pins => {
      res.status(200).json({
        status: 'success',
        pins: pins,
        message: 'User pins collected',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const updatePinInfo = (req, res, next) => {
  db.none(
    'UPDATE pins SET url=${url}, title=${title}, description=${description}, category=${category} where id=${id}',
    {
      url: req.body.url,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      id: parseInt(req.params.id),
    }
  )
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'Information updated',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createNewPin = (req, res, next) => {
  let user = parseInt(req.body.user_id);
  let board = parseInt(req.body.board_id);
  db.none(
    'INSERT INTO pins (user_id, board_id, url, title, description, category) VALUES (${user_id}, ${board_id}, ${url}, ${title}, ${description}, ${category})',
    {
      user_id: user,
      board_id: board,
      url: req.body.url,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
    }
  )
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'Pin created',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const deletePin = (req, res, next) => {
  let pinId = parseInt(req.params.id);
  db.result('DELETE FROM pins WHERE id=$1', [pinId])
    .then(result => {
      res.status(200).json({
        status: 'success',
        message: 'Pin deleted',
        result: result,
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllPins,
  getSinglePin,
  getPinsForUser,
  updatePinInfo,
  createNewPin,
  deletePin,
};
