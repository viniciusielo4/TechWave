import React from 'react';
import '../App.css';
import logo from '../imagens/LOGO.png';

function Cabecalho() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Tech Wave" className="logo" />
      <nav>
        <ul className="nav-list">
          <li>INÍCIO</li>
          <li>TECH WAVE</li>
          <li>PRODUTOS</li>
          <li>CONTATO</li>
          <li>PARCEIRO</li>
          <li>CADASTRO</li>
        </ul>
      </nav>
    </header>
  );
}

export default Cabecalho;
