const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose.connection);

const TodoSchema = new mongoose.Schema(
  {
    seq: {
      type: Number,
      default: 0,
    },
    writer: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: getDate(),
    },
    updatedAt: {
      type: Date,
      default: null,
    },
  },
  { versionKey: false }
);

TodoSchema.plugin(autoIncrement.plugin, {
  model: "Todo",
  field: "seq",
  startAt: 1,
  increment: 1,
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = { Todo };
