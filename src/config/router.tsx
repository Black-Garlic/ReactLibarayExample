import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ReactPDFPage from "../react-pdf/ReactPDFPage";
import ReactFileViewerPage from "../react-file-viewer/ReactFileViewerPage";
import ReactImageCropPage from "../react-image-crop/ReactImageCropPage";
import ReactDnDSinglePage from "../react-beautiful-dnd/single/ReactDnDSinglePage";
import ReactDnDMultiPage from "../react-beautiful-dnd/multi/ReactDnDMultiPage";

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
  {
    path: "/react-beautiful-dnd/single-vertical",
    element: <ReactDnDSinglePage />,
  },
  {
    path: "/react-beautiful-dnd/single-horizon",
    element: <ReactDnDSinglePage />,
  },
  {
    path: "/react-beautiful-dnd/multi-vertical",
    element: <ReactDnDMultiPage />,
  },
  {
    path: "/react-beautiful-dnd/multi-horizon",
    element: <ReactDnDMultiPage />,
  },
]);
