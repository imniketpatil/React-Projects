import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Hero from "./components/Hero";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Hero />
  </React.StrictMode>
);
