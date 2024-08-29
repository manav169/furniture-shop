import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import { Route,Routes } from "react-router-dom";

import Decor from "./pages/Decor";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header Component */}
      
      <Routes>
        <Route path="/" element={<Navbar/>} />
        {/* <Route path="/shopAll" element={} /> */}
        <Route path="/decor" element={<Decor />} />
        {/* <Route path="/livingRoom" element={} /> */}
        {/* <Route path="/bedroom" element={} /> */}
      </Routes>
      
    </>
  );
}

export default App;
