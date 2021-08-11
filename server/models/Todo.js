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
    },
    categoryTo: {
      type: String,
    },
    memo: {
      type: String,
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
