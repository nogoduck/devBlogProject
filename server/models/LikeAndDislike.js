const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'Board',
    },
    commentId: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  },
  { versionKey: false }
);

const dislikeSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    commentId: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  },
  { versionKey: false }
);

const Like = mongoose.model('Like', likeSchema);
const Dislike = mongoose.model('Dislike', dislikeSchema);

module.exports = { Like, Dislike };
