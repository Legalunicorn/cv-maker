import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App.jsx";
import "./index.css";
import html2canvas from "html2canvas";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
