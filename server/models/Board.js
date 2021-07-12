const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const { getDate } = require("./_utils");

autoIncrement.initialize(mongoose.connection);

const BoardSchema = new mongoose.Schema(
  {
    seq: {
      type: Number,
      default: 0,
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
    filePath: {
      type: String,
      trim: true,
    },
  },
  { versionKey: false }
);

BoardSchema.plugin(autoIncrement.plugin, {
  model: "Board",
  field: "seq",
  startAt: 1,
  increment: 1,
});

const Board = mongoose.model("Board", BoardSchema);

module.exports = { Board };
