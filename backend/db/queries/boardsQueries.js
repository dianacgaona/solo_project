const { db } = require('../index.js');

const getAllBoards = (req, res, next) => {
  db.any('SELECT * FROM boards')
    .then(boards => {
      res.status(200).json({
        status: 'success!',
        boards: boards,
        message: 'all boards aboard!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSingleBoard = (req, res, next) => {
  let boardId = parseInt(req.params.id);
  db.one('SELECT * FROM boards WHERE id=$1', [boardId])
    .then(board => {
      res.status(200).json({
        status: 'succes',
        board: board,
        message: 'board aboard!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getBoardsForUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any('SELECT * FROM boards WHERE user_id=$1', [userId])
    .then(boards => {
      res.status(200).json({
        status: 'success',
        boards: boards,
        message: 'User boards fetched',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createNewBoard = (req, res, next) => {
  let user = parseInt(req.body.user_id);
  db.none('INSERT INTO boards (user_id, name) VALUES (${user_id}, ${name})', {
    user_id: user,
    name: req.body.name,
  })
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'Board created',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const deleteBoard = (req, res, next) => {
  let boardId = parseInt(req.params.id);
  db.result('DELETE FROM boards WHERE id=$1', [boardId])
    .then(result => {
      res.status(200).json({
        status: 'success',
        message: 'Board not on board',
        result: result,
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllBoards,
  getSingleBoard,
  getBoardsForUser,
  createNewBoard,
  deleteBoard,
};
