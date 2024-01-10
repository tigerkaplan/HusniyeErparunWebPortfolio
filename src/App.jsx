import "./App.css";
import { Navbar } from "../src/components/Header/Navbar";
// Navigation
import { Route, Routes } from "react-router-dom";
// Pages added to the navigation
import { Home, About, Portfolio, Contact } from "../src/pages";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
