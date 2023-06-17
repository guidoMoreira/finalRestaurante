import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

function AdicionarCliente() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/clientes', {
        nome,
        cpf,
      });

      setMensagem('Cliente cadastrado com sucesso!');
      setSucesso(true);

      setNome('');
      setCpf(''); 

      // Lógica adicional após o envio dos dados, se necessário

      console.log(response.data); // Exemplo: exibir a resposta do servidor
    } catch (error) {
      setMensagem('Ocorreu um erro ao cadastrar o cliente.');
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
                    <h1 className="h3 mb-4 text-gray-800">Cadastrar cliente</h1>

                    <div style={{ width: '50%'}}>
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label htmlFor="clientName">Nome</label>
                            <input
                                    className="form-control"
                                    type="text"
                                    name="clientName"
                                    value={nome}
                                    onChange={(event) => setNome(event.target.value)}
                                />
                          </div>
                          <div className="form-group">
                            <label htmlFor="clientCPF">CPF</label>
                            <input
                                placeholder='000.000.000-00'
                                className="form-control"
                                type="text"
                                name="clientCpf"
                                value={cpf}
                                onChange={(event) => setCpf(event.target.value)}
                            />
                          </div>
                          <input className="form-control" type="submit" value="Adicionar"/>
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

export default AdicionarCliente;
