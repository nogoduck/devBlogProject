const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { Todo, List } = require("../models/Todo");

router.get("/", (req, res) => {
  Todo.find()
    .then((category) => {
      console.log("find >> ", category);
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

router.post("/list/edit", (req, res) => {
  const { _id, memo } = req.body;

  const filter = { _id: _id };
  const update = { memo: memo };

  console.log("filter >> ", filter);
  console.log("update >> ", update);

  // const todo = new Todo();
  // todo.list.push({ memo: memo });

  const findUser = Todo.findById(_id)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  findUser.list.push({ memo: memo });

  todo.save((err, doc) => {
    if (err) {
      console.log(err);
    }
    console.log(doc);
  });
  //   Todo.findById(_id)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
});

// Todo.findOneAndUpdate(filter, {}, { new: false }, (err, doc) => {
//   console.log("doc:: ", doc);
//   if (err) {
//     return res.status(500).json({
//       message: err,
//     });
//   }
//   return res.status(200).json({
//     success: true,
//     data: doc,
//   });
// });
// });

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

router.post("/list/create", (req, res) => {
  const variable = new List(req.body);
  console.log("List variable > ", variable);

  variable.save((err, data) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      message: "List 저장 완료",
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

//기존에 todo리스트도 모두 그대로 저장하기 때문에 all키워드를 붙였다

module.exports = router;
