import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

function AdicionarVenda() {
  const [cliente, setCliente] = useState('');
  const [observacao, setObservacao] = useState('');
  const [valor_total, setValorTotal] = useState(0);
  const [listCli, setListCli] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {



      if(cliente == ""){
        throw new Error('Cliente sem nome, fabinho!');
      }

      const response = await axios.post('http://localhost:3001/pedidos', {
        cliente,
        observacao,
        valor_total: 0,
      });

      localStorage.setItem('idPedido', response.data.id);
      localStorage.setItem('cpfCliente', cliente);

      setMensagem('Produto cadastrado com sucesso!');
      setSucesso(true);

      setCliente('');
      setObservacao('');
      setValorTotal(0); 

      // Lógica adicional após o envio dos dados, se necessário

      console.log(response.data); // Exemplo: exibir a resposta do servidor

      navigate('/addProdVenda');

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
    axios.get('http://localhost:3001/clientes')
      .then(response => {
        setListCli(response.data);
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
                    <h1 className="h3 mb-4 text-gray-800">Iniciar Venda</h1>
                    <div>
                        <form style={{ width: '45%' }} onSubmit={handleSubmit}>
                              <div className="form-group">
                                  <label htmlFor="clientName">Cliente</label>
                                  <select
                                      className="form-control"
                                      name="clientName"
                                      value={cliente}
                                      onChange={(event) => setCliente(event.target.value)}
                                  >
                                    {listCli.map(cliente => (
                                      <option key={cliente.cpf} value={cliente.cpf}>{cliente.nome}</option>
                                    ))}
                                  </select>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="observation">Observação</label>
                                  <textarea
                                    className="form-control"
                                    type="text"
                                    name="observation"
                                    value={observacao}
                                    onChange={(event) => setObservacao(event.target.value)}
                                  />
                              </div>
                          <input className="form-control" type="submit" value="Próximo" />
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

export default AdicionarVenda;
