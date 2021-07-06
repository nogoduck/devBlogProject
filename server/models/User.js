const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    min: 6,
  },
  token: {
    type: String,
  },
});

UserSchema.pre("save", function (next) {
  const saltRounds = 10;

  const user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) return next(err);
      console.log("salt 생성 성공", salt);

      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        console.log("hash 생성 성공", hash);

        next();
      });
    });
  } else {
    next();
  }
});

UserSchema.methods.comparePassword = (plainPassword, cb) => {
  bcrypt.compare(plainPassword, UserSchema.password, (err, pass) => {
    if (err) return cb(err);
    cb(null, pass);
  });
};

UserSchema.methods.createToken = (cb) => {
  const privateKey = 20;

  const token = jwt.sign(userSchema.user._id, privateKey);

  userSchema.user.token = token;
  userSchema.save((err, user) => {
    if (err) return cb(err);
    cb(null, user);
  });
};

UserSchema.methods.test = (text) => {
  console.log(text + "TEST32123");
  return null;
};
const User = mongoose.model("User", UserSchema);

module.exports = { User };
