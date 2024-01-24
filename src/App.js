import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Inicio from "./Pages/Inicio/inicio.jsx";
import Footer from "./components/footer/footer";
import Nodejs from "./Pages/NodeJs/nodejs.jsx";
import Javascript from "./Pages/javascript/javascript";
import Html from "./Pages/html/html";
import Css from "./Pages/css/css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/nodejs' element={<Nodejs />} />
        <Route path='/javascript' element={<Javascript />} />
        <Route path='/html' element={<Html />} />
        <Route path='/css' element={<Css />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
