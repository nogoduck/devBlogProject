const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = mongoose.Schema(
    {
        publisher: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        title: {
            type: String,
            maxlength: 64,
        },
        description: String,
        views: {
            type: Number,
            default: 0,
        },
        videoLength: String,
        videoPath: String,
        thumbnailPath: String,
    },
    { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = { Video };
