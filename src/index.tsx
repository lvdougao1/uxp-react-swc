import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider, defaultTheme } from "@adobe/react-spectrum";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Provider theme={defaultTheme}>
      <App />
    </Provider>
  </React.StrictMode>
);
