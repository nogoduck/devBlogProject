const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { Board } = require("../models/Board");

router.get("/getall", (req, res) => {
  Board.find()
    .then((board) => {
      console.log("DB에서 게시글 불러오기 성공");
      return res.status(200).json({
        board,
      });
      res.json({ message: "게시글을 성공적으로 불러왔습니다." });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

router.post("/create", (req, res) => {
  console.log(req.body);
  const board = new Board(req.body);
  console.log("board :: ", board);

  board.save((err, data) => {
    if (err) return res.json({ success: false, err });
    console.log("save data: ", data);
    return res.status(200).json({
      signUpSuccess: true,
      message: "게시물 업로드 성공",
    });
  });

  console.log("요청받음");
  console.log(req.body);
  console.log(req.body.title);
});

module.exports = router;
