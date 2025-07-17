import React from 'react';
import Cabecalho from './Cabecalho';
import '../App.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <Cabecalho />
      <div className="auth-container">
        <div className="auth-box">
          <div className="form-section">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />
              <button type="submit"><Link to='/home'>Entrar</Link></button>
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

export default Login;
