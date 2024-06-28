import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./configs/reduxToolkit";
import { Provider } from "react-redux";
import "./styles/globals.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);