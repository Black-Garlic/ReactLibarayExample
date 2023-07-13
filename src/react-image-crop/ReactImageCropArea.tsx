import ReactCrop, { Crop, PixelCrop } from "react-image-crop";
import React, { Dispatch, SetStateAction, useCallback } from "react";

interface ReactImageCropAreaProps {
  imgSrc: any;
  imgRef: any;
  crop: Crop | undefined;
  setCrop: Dispatch<SetStateAction<Crop | undefined>>;
  setCompletedCrop: Dispatch<SetStateAction<PixelCrop | undefined>>;
  scale: number;
  rotate: number;
  aspect: number | undefined;
  centerAspectCrop: any;
}

const ReactImageCropArea = ({
  imgSrc,
  imgRef,
  crop,
  setCrop,
  setCompletedCrop,
  scale,
  rotate,
  aspect,
  centerAspectCrop,
}: ReactImageCropAreaProps) => {
  const onImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      if (aspect) {
        const { width, height } = e.currentTarget;
        setCrop(centerAspectCrop(width, height, aspect));
      }
    },
    [aspect, centerAspectCrop, setCrop],
  );

  return (
    <ReactCrop
      crop={crop}
      onChange={(_, percentCrop) => setCrop(percentCrop)}
      onComplete={(c) => setCompletedCrop(c)}
      aspect={aspect}
    >
      <img
        ref={imgRef}
        alt="Crop me"
        src={imgSrc}
        style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
        onLoad={onImageLoad}
      />
    </ReactCrop>
  );
};

export default ReactImageCropArea;
