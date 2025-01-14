import React from "react";
import { createRoot } from "react-dom/client";
import RouterBlock from "./routerblock.jsx";
import Footer from "./footer.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterBlock />
    <Footer />
  </React.StrictMode>
);
