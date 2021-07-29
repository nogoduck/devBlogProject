import {withRouter} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import {useSelector} from "react-redux";


function VideoUploadPage({history}) {
    const user = useSelector((state) => state.user);
    const [videoTitle, setVideoTitle] = useState("");
    const [videoDescription, setVideoDescription] = useState("");
    const [videoPath, setVideoPath] = useState("");
    const [videoLength, setVideoLength] = useState("");
    const [thumbnailPath, setThumbnailPath] = useState("");


    const [video, setVideo] = useState([])

    const onDropVideo = (files) => {
        let formData = new FormData();
        console.log(files);
        const config = {
            header: {"content-type": "multipart/form-data"},
        };
        formData.append("file", files[0]);

        axios.post("/api/video/createVideo", formData, config).then(({data}) => {
            console.log('data createVideo >>', data);
            if (data.success) {
                setVideoPath(data.filePath);
                let paylaod = {
                    filePath: data.filePath,
                    fileName: data.fileName,
                };

                axios.post("/api/video/thumbnail", paylaod).then(({data}) => {
                    console.log('data thumbnail >>', data);
                    if (data.success) {
                        setVideoLength(data.videoLength);
                        setThumbnailPath(data.thumbnailPath);
                    } else {
                        alert("썸네일 생성을 실패했습니다.");
                    }
                });
            } else {
                alert("비디오 생성에 실패했습니다");
            }
        });
    }

    const onSubmitUploadVideo = (e) => {
        e.preventDefault();

        const payload = {
            writer: user.authStatus._id,
            title: videoTitle,
            description: videoDescription,
            videoPath: videoPath,
            videoLength: videoLength,
            thumbnailPath: thumbnailPath,
        };

        axios.post("/api/video/uploadVideo", payload).then(({data}) => {
            console.log("data >> ", data);
            if (data.success) {
                alert("성공적으로 업로드를 했습니다.");
                setTimeout(() => {
                    history.push("/menu/video");
                }, 0);
            } else {
                alert("비디오 업로드에 실패했습니다.");
            }
        }).catch((err) => {
            alert("비디오 업로드에 실패했습니다.");
        })
    };

    return <>
        <form onSubmit={onSubmitUploadVideo}>
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
            <button type="submit">~비디오 등록 !</button>
        </form>
    </>;
}

export default withRouter(VideoUploadPage);
