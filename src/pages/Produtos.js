import React from 'react';
import '../App.css';
import Cabecalho from './Cabecalho';
import produto1 from '../imagens/caixa1.jpg';
import produto2 from '../imagens/caixa2.jpg';
import produto3 from '../imagens/jbl.jpg';
import produto4 from '../imagens/iphone1.jpg';
import produto5 from '../imagens/iphone2.jpg';
import produto6 from '../imagens/motorola.jpg';
import produto7 from '../imagens/note.jpg';
import produto8 from '../imagens/note2.jpg';
import produto9 from '../imagens/pc.jpg';
import Produto10 from '../imagens/XcaixaGame.jpg'
import Produto11 from '../imagens/Xbox_one.jpg'
import Produto12 from '../imagens/controle_xbox.jpg'
import Produto13 from '../imagens/airpods.jpg'
import Produto14 from '../imagens/TV.jpg'

function Produtos() {
  const produtos = [
    {
      nome: 'Caixa de som genérica',
      imagem: produto1,
      precoAntigo: 399.90,
      precoAtual: 269.90,
      parcelas: '12x de R$ 22,49 sem juros'
    },
    {
      nome: 'Caixa de som genérica',
      imagem: produto2,
      precoAntigo: 499.90,
      precoAtual: 299.90,
      parcelas: '12x de R$ 24,99 sem juros'
    },
    {
      nome: 'Caixa de som JBL',
      imagem: produto3,
      precoAntigo: 299.90,
      precoAtual: 269.90,
      parcelas: '12x de R$ 22,49 sem juros'
    },
    {
      nome: 'iPhone',
      imagem: produto4,
      precoAntigo: 3999.90,
      precoAtual: 3599.90,
      parcelas: '12x de R$ 299,99 sem juros'
    },
    {
      nome: 'iPhone',
      imagem: produto5,
      precoAntigo: 4299.90,
      precoAtual: 3799.90,
      parcelas: '12x de R$ 316,66 sem juros'
    },
    {
      nome: 'Motorola',
      imagem: produto6,
      precoAntigo: 1899.90,
      precoAtual: 1599.90,
      parcelas: '12x de R$ 133,33 sem juros'
    },
    {
      nome: 'Notebook',
      imagem: produto7,
      precoAntigo: 2599.90,
      precoAtual: 2299.90,
      parcelas: '12x de R$ 191,66 sem juros'
    },
    {
      nome: 'Notebook Gamer',
      imagem: produto8,
      precoAntigo: 4599.90,
      precoAtual: 4199.90,
      parcelas: '12x de R$ 349,99 sem juros'
    },
    {
      nome: 'PC',
      imagem: produto9,
      precoAntigo: 2199.90,
      precoAtual: 1899.90,
      parcelas: '12x de R$ 158,33 sem juros'
    },
    {
      nome: 'Xbox series X',
      imagem: Produto10,
      precoAntigo: 5890.90,
      precoAtual: 5499.90,
      parcelas: '12x de R$ 458.32 sem juros'
    },
    {
      nome: 'Xbox one',
      imagem: Produto11,
      precoAntigo: 2800.90,
      precoAtual: 2499.90,
      parcelas: '12x de R$ 208.32 sem juros'
    },
    {
      nome: 'Controle Xbox one verde',
      imagem: Produto12,
      precoAntigo: 400.90,
      precoAtual: 300.90,
      parcelas: '12x de R$ 25 sem juros'
    },
    {
      nome: 'Air pods Pro',
      imagem: Produto13,
      precoAntigo: 2599.90,
      precoAtual: 2499.90,
      parcelas: '12x de R$ 208.32 sem juros'
    },
    {
      nome: 'Smart TV samsung 65"',
      imagem: Produto14,
      precoAntigo: 3199.90,
      precoAtual: 2800.99,
      parcelas: '12x de R$ 233.41 sem juros'
    }
  ];

  return (
    <>
      <Cabecalho />
      <div className="produtos-container">
        <h2 className="titulo-produtos">Nossos Produtos</h2>
        <div className="produtos-grid">
          {produtos.map((produto, index) => {
            const desconto = Math.round(
              ((produto.precoAntigo - produto.precoAtual) / produto.precoAntigo) * 100
            );
            return (
              <div key={index} className="produto-card">
                <div className="top-icons">
                  <span className="desconto">{desconto}% OFF</span>
                  <span className="coracao">♥</span>
                </div>
                <img src={produto.imagem} alt={produto.nome} />
                <div className="avaliacao">★★★★★ (0)</div>
                <h3>{produto.nome}</h3>
                <p className="preco-antigo">R$ {produto.precoAntigo.toFixed(2)}</p>
                <p className="preco-atual">R$ {produto.precoAtual.toFixed(2)}</p>
                <p className="parcelas">{produto.parcelas}</p>
                <button className="botao-comprar">Comprar</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Produtos;
