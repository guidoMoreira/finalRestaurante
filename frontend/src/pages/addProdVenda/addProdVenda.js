import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useSearchParams } from 'react-router-dom';


function FinalizarVenda() {
  const [produto, setProduto] = useState();
  const [valor_total, setValorTotal] = useState(0);
  const [listProd, setListProd] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [pedido, setPedido] = useState(0);
  const [sucesso, setSucesso] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const listaProdutos = [];

  function adicionaCarrinho(produto){
    listaProdutos.push(<option key={produto.id} value={produto.id}>{produto.nome}</option>);

  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      setPedido(parseInt(searchParams.get('id')).valueOf());

      const response = await axios.post('http://localhost:3001/itens-pedido', {
        pedido,
        produto,
        quantidade: 0,
      });

      setMensagem('Produto cadastrado com sucesso!');
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

  /*
  Função pra listar os clientes dinamicamente (pode ser usada pros produtos tmbm, assim q eu souber fazer)
  */
  useEffect(() => {
    axios.get('http://localhost:3001/produtos')
      .then(response => {
        setListProd(response.data);
      })
      .catch(error => {
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
              <form style={{ width: '45%' }} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="prod">Produto</label>
                  <div style={{ display: 'flex' }}>
                    <select
                      className="form-control"
                      name="prod"
                      value={produto}
                      onChange={(event) => setProduto(event.target.value)}
                    >
                      {listProd.map(produto => (
                        <option key={produto.id} value={produto.id}>{produto.nome}</option>
                      ))}
                    </select>
                    <button className='btn btn-success' onClick={adicionaCarrinho(produto)}>Adicionar</button>
                  </div>
                </div>
                <div>
                  <select
                    className='form-control'
                    name='itemProd'
                    value={[]}
                    size='10'
                    >
                      {listaProdutos}
                  </select>
                </div>
                <input className="form-control" type="submit" value="Finalizar venda" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalizarVenda;
