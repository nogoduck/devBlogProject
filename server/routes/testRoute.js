const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  res.send("response testRouter...");
});
router.post("/", (req, res) => {
  const filename = "1627160358188_blob";
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

  res.status(200).json({
    success: true,
    blobfile: readfile,
  });
});

module.exports = router;
