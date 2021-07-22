import React, { useState, useEffect, useRef, useCallback } from "react";
import { Container } from "./styled";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import Modal from "../Modal";

function generateDownload(canvas, crop) {
  if (!crop || !canvas) {
    return;
  }

  canvas.toBlob(
    (blob) => {
      const previewUrl = window.URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.download = "cropPreview.png";
      anchor.href = URL.createObjectURL(blob);
      anchor.click();

      window.URL.revokeObjectURL(previewUrl);
    },
    "image/png",
    1
  );
}

function ImageCrop({ show, close, src }) {
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1, x: 0, y: 0 });
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

  console.log("ref >> ", previewCanvasRef.current);
  console.log("com crop >> ", completedCrop);

  const onClickSaveImage = (canvas, crop) => {
    if (!crop || !canvas) {
      return;
    }

    console.log("saveImage");
    console.log(canvas, crop);

    canvas.toBlob((blob) => {
      const previewUrl = window.URL.createObjectURL(blob);

      console.log(previewUrl);
    });
  };

  return (
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

      <button
        type="button"
        disabled={!completedCrop?.width || !completedCrop?.height}
        onClick={() =>
          generateDownload(previewCanvasRef.current, completedCrop)
        }
      >
        Download cropped image
      </button>
    </div>
  );
}

export default ImageCrop;
