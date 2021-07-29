import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';

function VideoUploadPage({ history }) {
  const user = useSelector((state) => state.user);
  const [videoTitle, setVideoTitle, onChangeVideoTitle] = useInput();
  const [videoDescription, setVideoDescription, onChangeVideoDescription] =
    useInput();
  const [videoPath, setVideoPath] = useState('');
  const [videoLength, setVideoLength] = useState('');
  const [thumbnailPath, setThumbnailPath] = useState('');
  console.log(videoTitle);
  const onDropVideo = (files) => {
    let formData = new FormData();
    console.log(files);
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };

    formData.append('file', files[0]);

    axios.post('/api/video/createVideo', formData, config).then(({ data }) => {
      console.log('data createVideo >>', data);
      if (data.success) {
        setVideoPath(data.filePath);
        let paylaod = {
          filePath: data.filePath,
          fileName: data.fileName,
        };

        axios.post('/api/video/thumbnail', paylaod).then(({ data }) => {
          console.log('data thumbnail >>', data);
          if (data.success) {
            setVideoLength(data.videoLength);
            setThumbnailPath(data.thumbnailPath);
          } else {
            alert('썸네일 생성을 실패했습니다.');
          }
        });
      } else {
        alert('비디오 생성에 실패했습니다');
      }
    });
  };

  const onSubmitUploadVideo = (e) => {
    e.preventDefault();

    if (!videoTitle) {
      alert('제목은 반드시 입력해야 합니다.');
      return null;
    } else {
      const payload = {
        publisher: user.authStatus._id,
        title: videoTitle,
        description: videoDescription,
        videoPath: videoPath,
        videoLength: videoLength,
        thumbnailPath: thumbnailPath,
      };

      if (videoTitle === '') {
        console.log(true);
      } else {
        console.log(false);
      }
      axios
        .post('/api/video/uploadVideo', payload)
        .then(({ data }) => {
          console.log('data >> ', data);
          if (data.success) {
            alert('성공적으로 업로드를 했습니다.');
            setTimeout(() => {
              history.push('/menu/video');
            }, 0);
          } else {
            alert('비디오 업로드에 실패했습니다');
          }
        })
        .catch(() => {
          alert('비디오 업로드에 실패했습니다.');
        });
    }
  };

  return (
    <>
      <form onSubmit={onSubmitUploadVideo}>
        <Dropzone onDrop={onDropVideo} multiple={false} maxSize={10_0000_0000}>
          {({ getRootProps, getInputProps }) => (
            <div className="dropzone_content" {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="ico_drop">
                영상 파일을 드래그하거나 선택해주세요.
              </div>
            </div>
          )}
        </Dropzone>
        {thumbnailPath && (
          <img
            src={`http://localhost:5050/${thumbnailPath}`}
            alt="thumbnail_image"
          />
        )}
        <input type="text" value={videoTitle} onChange={onChangeVideoTitle} />
        <input
          type="text"
          value={videoDescription}
          onChange={onChangeVideoDescription}
        />
        <button type="submit">~비디오 등록 !</button>
      </form>
    </>
  );
}

export default withRouter(VideoUploadPage);
