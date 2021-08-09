import { Link, withRouter } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import Static from '../../setupStatic';
import {
  Container,
  Label,
  Drop,
  InputContainer,
  LoadingThumbnail,
  ThumbnailImage,
  Input,
  UploadButton,
  ResponsiveDiv,
  Desc,
} from './styled';
import { BiUpload } from 'react-icons/bi';

function VideoUploadPage({ history }) {
  const user = useSelector((state) => state.user);
  const [videoTitle, setVideoTitle, onChangeVideoTitle] = useInput();
  const [videoDescription, setVideoDescription, onChangeVideoDescription] =
    useInput();
  const [videoPath, setVideoPath] = useState('');
  const [videoLength, setVideoLength] = useState('');
  const [thumbnailPath, setThumbnailPath] = useState('');
  const [isThumbnail, setIsThumbnail] = useState(false);
  console.log(videoTitle);

  const onDropVideo = (files) => {
    setIsThumbnail(true);
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
            setIsThumbnail(false);
          } else {
            alert('썸네일 생성을 실패했습니다.');
            setIsThumbnail(false);
          }
        });
      } else {
        alert('비디오 생성에 실패했습니다');
        setIsThumbnail(false);
      }
    });
  };

  const onSubmitUploadVideo = (e) => {
    e.preventDefault();
    const publisherId = user.authStatus.isAuth ? user.authStatus._id : '';
    if (!videoTitle) {
      alert('제목은 반드시 입력해야 합니다.');
      return null;
    } else {
      const payload = {
        publisher: publisherId,
        title: videoTitle,
        description: videoDescription,
        videoPath,
        videoLength,
        thumbnailPath,
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
              history.push('/video');
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
    <Container>
      <Link to="/video">뒤로가기</Link>

      <Dropzone
        onDrop={onDropVideo}
        multiple={false}
        maxSize={10_0000_0000}
        style={{ border: 'px solid yellow' }}
      >
        {({ getRootProps, getInputProps }) => (
          <Drop className="dropzone_content" {...getRootProps()}>
            <input {...getInputProps()} />
            <BiUpload style={{ fontSize: '32px' }} />
            <div>영상을 드래그하거나 선택해주세요</div>
            {isThumbnail && (
              <LoadingThumbnail>썸네일 생성중입니다 . . .</LoadingThumbnail>
            )}
          </Drop>
        )}
      </Dropzone>
      <ResponsiveDiv>
        <InputContainer>
          <Label for="video_title">제목</Label>
          <Input
            type="text"
            id="video_title"
            value={videoTitle}
            onChange={onChangeVideoTitle}
          />

          <Label for="video_desc">내용</Label>
          <Desc
            id="video_desc"
            value={videoDescription}
            onChange={onChangeVideoDescription}
          />

          <UploadButton onClick={onSubmitUploadVideo}>업로드</UploadButton>
        </InputContainer>

        <ThumbnailImage>
          {thumbnailPath && (
            <img src={`${Static.URI}${thumbnailPath}`} alt="thumbnail_image" />
          )}
          {!thumbnailPath && <div>영상을 선택하면 썸네일이 추출됩니다</div>}
        </ThumbnailImage>
      </ResponsiveDiv>
    </Container>
  );
}

export default withRouter(VideoUploadPage);
