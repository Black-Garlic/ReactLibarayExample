import React, { useState } from "react";
import MainTemplate from "../common/MainTemplate";
import ReactPDFButton from "./ReactPDFButton";
import ReactPDFRender from "./ReactPDFRender";

const ReactPDFPage = () => {
  const [numPages, setNumPages] = useState(0); // 총 페이지수
  const [pageNumber, setPageNumber] = useState(1); // 현재 페이지
  const [pageScale, setPageScale] = useState(1); // 페이지 스케일

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    console.log(`numPages ${numPages}`);
    setNumPages(numPages);
  };

  return (
    <MainTemplate>
      <ReactPDFRender
        onDocumentLoadSuccess={onDocumentLoadSuccess}
        pageNumber={pageNumber}
        pageScale={pageScale}
      />

      <ReactPDFButton
        numPages={numPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        pageScale={pageScale}
        setPageScale={setPageScale}
      />
    </MainTemplate>
  );
};

export default ReactPDFPage;
