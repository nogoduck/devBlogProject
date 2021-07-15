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

router.patch("/list/edit", (req, res) => {
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
router.post("/list/createall ", (req, res) => {
  //하위 문서에 저장한다
  const variable = req.body;
  console.log("variable >> ", variable);

  const filter = { _id: variable._id };
  const updateArr = variable.list;

  console.log("filter >> ", filter);
  console.log("updateArr >> ", updateArr);

  //변수로 넣으면 값이 들어가지 않지만 직접 작성하면 하위 문서에도 문제없이 삽입된다(너무 오랜시간 해결 못한 문제라 실수 방지를 위해 주석처리) - 익숙해지면 제거
  // const update = {
  //   list: { memo: variable.list },
  // };
  Todo.findOneAndUpdate(
    filter,
    {
      list: updateArr,
    },
    { new: true },
    (err, doc) => {
      console.log("doc:: ", doc);
      if (err) {
        return res.status(500).json({
          message: err,
        });
      }
      return res.status(200).json({
        success: true,
        data: doc,
      });
    }
  );
});

module.exports = router;
