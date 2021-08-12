const express = require('express');
const router = express.Router();

const { Todo } = require('../models/Todo');
const { log } = require('nodemon/lib/utils');

router.get('/getAll', (req, res) => {
  Todo.find()
    .sort({ updatedAt: 'desc' })
    .exec((err, doc) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({
        success: true,
        doc,
      });
    });
});

router.post('/save', (req, res) => {
  const todo = new Todo(req.body);

  todo.save((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({
      success: true,
      doc,
    });
  });
});

router.delete('/delete/categoryAll', (req, res) => {
  console.log(req.body);

  const { categoryTo } = req.body.data;
  console.log('[Todo] delete category categoryTo >> ', categoryTo);
  // res.send('확인');

  Todo.deleteMany({ categoryTo: categoryTo }, (err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({
      success: true,
      doc,
    });
  });
});

router.delete('/delete/completeMemoAll', (req, res) => {
  Todo.deleteMany({ succeed: true }, (err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({
      success: true,
      doc,
    });
  });
});

router.delete('/delete/memo', (req, res) => {
  const { _id } = req.body.payload;
  console.log('[Todo] delete memo _id >> ', _id);

  Todo.findByIdAndDelete(_id, (err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({
      success: true,
      doc,
    });
  });
});

router.patch('/update/item', (req, res) => {
  console.log('요청 받음');
  console.log(req.body);
  const { _id, category, memo } = req.body;
  let update = {};
  if (category) {
    update = {
      category,
    };
  }
  if (memo) {
    update = {
      memo,
    };
  }

  console.log('update >> ', update);

  Todo.findByIdAndUpdate(_id, update, { new: true }, (err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({
      success: true,
      doc,
    });
  });
});

router.patch('/update/state', (req, res) => {
  const { _id, succeed } = req.body;

  Todo.findByIdAndUpdate(_id, { succeed }, { new: true }, (err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({
      success: true,
      doc,
    });
  });
});

router.post('/save', (req, res) => {
  const todo = new Todo(req.body);

  todo.save((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({
      success: true,
      doc,
    });
  });
});

module.exports = router;
