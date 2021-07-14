const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    item: [
      {
        list: String,
        success: Boolean,
      },
    ],

    box: {
      title: String,
      success: Boolean,
    },

    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = { Todo };
