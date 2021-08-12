const express = require('express');
const router = express.Router();

const { Todo } = require('../models/Todo');
const { log } = require('nodemon/lib/utils');

router.get('/getAll', (req, res) => {
  Todo.find().exec((err, doc) => {
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

router.delete('/delete', (req, res) => {
  const { _id } = req.body.payload;
  console.log('[Todo] delete _id >> ', _id);

  Todo.findByIdAndDelete(_id, (err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({
      success: true,
      doc,
    });
  });
});

router.patch('/update/item', (req, res) => {
  const { category, memo } = req.body;

  const update = category ? category : memo;

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
