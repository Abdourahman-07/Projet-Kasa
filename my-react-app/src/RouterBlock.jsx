import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header";
import Home from "./Home/Home";
import About from "./About/about";
import Sheet from "./Sheet/Sheet";
import Error404 from "./Error404/Error404";

function RouterBlock() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Projet-Kasa" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sheet/:idLogement" element={<Sheet />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default RouterBlock;
