import React from "react";
import { PixelCrop } from "react-image-crop";
import { useDebounceEffect } from "./useDebounceEffect";
import { canvasPreview } from "./canvasPreview";

interface ReactImageCropCanvasProps {
  imgRef: any;
  previewCanvasRef: any;
  completedCrop: PixelCrop;
  scale: number;
  rotate: number;
}

const ReactImageCropCanvas = ({
  imgRef,
  previewCanvasRef,
  completedCrop,
  scale,
  rotate,
}: ReactImageCropCanvasProps) => {
  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        await canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
        );
      }
    },
    100,
    [completedCrop, scale, rotate],
  );

  return (
    <canvas
      ref={previewCanvasRef}
      style={{
        border: "1px solid black",
        objectFit: "contain",
        width: completedCrop.width,
        height: completedCrop.height,
      }}
    />
  );
};

export default ReactImageCropCanvas;
