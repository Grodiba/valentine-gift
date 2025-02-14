import React from "react";
import ReactDOM from "react-dom/client"; // ใช้ react-dom/client แทน react-dom
import "./index.css";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ใช้ createRoot แทน render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
