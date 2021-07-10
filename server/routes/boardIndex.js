const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { Board } = require("../models/Board");

router.post("/", (req, res) => {
  console.log("요청");
  const skipNum = req.body.currentPage;
  const limitNum = 10;
  let boardCount = 0;
  console.log("boardIndex, skipNum::", skipNum);

  Board.count((err, count) => {
    if (err) {
      console.log(err);
    }
    boardCount = count;
    console.log("Board Count: ", count);
  });

  Board.find()
    .sort({ createdAt: "desc" })
    .skip(skipNum)
    .limit(limitNum)
    .then((board) => {
      console.log("DB에서 게시글 불러오기 성공");
      // console.log(board);
      return res.status(200).json({
        board,
        boardCount,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

module.exports = router;
