import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ReactPDFPage from "../libraries/react-pdf/ReactPDFPage";
import ReactFileViewerPage from "../libraries/react-file-viewer/ReactFileViewerPage";
import ReactImageCropPage from "../libraries/react-image-crop/ReactImageCropPage";
import ReactDnDSinglePage from "../libraries/react-beautiful-dnd/single/ReactDnDSinglePage";
import ReactDnDMultiPage from "../libraries/react-beautiful-dnd/multi/ReactDnDMultiPage";
import TipTapEditorPage from "../libraries/tiptap/editor-bar/TipTapEditorPage";
import TipTapSimplePage from "../libraries/tiptap/simple/TipTapSimplePage";

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
  {
    path: "/tiptap/simple",
    element: <TipTapSimplePage />,
  },
  {
    path: "/tiptap/editor",
    element: <TipTapEditorPage />,
  },
]);
