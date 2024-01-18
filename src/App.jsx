import {Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Projects from "../src/Pages/Projects";
// import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>

        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

    </div>
  );
}

export default App;
