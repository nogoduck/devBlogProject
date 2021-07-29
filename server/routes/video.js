const express = require("express");
const router = express.Router();
const multer = require("multer");
const ffmpeg = require("fluent-ffmpeg");
const { Video } = require("../models/Video");

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "UploadVideo/");
        console.log(file);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== ".mp4") {
            return cb(res.status(400).end("only mp4 is allowed"), false);
        }
        cb(null, true);
    },
});

const upload = multer({storage: storage}).single("file");


router.post("/uploadVideo", (req, res) => {
    const video = new Video(req.body);
    video.save((err, doc) => {
        if (err) return res.json({success: false, err});
        res.status(200).json({success: true});
    });
});


router.get("/getAll", (req, res) => {
    Video.find()
        .populate("publisher")
        .exec((err, videos) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({success: true, videos});
        });
});

router.get("/", (req, res) => {
    res.send("response get")
});

router.post("/getVideoDetail", (req, res) => {
    console.log("req.body : ", req.body.videoId);
    Video.findOne({_id: req.body.videoId})
        .populate("writer")
        .exec((err, videoDetail) => {
            if (err) return res.status(400).send(err);
            console.log("videoDetail :: ", videoDetail);
            res.status(200).json({success: true, videoDetail});
        });
});


router.post("/createVideo", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.json({success: false, err});
        }
        console.log("req.file >> ", req.file);
        const { path, filename } = req.file;
        return res.json({
            success: true,
            filePath: path,
            fileName: filename
        });
    });
});

router.post("/thumbnail", (req, res) => {
    const {filePath, videoLength} = req.body;
    console.log('req.body Thumbnail >> ', req.body);
    ffmpeg.setFfmpegPath("C:\\ffmpeg-4.4-full_build\\bin\\ffmpeg.exe");

    ffmpeg.ffprobe(req.body.url, (err, metadata) => {
        console.dir('metadata > ', metadata);
        console.log('dr > ', metadata.format.duration);
        videoLength = metadata.format.duration;
    });

    ffmpeg(req.body.url)
        .on("filenames", (filenames) => {
            console.log("Will generate ", filenames.join(", "));
            console.log(filenames);

            filePath = "UploadVideo/thumbnail/" + filenames[0];
        })
        .on("end", () => {
            console.log("Succeess Create thumbnail");
            return res.json({
                success: true,
                videoPath: filePath,
                videoLength: videoLength,
            });
        })
        .on("error", (err) => {
            console.log(err);
            return res.json({success: false, err});
        })
        .screenshots({
            count: 3,
            folder: "UploadVideo/thumbnail",
            size: "300x180",
            filename: "thumbnail-%b.png",
        });
});

module.exports = router;
