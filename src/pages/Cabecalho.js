import React from 'react';
import '../App.css';
import logo from '../imagens/LOGO.png';
import { Link } from 'react-router-dom';

function Cabecalho() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Tech Wave" className="logo" />
      <nav>
        <ul className="nav-list">
          <li>INÍCIO</li>
          <li>TECH WAVE</li>
          <li><Link to="/produtos">PRODUTOS</Link></li>
          <li>CONTATO</li>
          <li>PARCEIRO</li>
          <li><Link to="/cadastro">CADASTRO</Link></li>
          <li><Link to="/">LOGIN</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Cabecalho;
