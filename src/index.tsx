import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "./assets/sass/main.scss";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <h1>Hello world</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
      perferendis corrupti odit, provident maxime laborum dolores. Voluptatem
      officia a tenetur qui blanditiis, minus porro eaque culpa voluptates nisi
      quos recusandae!
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
