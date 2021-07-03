const mongoose = require("mongoose");
const express = require("express");
const app = express();

const morgan = require("morgan");

app.use(morgan("dev"));

const port = process.env.PORT || 5050;

const mongoURI =
  "mongodb+srv://ad:1114@table1.wyuia.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Server Connect Status: Success");
});

app.listen(port, () => {
  console.log(`Connected Port: ${port}`);
});
