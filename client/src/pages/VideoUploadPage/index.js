import { withRouter } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import { useSelector } from "react-redux";


function VideoUploadPage() {
    const user = useSelector((state) => state.user);
    const [videoTitle, setVideoTitle] = useState("");
    const [videoDescription, setVideoDescription] = useState("");
    const [Private, setPrivate] = useState("0");
    const [videoPath, setVideoPath] = useState("");
    const [videoLength, setVideoLength] = useState("");
    const [thumbnailPath, setThumbnailPath] = useState("");



    const [video, setVideo] = useState([])

    const onDropVideo = (files) => {
        let formData = new FormData();
        console.log(files);
        const config = {
            header: { "content-type": "multipart/form-data" },
        };
        formData.append("file", files[0]);

        axios.post("/api/video/createVideo", formData, config).then(({data}) => {
            console.log(data);
            if (data.success) {
                let paylaod = {
                    url: data.url,
                    fileName: data.fileName,
                };
                setVideoPath(data.url);

                axios.post("/api/video/thumbnail", paylaod).then(({data}) => {
                    if (data.success) {
                        console.log(data);

                        setVideoLength(data.videoLength);
                        setThumbnailPath(data.videoPath);
                    } else {
                        alert("썸네일 생성을 실패했습니다.");
                    }
                });
            } else {
                alert("비디오 업로드를 실패했습니다");
            }
        });
    }

    const onClickUploadVideo = () => {
        const payload = {}
        axios.post("/api/video/upload")
    }
    return <>
        <Dropzone onDrop={onDropVideo} multiple={false} maxSize={10_0000_0000}>
            {({getRootProps, getInputProps}) => (
                <div className="dropzone_content" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className="ico_drop">영상 파일을 드래그하거나 선택해주세요.</div>
                </div>
            )}
        </Dropzone>
        {thumbnailPath && (
                <img
                    src={`http://localhost:5050/${thumbnailPath}`}
                />
        )}
    </>;
}

export default withRouter(VideoUploadPage);
