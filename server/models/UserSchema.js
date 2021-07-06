const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
});

UserSchema.pre("save", function (next) {
  const saltRounds = 10;
  const user = this;
  console.log("USER: ", user);

  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) return err;
      console.log("salt 생성 성공", salt);

      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return err;
        user.password = hash;
        console.log("hash 생성 성공", hash);

        next();
      });
    });
  } else {
    next();
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
