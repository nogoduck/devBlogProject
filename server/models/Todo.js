const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  value: {
    type: Number,
  },
  valuestring: {
    type: String,
    default: "test",
  },
  list: {
    type: String,
    default: "할 일을 입력해주세요",
  },
  success: {
    type: Boolean,
    default: false,
  },
  createdAndUpdatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const TodoSchema = new Schema(
  {
    category: listSchema,

    testboolean: {
      type: Boolean,
      default: false,
    },
    testboolean2: {
      type: Boolean,
      default: true,
    },
    teststring: {
      type: String,
      default: "String doc",
    },
    createdAndUpdatedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = { Todo };
