import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";


const string = "this is a string";

ReactDOM.render(<App value={ string } /> , document.getElementById("root"));
