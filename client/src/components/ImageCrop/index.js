import React, { useState, useCallback } from "react";
import { Container } from "./styled";
import Cropper from "react-easy-crop";

import Modal from "../Modal";

function ImageCrop({ show, close, src }) {
  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  return (
    <div>
      <Cropper
        image={src}
        crop={crop}
        zoom={zoom}
        cropShape="round"
        showGrid={false}
        aspect={1 / 1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
      <button>확인</button>
      <button>확인</button>
      <button>확인</button>
    </div>
  );
}

export default ImageCrop;
