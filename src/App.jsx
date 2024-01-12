import "./App.css";
import { Navbar } from "./components/Navbar/Navbar"; // Navigation
import { Route, Routes } from "react-router-dom";
// Pages added to the navigation
import { Home, About, Projects, Contact } from "../src/pages";
import { ProjectDisplay } from "./pages/ProjectDisplay/ProjectDisplay";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDisplay />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;