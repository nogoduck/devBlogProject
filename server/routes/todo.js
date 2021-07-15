const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { Todo } = require("../models/Todo");

router.get("/", (req, res) => {
  Todo.find()
    .then((category) => {
      return res.status(200).json({
        category,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

router.post("/list/check", (req, res) => {
  const variable = req.body;
  console.log("todo variable > ", variable);

  variable.save((err, data) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      message: "todo 항목 저장 완료",
    });
  });
});

router.delete("/list/delete", (req, res) => {
  const variable = req.body;
  console.log("todo variable > ", variable);

  variable.save((err, data) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      message: "todo 항목 저장 완료",
    });
  });
});

router.post("/list/create", (req, res) => {
  const variable = req.body;
  console.log("todo variable > ", variable);

  const filter = { _id: variable._id };
  const update = {
    list: { memo: variable.memo },
  };

  Todo.findOneAndUpdate(filter, update, { new: true }, (err, doc) => {
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

router.delete("/category/delete", (req, res) => {
  const variable = req.body;
  console.log("todo variable > ", variable);

  variable.save((err, data) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      message: "todo 항목 저장 완료",
    });
  });
});

router.post("/category/create", (req, res) => {
  const variable = new Todo(req.body);
  console.log("todo variable > ", variable);

  variable.save((err, data) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      message: "todo 항목 저장 완료",
    });
  });
});

module.exports = router;
