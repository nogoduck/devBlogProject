const mongoose = require('mongoose');

const { getDate } = require('./_utils');

const BoardSchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    views: Number,
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
      default: Date.now,
      // default: getDate(),
    },
    updatedAt: {
      type: Date,
    },
    filePath: {
      type: String,
      trim: true,
    },
  },
  { versionKey: false }
);

const Board = mongoose.model('Board', BoardSchema);

module.exports = { Board };
