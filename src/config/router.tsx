import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ReactPDFPage from "../react-pdf/ReactPDFPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/react-pdf",
    element: <ReactPDFPage />,
  },
]);
