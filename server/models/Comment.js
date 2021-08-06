const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'Board',
    },
    responseTo: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    content: {
      type: String,
    },

    // userTo: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    // },
    // userFrom: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    // },
  },
  { timestamps: true, versionKey: false }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment };
