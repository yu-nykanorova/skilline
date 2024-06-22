import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import { AppRoutes } from "./routes/AppRoutes";
import { Header } from "./shared/Header/Header";
import { Footer } from "./shared/Footer/Footer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <AppRoutes />
    <Footer />
  </React.StrictMode>
)
