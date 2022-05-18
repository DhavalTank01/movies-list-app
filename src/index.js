import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import CounterApp from "./Components/ConterApp";
import App from "./MoviesApp/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);