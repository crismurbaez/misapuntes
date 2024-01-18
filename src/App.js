import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


import Navbar from "./components/navbar/navbar";
import Inicio from "./components/Inicio/inicio";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
