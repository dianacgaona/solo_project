const { db } = require('../index.js');

const authHelpers = require('../../auth/helper');

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
    .then(users => {
      res.status(200).json({
        status: 'success',
        users: users,
        message: 'users received',
      });
    })
    .catch(error => {
      return next(error);
    });
};

const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any('SELECT * FROM users WHERE id=$1', [userId])
    .then(user => {
      res.status(200).json({
        status: 'success',
        user: user,
        message: 'User received',
      });
    })
    .catch(error => {
      return next(error);
    });
};

const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result('DELETE FROM users WHERE id=$1', userId)
    .then(result => {
      res.status(200).json({
        status: 'success',
        message: 'User down',
        result: result,
      });
    })
    .catch(error => {
      return next(error);
    });
};

const createUser = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password);
  db.none(
    'INSERT INTO users ( username, password_digest, email, name, about, profile_picture) VALUES (${username}, ${password}, ${email}, ${name}, ${about}, ${profile_picture})',
    {
      username: req.body.username,
      password: hash,
      email: req.body.email,
      name: req.body.name,
      about: req.body.about,
      profile_picture: req.body.profile_picture,
    }
  )
    .then(() => {
      res.status(200).json({
        mesage: 'Registration successful!',
      });
    })
    .catch(error => {
      res.status(500).json({
        message: error,
      });
    });
};

const logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send('logout success');
};

const loginUser = (req, res) => {
  res.json(req.user);
};

const isLoggedIn = (req, res) => {
  if (req.user) {
    res.json({ username: req.user });
  } else {
    res.json({ username: null });
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  deleteUser,
  createUser,
  logoutUser,
  loginUser,
  isLoggedIn,
};
