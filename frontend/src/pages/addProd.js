import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';

function AdicionarProduto() {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('comida');
  const [valor, setValor] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/produtos', {
        nome,
        categoria,
        valor,
      });

      setMensagem('Produto cadastrado com sucesso!');
      setSucesso(true);

      setNome('');
      setCategoria('comida');
      setValor(''); 

      // Lógica adicional após o envio dos dados, se necessário

      console.log(response.data); // Exemplo: exibir a resposta do servidor
    } catch (error) {
      setMensagem('Ocorreu um erro ao cadastrar o produto.');
      setSucesso(false);
      console.error(error);
    }
  };

  return (
    <div id="wrapper" style={{ display: 'flex' }}>
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Navbar />
                <div className="container-fluid">
                    <h1 className="h3 mb-4 text-gray-800">Adicionar produtos</h1>
                    <div style={{ width: '50%' }}>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="prodName">Nome</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="prodName"
                                    value={nome}
                                    onChange={(event) => setNome(event.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="prodCategory">Categoria</label>
                                <select
                                    className="form-control"
                                    name="prodCategory"
                                    value={categoria}
                                    onChange={(event) => setCategoria(event.target.value)}
                                >
                                    <option value="comida">Comida</option>
                                    <option value="bebida">Bebida</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="prodPrice">Preço</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    min="0.00"
                                    max="10000.00"
                                    step="0.01"
                                    id="prodPrice"
                                    name="prodPrice"
                                    value={valor}
                                    onChange={(event) => setValor(event.target.value)}
                                />
                            </div>
                            <input className="form-control" type="submit" value="Adicionar" />
                        </form>
                    </div>
                    {mensagem && (
                      <div className={`alert ${sucesso ? 'alert-success' : 'alert-danger'}`} role="alert">
                        {mensagem}
                      </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
}

export default AdicionarProduto;
