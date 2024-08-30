import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import { Route,Routes } from "react-router-dom";

import Decor from "./pages/Decor";

import Footer from "./components/footer/Footer";

import Hero from "./components/hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
    {/* Header Component */}


    <div className="content">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/decor" element={<Decor />} />
      </Routes>
    </div>

    <Hero />

    {/* Footer Component */}
    <Footer />

  </div>
  );
}

export default App;
