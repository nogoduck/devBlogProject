const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    category: {
      type: String,
      default: '제목 없음',
    },
    categoryTo: {
      type: String,
    },
    memo: {
      type: String,
      required: true,
      default: '할 일을 입력해주세요',
    },
    succeed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = { Todo };
