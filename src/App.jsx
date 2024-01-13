import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar"; // Navigation
import { Route, Routes } from "react-router-dom";
// Pages added to the navigation
import { Home, About, Projects, Contact } from "../src/pages";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />          {/* //Hero section */}
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;