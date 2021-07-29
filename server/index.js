const PORT = process.env.PORT || 5050;
const config = require("./config/key");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
// const morgan = require("morgan");
// const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  Credential: true,
};
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user");
const boardRouter = require("./routes/board");
const todoRouter = require("./routes/todo");
const testRouter = require("./routes/zTest");

// app.use(cors());
// app.use(cors(corsOptions));
// app.use(morgan("dev"));
app.use(express.json());
//extended: true(qs-library 사용) , false(queryString library사용) / 가장 큰 차이점은 json에 중첩된 데이터의 사용 여부로 보인다.
//https://stackoverflow.com/questions/29960764/what-does-extended-mean-in-express-4-0/45690436#45690436
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/UploadProfileImage", express.static("UploadProfileImage"));
app.use("/zDummyFile", express.static("zDummyFile"));

//=============[EXP CODE]==============
// 사용법이 미숙한 코드나 문법을 테스트

//=====================================

mongoose
  .connect(process.env.MONGO_URI, {
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
app.use("/api/board", boardRouter);
app.use("/api/todo", todoRouter);
app.use("/api/test", testRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    index: true,
    state: true,
  });
});

app.listen(PORT, () => {
  console.log(`Connected PORT: ${PORT}`);
});
