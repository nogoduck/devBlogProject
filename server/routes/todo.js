const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { Todo } = require("../models/Todo");

router.post("/list/create", (req, res) => {
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
