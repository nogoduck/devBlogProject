const port = process.env.PORT || 5050;
const config = require("./config/key");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  Credential: true,
};
const userRouter = require("./routes/user");

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());

//=========[TEST]========

const bcrypt = require("bcrypt");
const password = "3201";
console.log(password);

const encodedPassword = bcrypt.hashSync(password, 10);
console.log("enc:::", encodedPassword);

bcrypt.genSalt(10, (err, salt) => {
  // if (err) return err;
  console.log("salt:::", salt);
});

const { User } = require("./models/User");
console.log(User);
User.findOne({ email: "ad@naver.com" }, (err, doc) => {
  if (err) return err;
  console.log("doc:", doc);
});
//=======================

app.get("/", (req, res) => {
  res.send("Server Connect Status: Success");
});

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => console.log(err));

app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Connected Port: ${port}`);
});
