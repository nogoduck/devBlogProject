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

    const onChangeVideo = () => {
        let formData = new FormData();
        const config = {
            header: { "content-type": "multipart/form-data" },
        };
        formData.append("file", files[0]);
        axios.post("/api/video/uploadfiles", formData, config).then((res) => {
            if (res.data.success) {
                console.log("RES.DATA:", res.data);
                console.log("File Upload State : Succeed");

                let variable = {
                    url: res.data.url,
                    fileName: res.data.fileName,
                };

                setFilePath(res.data.url);

                axios.post("/api/video/thumbnail", variable).then((res) => {
                    if (res.data.success) {
                        console.log("Create Video Thumbnail : Succeed");
                        console.log(res.data);

                        setDuration(res.data.fileDuration);
                        setThumbnailPath(res.data.url);
                    } else {
                        console.log("Create Video Thumbnail : Failed");
                        alert("썸네일 생성을 실패했습니다.");
                    }
                });
            } else {
                console.log("File Upload State : Failed");
                alert("비디오 업로드를 실패했습니다");
            }
        });
    }

    const onClickUploadVideo = () => {
        const payload = {}
        axios.post("/api/video/upload")
    }
    return <>
        <Dropzone onDrop={onDrop} multiple={false} maxSize={10_0000_0000}>
            {({getRootProps, getInputProps}) => (
                <div className="dropzone_content" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className="ico_drop">영상 파일을 드래그하거나 선택해주세요.</div>
                </div>
            )}
        </Dropzone>
    </>;
}

export default withRouter(VideoUploadPage);
