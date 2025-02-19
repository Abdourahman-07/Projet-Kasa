import React from "react";
import { createRoot } from "react-dom/client";
import RouterBlock from "./router/RouterBlock.jsx";
import Footer from "./components/Footer.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterBlock />
    <Footer />
  </React.StrictMode>
);
