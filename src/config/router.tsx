import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ReactPDFPage from "../react-pdf/ReactPDFPage";
import ReactFileViewerPage from "../react-file-viewer/ReactFileViewerPage";

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
]);
