import React from 'react';
import Mapa from './MapSection';

function ContactForm() {
  return (
    // O container principal que centraliza tudo
    <div className="contato-container">
      
      {/* Container do Formulário */}
      <div className="form-container">
        <form>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" required />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="assunto">Assunto</label>
          <input type="text" id="assunto" name="assunto" required />

          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>

      {/* Container do Mapa */}
      <div className="mapa-container">
        <Mapa /> {/* Use seu componente Mapa aqui */}
      </div>

    </div>
  );
}

export default ContactForm