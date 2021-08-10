const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    title: {
      type: String,
    },
    catergory: {
      type: String,
      default: '제목 없음',
    },
    memo: {
      type: String,
      required: true,
      default: '할 일을 입력해주세요',
    },
    succeed: {
      type: Boolean,
      required: true,
      default: false,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { timestamps: true, versionKey: false }
);

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = { Todo };
