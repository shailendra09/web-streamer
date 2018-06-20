import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

function ticker() {
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
}

setInterval(ticker, 1000);