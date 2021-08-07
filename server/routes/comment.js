const express = require('express');
const router = express.Router();

const { Comment } = require('../models/Comment');

router.post('/createComment', (req, res) => {
  const comment = new Comment(req.body);

  comment.save((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    console.log('doc >> ', doc);

    Comment.findById(doc._id)
      .populate('writer')
      .exec((err, doc) => {
        if (err) return res.json({ success: false, doc });
        res.status(200).json({
          success: true,
          doc,
        });
      });
  });
});

router.post('/getAll', (req, res) => {
  const postId = req.body._id;

  Comment.find({ postId })
    .populate('writer')
    .sort({ createdAt: 'desc' })
    .exec((err, doc) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({
        success: true,
        doc,
      });
    });
});
module.exports = router;
