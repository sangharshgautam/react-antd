import React from "react";
import ReactDOM from "react-dom";
import { DatePicker } from "antd";
import { Button } from "antd";

import "./styles.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <DatePicker />
      <Button>Hello world!</Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
