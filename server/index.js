const mongoose = require("mongoose");
const express = require("express");
const app = express();

const morgan = require("morgan");

app.use(morgan("dev"));

const port = process.env.PORT || 5050;

const config = require("./config/key");
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

const DummySchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    id: Number,
    title: String,
    temp: {
      type: String,
      default: "undefined",
    },
    like: Number,
  },
  {
    versionKey: false,
  }
);

console.log(DummySchema);

const Dummy = mongoose.model("dummyData", DummySchema);

const dummyPost1 = new Dummy({
  id: 1,
  title: "처음 등록된 글",
  like: 32,
});

dummyPost1
  .save()
  .then(() => {
    console.log("success : ", dummyPost1);
  })
  .catch((err) => {
    console.log("Error : ", err);
  });

app.get("/", (req, res) => {
  res.send("Server Connect Status: Success");
});

app.listen(port, () => {
  console.log(`Connected Port: ${port}`);
});
