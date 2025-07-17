import React from 'react';
import '../App.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiPix, SiMastercard, SiVisa, SiAmericanexpress } from 'react-icons/si';
import { GiPadlock } from 'react-icons/gi';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Destaques</h4>
          <ul>
            <li>Black Friday</li>
            <li>Melhores preços Samsung</li>
            <li>Melhores preços iPhone</li>
            <li>Meu primeiro iPhone</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Dúvidas</h4>
          <ul>
            <li>Sobre nós</li>
            <li>Lojas Físicas</li>
            <li>Formas de Pagamento</li>
            <li>Entrega</li>
            <li>Trocas e Devoluções</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Fale Conosco</h4>
          <ul>
            <li><a href="mailto:techwave@gmail.com">techwave@gmail.com</a></li>
            <li>WhatsApp para Compras</li>
            <li>WhatsApp para Pós Venda</li>
            <li><em>Segunda a Sexta - 08h30 às 18h</em></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Buscas mais populares</h4>
          <ul>
            <li>iPhone 14</li>
            <li>iPhone</li>
            <li>S23</li>
            <li>iPhone 13</li>
            <li>S24</li>
            <li>S22</li>
            <li>S23 Ultra</li>
            <li>iPhone 15</li>
            <li>iPhone XR</li>
          </ul>
        </div>
        <div className="footer-column social-column">
          <h4>Redes Sociais</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="payment-methods">
          <SiPix title="Pix" size={30} />
          <SiMastercard title="Mastercard" size={30} />
          <SiVisa title="Visa" size={30} />
          <SiAmericanexpress title="American Express" size={30} />
        </div>
        <div className="security-badges">
          <GiPadlock title="Secure Site" size={30} />
          {/* You can add more icons here if needed */}
        </div>
      </div>
      <div className="footer-legal">
        Allied Tecnologia S/A - Rodovia Vice-Prefeito Hermenegildo Tonolli, Nº 1.500, Lote GLA2A, Galpão 05B, Distrito Industrial, CEP 13.213.086, Jundiaí/SP. CNPJ/ME Sob O Nº 20.247.322/0002-28 E Insc. Estadual: 407.531.264.111.
      </div>
    </footer>
  );
}

export default Footer;