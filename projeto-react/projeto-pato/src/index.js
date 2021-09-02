import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import App, { Button, Pato } from "./app";

ReactDOM.render(
  <React.StrictMode>
    <Pato />
    <Button />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);