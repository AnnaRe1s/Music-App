import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./Components/styles/Global.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import musicListReducer from "./Redux/Store";

import App from "./App";

const store = createStore(musicListReducer);
window.store = store;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
