const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { Board } = require("../models/Board");

router.post("/delete", (req, res) => {
  const target = req.body;
  console.log("target Id :: ", target);
  Board.findOneAndDelete(target, (err, doc) => {
    console.log("doc:: ", doc);
    if (err)
      return res.status(500).json({
        message: err,
      });
    return res.status(200).json({
      success: true,
      data: doc,
    });
  });
});

router.post("/update", (req, res) => {
  const target = req.body;
  console.log(target);
  console.log("target :: ", target);
  const filter = { _id: target._id };
  const update = { title: target.title, description: target.description };
  Board.findOneAndUpdate(filter, update, { new: true }, (err, doc) => {
    console.log("doc:: ", doc);
    if (err)
      return res.status(500).json({
        message: err,
      });
    return res.status(200).json({
      success: true,
      data: doc,
    });
  });
});
router.post("/totalcount", (req, res) => {
  Board.count((err, count) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({
      total: count,
    });
  });
});

router.post("/", (req, res) => {
  console.log("요청");
  const skipNum = req.body.currentPage;
  const limitNum = 10;
  console.log("boardIndex, skipNum::", skipNum);

  Board.find()
    .sort({ createdAt: "desc" })
    .skip(skipNum)
    .limit(limitNum)
    .then((board) => {
      console.log("DB에서 게시글 불러오기 성공");
      // console.log(board);
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
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

module.exports = router;
