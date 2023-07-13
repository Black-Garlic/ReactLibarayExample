import React, { Dispatch, SetStateAction, useCallback } from "react";
import { Crop } from "react-image-crop";

interface ReactImageCropButtonProps {
  imgSrc: any;
  setImgSrc: Dispatch<SetStateAction<any>>;
  imgRef: any;
  setCrop: Dispatch<SetStateAction<Crop | undefined>>;
  scale: number;
  setScale: Dispatch<SetStateAction<number>>;
  rotate: number;
  setRotate: Dispatch<SetStateAction<number>>;
  aspect: number | undefined;
  setAspect: Dispatch<SetStateAction<number | undefined>>;
  centerAspectCrop: any;
}

const ReactImageCropButton = ({
  imgSrc,
  setImgSrc,
  imgRef,
  setCrop,
  scale,
  setScale,
  rotate,
  setRotate,
  aspect,
  setAspect,
  centerAspectCrop,
}: ReactImageCropButtonProps) => {
  const onSelectFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setCrop(undefined); // Makes crop preview update between images.
        const reader = new FileReader();
        reader.addEventListener("load", () =>
          // @ts-ignore
          setImgSrc(reader.result.toString() || ""),
        );
        reader.readAsDataURL(e.target.files[0]);
      }
    },
    [setCrop, setImgSrc],
  );

  const handleToggleAspectClick = useCallback(() => {
    if (aspect) {
      setAspect(undefined);
    } else if (imgRef.current) {
      const { width, height } = imgRef.current;
      setAspect(16 / 9);
      setCrop(centerAspectCrop(width, height, 16 / 9));
    }
  }, [aspect, centerAspectCrop, imgRef, setAspect, setCrop]);

  return (
    <div className="Crop-Controls">
      <input type="file" accept="image/*" onChange={onSelectFile} />

      <div>
        <label htmlFor="scale-input">Scale: </label>
        <input
          id="scale-input"
          type="number"
          step="0.1"
          value={scale}
          disabled={!imgSrc}
          onChange={(e) => setScale(Number(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="rotate-input">Rotate: </label>
        <input
          id="rotate-input"
          type="number"
          value={rotate}
          disabled={!imgSrc}
          onChange={(e) =>
            setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
          }
        />
      </div>

      <div>
        <button onClick={handleToggleAspectClick}>
          Toggle aspect {aspect ? "off" : "on"}
        </button>
      </div>
    </div>
  );
};

export default ReactImageCropButton;
