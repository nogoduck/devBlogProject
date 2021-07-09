const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { Board } = require("../models/Board");

router.post("/delete", (req, res) => {
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
});

router.post("/update", (req, res) => {
  const target = req.body;
  console.log(target._id);
  console.log("target :: ", target);
  const filter = { title: "테스트 글쓰기1" };
  const update = { title: "example" };
  Board.findOneAndUpdate(filter, update, { new: true });

  // .then(() => {
  //   console.log(data);
  //   console.log("게시글 업데이트 완료");
  //   return res.status(200).json({
  //     data,
  //   });
  // })
  // .catch((err) => {
  //   res.status(500).json({
  //     message: err,
  //   });
  // });
});

router.get("/getall", (req, res) => {
  Board.find()
    .then((board) => {
      console.log("DB에서 게시글 불러오기 성공");
      return res.status(200).json({
        board,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

router.post("/create", (req, res) => {
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
});

router.post("/detail", (req, res) => {
  Board.findOne(req.body)
    .then((data) => {
      console.log("디테일 게시물 불러오기 성공");
      console.log(data);
      return res.status(200).json({
        data,
      });
      res.json({ message: "게시글을 성공적으로 불러왔습니다." });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

module.exports = router;
