const mongoose = require("mongoose");

const DummySchema = new mongoose.Schema({
  id: Number,
  title: String,
  temp: String,
  like: Number,
});

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
