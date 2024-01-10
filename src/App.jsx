import "./App.css";
import { Navbar } from "../src/components/Header/Navbar";
// Navigation
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Pages added to the navigation
import { About } from "../src/pages/2.About/About";
import { Portfolio } from "./pages/3.Portfolio/Portfolio";
import { Contact } from "../src/pages/4.Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
