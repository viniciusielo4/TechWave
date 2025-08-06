import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Produtos from './pages/Produtos'
import Parceiros from './pages/Parceiros';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato'
import Home from './pages/Home';
import CadastroFuncionarios from './pages/CadastroFuncionarios';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produtos" element={<Produtos/>} />
        <Route path="/parceiro" element={<Parceiros/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/cadastrofuncionarios" element={<CadastroFuncionarios/>}/>
      </Routes>
    </Router>
  );
}

export default App;
