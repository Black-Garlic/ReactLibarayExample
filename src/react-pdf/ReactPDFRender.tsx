import { Document, Page, pdfjs } from "react-pdf";
import React from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface ReactPDFRenderProps {
  onDocumentLoadSuccess: any;
  pageNumber: number;
  pageScale: number;
}

const ReactPDFRender = ({
  onDocumentLoadSuccess,
  pageNumber,
  pageScale,
}: ReactPDFRenderProps) => {
  return (
    <div>
      <Document
        file="https://objectstorage.kr-central-1.kakaoi.io/v1/98e5f1e5eabd43dfabb0562475dc7bd7/kakaoi-dataverse-ai-contents/document/e7443209-b9a8-475b-9116-5cbc7cbf3ace.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          height={720}
          scale={pageScale}
          pageNumber={pageNumber}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
    </div>
  );
};

export default ReactPDFRender;
