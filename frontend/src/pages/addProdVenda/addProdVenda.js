import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

const idPedido = localStorage.getItem('idPedido');
const cpfCliente = localStorage.getItem('cpfCliente');

function FinalizarVenda() {
  const [produto, setProduto] = useState('');
  const [valor_total, setValorTotal] = useState(0);
  const [listProd, setListProd] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const [vendaFinalizada, setVendaFinalizada] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const response = await axios.post('http://localhost:3001/itens-pedido', {
        pedido: parseInt(idPedido),
        produtos: carrinho.map((product) => ({
          id: product.id,
        }),
        ),
        quantidade: 0,
      });
      
      const produtoSelecionado = listProd.find((p) => p.id === parseInt(produto));
      setCarrinho([...carrinho, produtoSelecionado]);

      setMensagem('Produto cadastrado com sucesso!');
      setVendaFinalizada(true);

      setSucesso(true);
      setValorTotal(0);

      // Lógica adicional após o envio dos dados, se necessário
      console.log(response.data); // Exemplo: exibir a resposta do servidor

    } catch (error) {
      setMensagem('Ocorreu um erro ao cadastrar o produto.');
      setSucesso(false);
      console.error(error);
    }
  };

  const handleAddToCart = (event) => {
    event.preventDefault();

    const produtoSelecionado = listProd.find((p) => p.id === parseInt(produto));
    setCarrinho([...carrinho, produtoSelecionado]);
    setProduto('');
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/produtos')
      .then((response) => {
        setListProd(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div id="wrapper" style={{ display: 'flex' }}>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Adicionar produtos à sua venda</h1>
            <div>
              <form style={{ width: '45%' }}>
                <div className="form-group">
                  <label htmlFor="prod">Produto</label>
                  <div style={{ display: 'flex' }}>
                    <select
                      className="form-control"
                      name="prod"
                      value={produto}
                      onChange={(event) => setProduto(event.target.value)}
                    >
                      <option value="">Selecione um produto</option>
                      {listProd.length > 0 ? (
                        listProd.map((produto) => (
                          <option key={produto.id} value={produto.id}>
                            {produto.nome}
                          </option>
                        ))
                      ) : (
                        <option value="">Carregando produtos...</option>
                      )}

                    </select>
                    <button className="btn btn-success" onClick={handleAddToCart}>
                      Adicionar
                    </button>
                  </div>
                </div>
                <ul>
                  {carrinho.map((product) => (
                    product ? (
                      <li key={product.id}>{product.nome}</li>
                    ) : null
                  ))}
                </ul>

                <input className="form-control" type="submit" value="Finalizar venda" onClick={handleSubmit} />
              </form>
              {vendaFinalizada && (
                <div>
                  <p>Venda finalizada com sucesso!</p>
                  <button className="btn btn-primary" onClick={() => window.location.href = '/'}>
                    Retornar para a home
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalizarVenda;
