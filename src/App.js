import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Produtos from './pages/Produtos'
import Parceiros from './pages/Parceiros';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produtos" element={<Produtos/>} />
        <Route path="/parceiro" element={<Parceiros/>} />
      </Routes>
    </Router>
  );
}

export default App;
