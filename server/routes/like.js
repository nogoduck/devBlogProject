const express = require('express');
const router = express.Router();

const { Like, Dislike } = require('../models/LikeAndDislike');

router.post('/getLike', (req, res) => {
  let payload = {};

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
  let payload = {};

  if (req.body.postId) {
    payload = { postId };
  } else {
    payload = { commentId };
  }

  console.log('addLike payload >> ', payload);

  const like = new Like(payload);

  like.save((err, docLike) => {
    if (err) return res.status(400).json({ success: false, err });

    Dislike.findByIdAndRemove(payload).exec((err, docDislike) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true });
    });
  });
});

router.post('/removeLike', (req, res) => {
  let payload = {};

  if (req.body.postId) {
    payload = { postId };
  } else {
    payload = { commentId };
  }

  console.log('removeLike payload >> ', payload);

  Like.findByIdAndRemove(payload).exec((err, docDislike) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true });
  });
});

module.exports = router;
