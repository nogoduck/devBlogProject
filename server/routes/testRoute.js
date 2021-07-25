const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const mime = require("mime");

//mime/lite버전을 사용하고 싶은데 로드가 되지 않는다 mime보다 1/3 밖에 용량이 안된다고 한다.

router.get("/", (req, res) => {
  res.send("response testRouter...");
});

router.post("/", (req, res) => {
  console.log("req.file >> ", req.file);

  const filename = "1627179811536_blob";
  console.log(
    "path >> ",
    path.join(__dirname, `../../UploadProfileImage/${filename}`)
  );

  const imagePath = path.join(
    __dirname,
    `../../UploadProfileImage/${filename}`
  );
  const imagePath2 = path.join(
    __dirname,
    `../../UploadProfileImage/AxsETab001.txt`
  );
  const imagePath3 = path.join(
    __dirname,
    `../../UploadProfileImage/artgirl.jpg`
  );

  console.log("imagePath >> ", imagePath);
  console.log("imagePath2 >> ", imagePath2);

  const readfile = fs.readFileSync(imagePath, "utf-8");
  const readfile2 = fs.readFileSync(imagePath2, "utf-8");
  const readfile3 = fs.readFileSync(imagePath3, "utf-8");
  // const readfile3 = fs.readFileSync(imagePath2, "");

  // fs.readFile(imagePath, "utf-8", (err, data) => {
  //   if (err) throw err;
  //   // console.log("data2 >> ", data);
  // });

  // fs.readFile(imagePath2, (err, data) => {
  //   if (err) throw err;
  //   // console.log("data >> ", data);
  // });

  //mime version2부터는 getType을 사용하지 않고 lookup을 사용한다 영어만 알았어도 금방 적용했을텐데
  //엄한 블로그들만 찾아다니며 시간을 허비했다.
  //이럴떈 내 자신이 너무 싫어진다 영어를 하루빨리 시작해야겠다.
  const imgMime = mime.lookup(imagePath);
  console.log("imgMime >> ", imgMime);

  res.send("test");

  // fs.readfile의 기본값이 utf-8로 알고 있어서 옵션을 적지 않아도 그렇게 읽힐줄 알았는데 그렇지 않고 버퍼로 읽혔다.
  fs.readFile(imagePath, (err, data) => {
    if (err) return res.json({ err: err });
    console.log("data >> ", data);
  });

  // res.send(Buffer.from(readfile, "binary"));

  // const buffer = Buffer.from("mimecraft");
  // console.log(buffer);

  // res.send("hi");

  // res.sendFile(imagePath3, (doc, err) => {
  //   if (err) console.log(err);
  //   console.log(doc);
  //   console.log("success");
  // });

  // res.status(200).json({
  //   success: true,
  //   blobfile: readfile,
  // });
});

module.exports = router;
