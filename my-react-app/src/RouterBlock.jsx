import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header";
import Home from "./Home/home";
import About from "./About/about";
import Sheet from "./Sheet/sheet";
import Error404 from "./Error404/Error404";

function RouterBlock() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sheet" element={<Sheet />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default RouterBlock;
