import {Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
// import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import "./App.css";

function App() {
  return (
    <div>

        <Sidebar />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

    </div>
  );
}

export default App;
