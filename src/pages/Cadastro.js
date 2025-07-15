import React from 'react';
import '../App.css';
import Cabecalho from './Cabecalho';
import { Link } from 'react-router-dom';

function Cadastro() {
  return (
    <>
     <Cabecalho />
      <div className="auth-container">
        <div className="auth-box">
          <div className="form-section">
            <h2>Cadastro</h2>
            <form>
              <input type="email" placeholder="E-mail" />
              <input type="text" placeholder="Nome Completo" />
              <input type="password" placeholder="Senha" />
              <input type="password" placeholder="Confirmar Senha" />
              <button type="submit"><Link to="/">Cadastrar</Link></button>
            </form>
          </div>
          <div className="info-section">
            <h2>Seja Bem Vindo</h2>
            <p>Cadastre seus dados para acessar o site!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
