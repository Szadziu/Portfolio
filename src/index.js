import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import BackgroundContextProvider from "./contexts/BackgroundContext";

ReactDOM.render(
  <React.StrictMode>
    <BackgroundContextProvider>
      <App />
    </BackgroundContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
