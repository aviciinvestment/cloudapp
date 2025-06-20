import React from "react";
import ReactDom from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
//react v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
