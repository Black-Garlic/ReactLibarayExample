import React, { Dispatch, SetStateAction } from "react";

interface ReactPDFButtonProps {
  numPages: number;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
  pageScale: number;
  setPageScale: Dispatch<SetStateAction<number>>;
}

const ReactPDFButton = ({
  numPages,
  pageNumber,
  setPageNumber,
  pageScale,
  setPageScale,
}: ReactPDFButtonProps) => {
  return (
    <div>
      <p>
        Page {pageNumber} of {numPages}
      </p>

      <p>페이지 이동 버튼</p>
      <button
        onClick={() => {
          setPageNumber(numPages === pageNumber ? pageNumber : pageNumber + 1);
        }}
      >
        {" "}
        +
      </button>
      <button
        onClick={() => {
          setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1);
        }}
      >
        {" "}
        -
      </button>

      <p>페이지 스케일</p>
      <button
        onClick={() => {
          setPageScale(pageScale === 3 ? 3 : pageScale + 0.1);
        }}
      >
        {" "}
        +
      </button>
      <button
        onClick={() => {
          setPageScale(pageScale - 1 < 1 ? 1 : pageScale - 1);
        }}
      >
        {" "}
        -
      </button>
    </div>
  );
};

export default ReactPDFButton;
