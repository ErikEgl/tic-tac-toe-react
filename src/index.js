import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContextProvider } from "./utils/useContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <AppContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContextProvider>,
  document.getElementById("root")
);
