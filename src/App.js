import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Produtos from './pages/Produtos'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produtos" element={<Produtos/>} />
      </Routes>
    </Router>
  );
}

export default App;
