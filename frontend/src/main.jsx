import React from "react";
import ReactDOM from "react-dom/client"; // Use ReactDOM.createRoot for React 18
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Make sure this path is correct
import "./index.css"; // Your global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
