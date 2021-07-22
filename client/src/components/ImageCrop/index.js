import React, { useState, useEffect, useRef, useCallback } from "react";
import { Container } from "./styled";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import axios from "axios";

import Modal from "../Modal";

function ImageCrop({ show, close, src }) {
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({
    unit: "px",
    width: 250,
    height: 250,
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
  }, [completedCrop]);

  const onClickSaveImage = (canvas, crop) => {
    console.log("save");
    if (!crop || !canvas) {
      return;
    }

    const canvasUrl = canvas.toDataURL("image/png");
    // console.log("canvasUrl > ", canvasUrl);

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

  return (
    <Modal show={show} close={close}>
      <div>
        <div>
          <input type="file" accept="image/*" onChange={onSelectFile} />
        </div>
        <ReactCrop
          src={upImg}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={(c) => setCrop(c)}
          onComplete={(c) => setCompletedCrop(c)}
          circularCrop={true}
          minWidth={250}
          minHeight={250}
          keepSelection={true}
          style={{ maxHeight: "400px", maxWidth: "500px", paddingTop: "30px" }}
        />
        <div>
          <canvas
            ref={previewCanvasRef}
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
            }}
          />
        </div>
        <button
          onClick={() =>
            onClickSaveImage(previewCanvasRef.current, completedCrop)
          }
        >
          Server Save
        </button>
      </div>
    </Modal>
  );
}

export default ImageCrop;
