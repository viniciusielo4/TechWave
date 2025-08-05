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
          <li><Link to="/home">INÍCIO</Link></li>
          <li><Link to="/sobre">TECH WAVE</Link></li>
          <li><Link to="/produtos">PRODUTOS</Link></li>
          <li><Link to= "/contato">CONTATO</Link></li>
          <li><Link to="/parceiro">PARCEIROS</Link></li>
          <li><Link to="/cadastro">CADASTRO</Link></li>
          <li><Link to="/">LOGIN</Link></li>
          <li><Link to="/cadastroprodutos">CADASTRAR PRODUTOS</Link></li>

        </ul>
      </nav>
    </header>
  );
}

export default Cabecalho;
