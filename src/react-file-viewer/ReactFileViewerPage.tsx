import { useState } from "react";
// @ts-ignore
import FileViewer from "react-file-viewer";
import MainTemplate from "../common/MainTemplate";

const ReactFileViewerPage = () => {
  const [fileUrl, setFileUrl] = useState(
    "https://objectstorage.kr-central-1.kakaoi.io/v1/98e5f1e5eabd43dfabb0562475dc7bd7/kakaoi-dataverse-ai-contents/document%2F0d61a984-8415-4c52-8fae-4dc981f57997.docx",
  );

  const handleDownload = async () => {
    const response = await fetch(
      "https://objectstorage.kr-central-1.kakaoi.io/v1/98e5f1e5eabd43dfabb0562475dc7bd7/kakaoi-dataverse-ai-contents/document%2F0d61a984-8415-4c52-8fae-4dc981f57997.docx",
    );
    console.log(response);
    const blob = await response.blob();
    console.log(blob);
    const url = URL.createObjectURL(blob);
    console.log(url);
    setFileUrl(url);
  };

  return (
    <MainTemplate>
      <button onClick={handleDownload}>Download Docx</button>

      {fileUrl && <FileViewer fileType="docx" filePath={fileUrl} />}
    </MainTemplate>
  );
};

export default ReactFileViewerPage;
