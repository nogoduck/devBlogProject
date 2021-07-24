const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  res.send("testRouter response...");
});

// router.post("/", (req, res) => {});

// fs.writeFileSync(())
const filename = "1627160358188_blob";
console.log("__dirname >> ", __dirname);
console.log(
  "path >> ",
  path.join(__dirname, `../../UploadProfileImage/${filename}`)
);

const imagePath = path.join(__dirname, `../../UploadProfileImage/${filename}`);
const imagePath2 = path.join(
  __dirname,
  `../../UploadProfileImage/AxsETab001.txt`
);

console.log("imagePath >> ", imagePath);
console.log("imagePath2 >> ", imagePath2);

const readfile = fs.readFileSync(imagePath, "utf-8");
const readfile2 = fs.readFileSync(imagePath2, "utf-8");

fs.readFile(imagePath, "utf-8", (err, data) => {
  if (err) throw err;
  console.log("data2 >> ", data);
});

fs.readFile(imagePath2, (err, data) => {
  if (err) throw err;
  console.log("data >> ", data);
});

// blob은 Node.js의 타입이 아니라고 한다
// let blob = new Blob([new ArrayBuffer(readfile)], { type: "image/png" });
// console.log("blob >> ", blob);

// let url = window.URL.createObjectURL(blob);
// console.log("url >> ", url);

module.exports = router;
