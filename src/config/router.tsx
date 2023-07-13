import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ReactPDFPage from "../react-pdf/ReactPDFPage";
import ReactFileViewerPage from "../react-file-viewer/ReactFileViewerPage";
import ReactImageCropPage from "../react-image-crop/ReactImageCropPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/react-pdf",
    element: <ReactPDFPage />,
  },
  {
    path: "/react-file-viewer",
    element: <ReactFileViewerPage />,
  },
  {
    path: "/react-image-crop",
    element: <ReactImageCropPage />,
  },
]);
