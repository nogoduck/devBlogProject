const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const { Board } = require('../models/Board');
const { getDate } = require('../models/_utils');

router.post('/delete', (req, res) => {
  const target = req.body;
  console.log('target Id :: ', target);
  Board.findOneAndDelete(target, (err, doc) => {
    console.log('삭제 결과: ', doc);
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

router.post('/update', (req, res) => {
  const target = req.body;

  console.log('target :: ', target);

  const filter = { _id: target._id };
  const update = {
    title: target.title,
    description: target.description,
    updatedAt: getDate(),
  };
  Board.findOneAndUpdate(filter, update, { new: true }, (err, doc) => {
    console.log('doc:: ', doc);
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

router.post('/totalcount', (req, res) => {
  Board.count((err, count) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({
      total: count,
    });
  });
});

router.post('/', (req, res) => {
  console.log('요청');
  const skipCount = req.body.currentPage;
  const limitCount = 10;

  Board.find()
    .sort({ createdAt: 'desc' })
    .skip(skipCount)
    .limit(limitCount)
    .then((board) => {
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

router.post('/create', (req, res) => {
  const board = new Board(req.body);
  console.log('board :: ', board);

  board.save((err, data) => {
    if (err) return res.json({ success: false, err });
    console.log('save data: ', data);
    return res.status(200).json({
      success: true,
      message: '게시물 업로드 성공',
    });
  });
});

router.post('/detail', (req, res) => {
  console.log(req.body);
  Board.findOne(req.body)
    .populate('writer')
    .exec((err, doc) => {
      console.log('유저 찾음', doc);

      if (err) return res.status(500).json({ message: err });
      return res.status(200).json({ doc });
    });
});

module.exports = router;
