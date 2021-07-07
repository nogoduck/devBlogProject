const { User } = require("../models/User");

let auth = (req, res, next) => {
  let token = req.cookies.user_auth;

  User.compareToken(token, (err, user) => {
    console.log("Middleware Token ::", token);
    if (err) throw err;
    if (!user) {
      return res.json({
        isAuth: false,
        error: true,
      });
    }

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
