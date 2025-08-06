import Cabecalho from './Cabecalho';
import '../App.css';
import React, { useState } from 'react';
import Footer from '../components/Footer';

function CadastroFuncionarios() {
  const [funcionario, setFuncionario] = useState({
    nomeCompleto: '',
    cargo: '',
    salario: '',
    qualificacoes: '',
    cargaHoraria: '',
  });



  const handleChange = (e) => {
    setFuncionario({ ...funcionario, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Funcionário cadastrado:', funcionario);
  };

  return (
    <div>
      <Cabecalho />
      <div className="cadastro-container">
        <h2>Cadastro de Funcionários</h2>
        <form onSubmit={handleSubmit} className="cadastro-form">
          <input
            type="text"
            name="nomeCompleto"
            placeholder="Nome completo"
            value={funcionario.nomeCompleto}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cargo"
            placeholder="Cargo"
            value={funcionario.cargo}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="salario"
            placeholder="Salário (R$)"
            value={funcionario.salario}
            onChange={handleChange}
            required
          />
          <textarea
            name="qualificacoes"
            placeholder="Qualificações"
            value={funcionario.qualificacoes}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cargaHoraria"
            placeholder="Carga horária (ex: 40h/semana)"
            value={funcionario.cargaHoraria}
            onChange={handleChange}
            required
          />

          <button type="submit">Cadastrar Funcionário</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CadastroFuncionarios;
