import React, { useState, useEffect, useRef, useCallback } from "react";
import { Container, InputHidden, InputLabel } from "./styled";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import axios from "axios";

import Modal from "../Modal";
import AlertModal from "../AlertModal";

function ImageCrop({ show, close }) {
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({
    unit: "px",
    width: 150,
    height: 150,
    aspect: 1 / 1,
    x: 0,
    y: 0,
  });
  const [completedCrop, setCompletedCrop] = useState(null);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!show) {
      setUpImg("");
    }

    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop, show]);

  const onClickUploadImage = (canvas, crop) => {
    console.log("Upload");
    console.log("canvas, crop > ", canvas, "+", crop);
    if (!crop || !canvas) {
      return;
    }

    const canvasUrl = canvas.toDataURL("image/png");
    console.log("canvasUrl > ", canvasUrl);

    //base64로 데이터 인코딩
    const base64Incoding = atob(canvasUrl.split(",")[1]);
    // console.log("base64Incoding > ", base64Incoding);

    //charCodeAt : 주어진 인덱스마다 UTF-16코드를 나타내는 0~65536 사이의 정수로 변환
    const array = [];
    for (let i = 0; i < base64Incoding.length; i++) {
      array.push(base64Incoding.charCodeAt(i));
    }
    // console.log("array > ", array);

    //blob 생성
    const file = new Blob([new Uint8Array(array)], { type: "image/png" });
    // console.log("file > ", file);

    const fd = new FormData();

    fd.append("file", file);

    console.log("convert file >> ", window.URL.createObjectURL(file));

    const config = {
      header: {
        processData: false,
        "content-type": false,
      },
    };

    console.log("fd >> ", fd);

    axios
      .post("/api/users/update/image", fd, config)
      .then(({ data }) => {
        console.log("data >> ", data);

        setTimeout(() => {
          //변경 완료 문구
        }, 5000);
      })
      .catch((err) => {
        alert("프로필 변경에 실패했습니다.");
      });
  };

  const readBlob = (e) => {
    console.log("e > ", e.target.files[0]);
    const reader = new FileReader();
    const url2 = reader.readAsDataURL(e.target.files[0]);
    console.log("blob > ", url2);
    console.log(
      "convert file >> ",
      window.URL.createObjectURL(e.target.files[0])
    );

    var bytes, blob;
    bytes = new Uint8Array(e.target.files[0]);
    blob = new Blob([bytes], { type: "image/png" });
    console.log("try1 > ", window.URL.createObjectURL(blob));
  };

  function previewFile(e) {
    console.log("e > ", e.target.files[0]);
    const d = e.target.files[0];
    var reader = new FileReader();

    if (d) {
      console.log("d > ", reader.readAsDataURL(d));
    }
  }
  console.log("canvas x, y >> ", previewCanvasRef.current, completedCrop);
  return (
    <AlertModal
      show={show}
      close={close}
      modalHeader="프로필 사진 업로드"
      submitButtonName="업로드"
      confirm={() =>
        onClickUploadImage(previewCanvasRef.current, completedCrop)
      }
    >
      <input type="file" onChange={previewFile} />

      <Container>
        <ReactCrop
          src={upImg}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={(c) => setCrop(c)}
          onComplete={(c) => setCompletedCrop(c)}
          circularCrop={true}
          minWidth={150}
          minHeight={150}
          keepSelection={true}
          style={{ marginBottom: "8px" }}
        />

        <InputLabel for="select-image">이미지 선택</InputLabel>
        <InputHidden
          type="file"
          accept="image/*"
          id="select-image"
          onChange={onSelectFile}
        />

        {/* Canvas Preview Section */}
        <canvas ref={previewCanvasRef} style={{ display: "none" }} />
      </Container>
    </AlertModal>
  );
}

export default ImageCrop;
