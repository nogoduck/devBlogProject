import React, { useState } from "react";
import { Container } from "./styled";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import Modal from "../Modal";
function ImageCrop({ show, close, src }) {
  const [crop, setCrop] = useState({
    unit: "px",
    width: "250",
    height: "250",
    lock: true,
  });

  // ReactCrop.circularCrop(true);

  return (
    <Modal show={true} colse={close} style={{}}>
      <ReactCrop
        src={src}
        crop={crop}
        width="500px"
        onChange={(newCrop) => setCrop(newCrop)}
      />

      <canvas
        ref={previewCanvasRef}
        // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
        style={{
          width: Math.round(completedCrop?.width ?? 0),
          height: Math.round(completedCrop?.height ?? 0),
        }}
      />
    </Modal>
  );
}

export default ImageCrop;
