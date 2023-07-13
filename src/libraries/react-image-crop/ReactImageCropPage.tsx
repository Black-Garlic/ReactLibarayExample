import React, { useState, useRef } from "react";
import { centerCrop, makeAspectCrop, Crop, PixelCrop } from "react-image-crop";
import MainTemplate from "../../common/MainTemplate";
import "react-image-crop/dist/ReactCrop.css";
import ReactImageCropButton from "./ReactImageCropButton";
import ReactImageCropArea from "./ReactImageCropArea";
import ReactImageCropCanvas from "./ReactImageCropCanvas";

// This is to demonstrate how to make and center a % aspect crop
// which is a bit trickier, so we use some helper functions.
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  );
}

const ReactImageCropPage = () => {
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);

  console.log(completedCrop);
  console.log(previewCanvasRef.current);

  return (
    <MainTemplate>
      <ReactImageCropButton
        imgSrc={imgSrc}
        setImgSrc={setImgSrc}
        imgRef={imgRef}
        setCrop={setCrop}
        scale={scale}
        setScale={setScale}
        rotate={rotate}
        setRotate={setRotate}
        aspect={aspect}
        setAspect={setAspect}
        centerAspectCrop={centerAspectCrop}
      />

      {Boolean(imgSrc) && (
        <ReactImageCropArea
          imgSrc={imgSrc}
          imgRef={imgRef}
          crop={crop}
          setCrop={setCrop}
          setCompletedCrop={setCompletedCrop}
          scale={scale}
          rotate={rotate}
          aspect={aspect}
          centerAspectCrop={centerAspectCrop}
        />
      )}

      {Boolean(completedCrop) && completedCrop && (
        <ReactImageCropCanvas
          imgRef={imgRef}
          previewCanvasRef={previewCanvasRef}
          completedCrop={completedCrop}
          scale={scale}
          rotate={rotate}
        />
      )}
    </MainTemplate>
  );
};

export default ReactImageCropPage;
