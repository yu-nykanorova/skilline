import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import { AppRoutes } from "./routes/AppRoutes";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
