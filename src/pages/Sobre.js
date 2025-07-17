import React from 'react';
import Cabecalho from './Cabecalho';
import AboutSection from '../components/AboutSection';
import LogoCard from '../components/LogoCard';
import Fotter from '../components/Footer'

function Sobre() {
  return (
    <div>
      <Cabecalho />
      <div className="sobre-container">
        <AboutSection />
        <LogoCard />
      </div>
      <Fotter/>
    </div>
  );
}

export default Sobre;