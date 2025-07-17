import React, { useState, useEffect } from 'react';
import '../App.css';

// Import images from imgs folder
import iconElectronics from '../imagens/eletronicos.png';
import iconAccessories from '../imagens/acessorios.png';
import iconSales from '../imagens/muitas vendas.png';
// Carrosel
import carrossel1 from '../imagens/carrossel1.png';
import carrossel2 from '../imagens/carrossel2.png';
import carrossel3 from '../imagens/carrossel.png';
//Components
import Cabecalho from './Cabecalho';
import Footer from '../components/Footer';

const slides = [
  carrossel1,
  carrossel2,
  carrossel3,
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 500); // duration of fade out
    }, 3500); // total duration including fade
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setFade(true);
    }, 500);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 500);
  };

  const goToSlide = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setFade(true);
    }, 500);
  };

  return (
    <>
      <div className="home-container">
        {/* Removed old header */}
        <Cabecalho />

        <section className="carousel">
          <button className="arrow left-arrow" onClick={prevSlide} aria-label="Previous Slide">&#10094;</button>
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className={`slide-image ${fade ? 'fade-in' : 'fade-out'}`}
          />
          <button className="arrow right-arrow" onClick={nextSlide} aria-label="Next Slide">&#10095;</button>
          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="features">
          <div className="feature-item">
            <img src={iconElectronics} alt="Eletrônicos" />
            <p>Eletrônicos.</p>
          </div>
          <div className="feature-item">
            <img src={iconAccessories} alt="Acessórios" />
            <p>Acessórios.</p>
          </div>
          <div className="feature-item">
            <img src={iconSales} alt="Muitas vendas" />
            <p>Muitas vendas.</p>
          </div>
        </section>

        <section className="contact">
          <div className="contact-info">
            <p>+55 XX-XXXX-XXXX</p>
            <p>Rua. Coxa Azul 201</p>
          </div>
          <div className="map">
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890123!2d-46.63330968450001!3d-23.550520184681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c123456789%3A0x123456789abcdef!2sRua%20Coxa%20Branca%20201!5e0!3m2!1sen!2sbr!4v1689420000000!5m2!1sen!2sbr"
              width="420"
              height="200"
              style={{ border: 0, borderRadius: '10px', boxShadow: '0 0 15px rgba(0,0,0,0.15)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;