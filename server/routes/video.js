const express = require('express');
const router = express.Router();
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const { Video } = require('../models/Video');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'UploadVideo/');
    console.log(file);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.mp4') {
      return cb(res.status(400).end('only mp4 is allowed'), false);
    }
    cb(null, true);
  },
});

const upload = multer({ storage: storage }).single('file');

router.get('/getAll', (req, res) => {
  Video.find()
    .populate('publisher')
    .exec((err, videos) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, videos });
    });
});

router.post('/getVideoDetail', (req, res) => {
  console.log('req.body : ', req.body.videoId);
  Video.findOne({ _id: req.body.videoId })

    .populate('writer')
    .exec((err, videoDetail) => {
      if (err) return res.status(400).send(err);
      console.log('videoDetail :: ', videoDetail);
      res.status(200).json({ success: true, videoDetail });
    });
});

router.post('/uploadVideo', (req, res) => {
  const video = new Video(req.body);
  console.log('video >> ', video);

  //예외처리 ( 빈값 들어오면 반환 ), 제목만 빈 값 허용안하고 내용은 허용함
  if (
    video.publisher === '' ||
    video.videoPath === '' ||
    video.thumbnailPath === '' ||
    video.title === ''
  ) {
    res.status(400).json({
      success: false,
      message: '유저정보 또는 제목이 잘못되었습니다.',
    });
  } else {
    video.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      console.log('upload save doc >> ', doc);
      res.status(200).json({ success: true });
    });
  }
});

router.post('/createVideo', (req, res) => {
  //비디오 파일을 올릴때 썸네일 생성전 비디오를 저장하는 라우터
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    const { path, filename } = req.file;
    return res.json({
      success: true,
      filePath: path,
      fileName: filename,
    });
  });
});

router.post('/thumbnail', (req, res) => {
  // 비디오를 저장 후에 썸네일을 생성하는 라우터
  console.log('req.body Thumbnail >> ', req.body);
  //ffmpeg 압축 푼 경로
  ffmpeg.setFfmpegPath('C:\\ffmpeg-4.4-full_build\\bin\\ffmpeg.exe');
  let thumbnailPath, videoLength;
  ffmpeg.ffprobe(req.body.filePath, (err, metadata) => {
    console.dir('metadata > ', metadata);
    console.log('dr > ', metadata.format.duration);
    videoLength = metadata.format.duration;
  });
  ffmpeg(req.body.filePath)
    .on('filenames', (filenames) => {
      console.log('filenames >> ', filenames);
      thumbnailPath = 'UploadVideo/thumbnail/' + filenames[0];
    })
    .on('end', () => {
      console.log('Succeess Create thumbnail');
      return res.json({
        success: true,
        thumbnailPath: thumbnailPath,
        videoLength: videoLength,
      });
    })
    .on('error', (err) => {
      console.log(err);
      return res.json({ success: false, err });
    })
    .screenshots({
      count: 3,
      folder: 'UploadVideo/thumbnail',
      size: '300x180',
      filename: 'thumbnail-%b.png',
    });
});

module.exports = router;
