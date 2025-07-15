import React from 'react';
import Apple from '../imagens/apple.png';
import Motorola from '../imagens/motorola_apoio.png';
import Trocafy from '../imagens/trocafy.png';
import Samsung from '../imagens/samsung.png';
import JBL from '../imagens/JBL_apoio.png'; // 
import xbox from '../imagens/xbox_logo.png'
import '../App.css';
import Cabecalho from './Cabecalho';


function Parceiros() {
    return (
      <div>
        <Cabecalho />
        <div className="parceiros-container">
          <div className="parceiros-content">
            <h2 className="parceiros-titulo">Nossos melhores parceiros</h2>
            <p className="parceiros-texto">
            Na TechWave, acreditamos que grandes resultados são construídos com grandes parcerias. Por isso, temos orgulho de caminhar ao lado de marcas reconhecidas mundialmente pela inovação, qualidade e compromisso com a tecnologia.
            Nossos parceiros — como Samsung, Apple, Motorola, JBL, Trocafy e Xbox — são referência em seus segmentos e compartilham conosco o objetivo de transformar a experiência tecnológica dos nossos clientes.
            </p>
            <button className="parceiros-botao">Saiba mais</button>
          </div>
          <div className="parceiros-logos">
            <img src={Trocafy} alt="Trocafy" className="logo-img" />
            <img src={JBL} alt="JBL" className="logo-img" />
            <img src={Samsung} alt="Samsung" className="logo-img" />
            <img src={Motorola} alt="Motorola" className="logo-img" />
            <img src={Apple} alt="Apple" className="logo-img" />
            <img src={xbox} alt="xcaixa" className="logo-img" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Parceiros;
