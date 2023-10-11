import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
  <App
    name="Damien"
    imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png/200px-Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png"
  />
);
