const { db } = require("../index.js");

const authHelpers = require("../../auth/helpers");

const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
    .then(users => {
      res.status(200).json({
        status: "success",
        users: users,
        message: "users received"
      });
    })
    .catch(error => {
      return next(error);
    });
};

const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any("SELECT * FROM users WHERE id=$1", [userId])
    .then(user => {
      res.status(200).json({
        status: "success",
        user: user,
        message: "User received"
      });
    })
    .catch(error => {
      return next(error);
    });
};

const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result("DELETE FROM users WHERE id=$1", userId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "User down",
        result: result
      });
    })
    .catch(error => {
      return next(error);
    });
};

const createUser = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password_digest);
  db.none(
    "INSERT INTO users ( email, password_digest, name) VALUES (${email}, ${password_digest}, ${name})",
    {
      email: req.body.email,
      password_digest: hash,
      name: req.body.name
    }
  )
    .then(() => {
      res.status(200).json({
        mesage: "Registration successful!"
      });
    })
    .catch(error => {
      res.status(500).json({
        message: error
      });
    });
};

const logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("logout success");
};

const loginUser = (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
};

const isLoggedIn = (req, res) => {
  if (req.user) {
    res.json({ email: req.user });
  } else {
    res.json({ email: null });
  }
};

// function isLoggedIn(req, res) {
//   if (req.user) {
//     db.one('SELECT * FROM users WHERE email=${email}', {
//       email: req.user,
//     }).then(user => {
//       res.status(200).json({
//         user,
//       });
//     });
//     res.json({ username: req.user });
//   } else {
//     res.json({ username: null });
//   }
// }

module.exports = {
  getAllUsers,
  getSingleUser,
  deleteUser,
  createUser,
  logoutUser,
  loginUser,
  isLoggedIn
};

// const updateUser = (req, res, next) => {
//   db
//     .none(
//       "UPDATE users SET name=${name}, username=${username}, email=${email}, profile_pic_url=${profile_pic_url} WHERE id=${id}",
//       {
//         name: req.body.name,
//         username: req.body.username,
//         email: req.body.email,
//         profile_pic_url: req.body.profile_pic_url,
//         id: parseInt(req.params.id)
//       }
//     )
//     .then(() => {
//       res.status(200).json({
//         status: "success",
//         message: "Updated a USER!"
//       });
//     })
//     .catch(err => next(err));
// };
