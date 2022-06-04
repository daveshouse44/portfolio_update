import { Navbar, Footer } from "./components";
import { About, Contact, Home, Portfolio } from "./pages";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
