const port = process.env.PORT || 5050;
const config = require("./config/key");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const morgan = require("morgan");

const userRouter = require("./routes/user");

app.use(morgan("dev"));
app.use(express.json());

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
