import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import AppRouter from "./Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
