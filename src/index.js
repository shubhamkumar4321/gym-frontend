import React from "react";
// import ReactDOM from "react-dom";
import {StrictMode} from 'react';
// import createRoot from "react-dom/client";
import {createRoot} from 'react-dom/client';
import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));
// createRoot(document.getElementById("root")).render(<App />)
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);