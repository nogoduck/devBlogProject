const express = require('express');
const router = express.Router();

const { Like, Dislike } = require('../models/LikeAndDislike');

router.post('/getLike', (req, res) => {
  const { userId, postId, commentId } = req.body;
  let payload = {};
  console.log('payload  default>> ', req.body);

  if (req.body.postId) {
    payload = { postId };
  } else {
    payload = { commentId };
  }

  console.log('payload >> ', payload);

  Like.find(payload).exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({
      success: true,
      doc,
    }); //res.status
  }); //Like.find
}); //router.post

router.post('/getDislike', (req, res) => {
  const { userId, postId, commentId } = req.body;
  let payload = {};

  if (req.body.postId) {
    payload = { postId };
  } else {
    payload = { commentId };
  }

  console.log('payload >> ', payload);

  Dislike.find(payload).exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({
      success: true,
      doc,
    }); //res.status
  }); //Dislike.find
}); //router.post

router.post('/addLike', (req, res) => {
  const { userId, postId, commentId } = req.body;
  let payload = {};
  console.log('addlike payload default >> ', payload);
  console.log('payload  default body>> ', req.body);

  if (req.body.postId) {
    payload = { userId, postId };
  } else {
    payload = { userId, commentId };
  }

  console.log('addLike payload >> ', payload);

  const like = new Like(payload);

  like.save((err, docLike) => {
    if (err) return res.status(400).json({ success: false, err });

    Dislike.findOneAndDelete(payload).exec((err, docDislike) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true });
    });
  });
});

router.post('/removeLike', (req, res) => {
  const { userId, postId, commentId } = req.body;

  let payload = {};

  if (req.body.postId) {
    payload = { userId, postId };
  } else {
    payload = { userId, commentId };
  }

  console.log('removeLike payload >> ', payload);

  Like.findOneAndDelete(payload).exec((err, docDislike) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true });
  });
});

router.post('/addDislike', (req, res) => {
  const { userId, postId, commentId } = req.body;

  let payload = {};

  if (req.body.postId) {
    payload = { userId, postId };
  } else {
    payload = { userId, commentId };
  }

  console.log('addDislike payload >> ', payload);

  const dislike = new Dislike(payload);

  dislike.save((err, docDislike) => {
    if (err) return res.status(400).json({ success: false, err });

    Dislike.findOneAndDelete(payload).exec((err, docLike) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true });
    });
  });
});

router.post('/removeDislike', (req, res) => {
  const { userId, postId, commentId } = req.body;

  let payload = {};

  if (req.body.postId) {
    payload = { userId, postId };
  } else {
    payload = { userId, commentId };
  }

  console.log('removeLike payload >> ', payload);

  Dislike.findOneAndDelete(payload).exec((err, docDislike) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true });
  });
});

module.exports = router;
