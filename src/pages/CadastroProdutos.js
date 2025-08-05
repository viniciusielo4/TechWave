import Cabecalho from './Cabecalho';
import '../App.css';
import React, { useState } from 'react';
import Footer from '../components/Footer';

function CadastroProdutos() {
    const [produto, setProduto] = useState({
      nome: '',
      descricao: '',
      preco: '',
      categoria: '',
      estoque: ''
    });
  
    const [imagem, setImagem] = useState(null);
    const [preview, setPreview] = useState(null);
  
    const handleChange = (e) => {
      setProduto({ ...produto, [e.target.name]: e.target.value });
    };
  
    const handleImagemChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImagem(file);
        setPreview(URL.createObjectURL(file));
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Produto cadastrado:', produto);
      console.log('Imagem selecionada:', imagem);
    };
  
    return (
      <div>
        <Cabecalho />
        <div className="cadastro-container">
          <h2>Cadastro de Produtos</h2>
          <form onSubmit={handleSubmit} className="cadastro-form">
            <input
              type="text"
              name="nome"
              placeholder="Nome do produto"
              value={produto.nome}
              onChange={handleChange}
              required
            />
            <textarea
              name="descricao"
              placeholder="Descrição"
              value={produto.descricao}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="preco"
              placeholder="Preço (R$)"
              value={produto.preco}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="categoria"
              placeholder="Categoria"
              value={produto.categoria}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="estoque"
              placeholder="Quantidade em estoque"
              value={produto.estoque}
              onChange={handleChange}
              required
            />
  
            <div className="imagem-upload">
              <label className="upload-label">
                Arraste ou selecione uma imagem
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImagemChange}
                />
              </label>
              {preview && (
                <img src={preview} alt="Preview" className="imagem-preview" />
              )}
            </div>
  
            <button type="submit">Cadastrar Produto</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default CadastroProdutos;
  