const { User } = require("../models/User");

let auth = (req, res, next) => {
  //client에서 쿠키에 저장된 토큰을 가져옴
  let token = req.cookies.user_auth;

  //토큰 복호화

  User.compareToken(token, (err, user) => {
    console.log("Middleware Token ::", token);
    if (err) throw err;
    if (!user) {
      return res.json({
        signout: true,
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
