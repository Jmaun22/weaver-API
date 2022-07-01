import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import HeatMapPage from "../src/pages/HeatMap";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Home" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="HeatMap" element={<HeatMapPage />} />
    </Routes>
  </BrowserRouter>
);