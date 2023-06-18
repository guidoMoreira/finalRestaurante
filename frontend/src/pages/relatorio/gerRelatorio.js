import React, { useState } from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function GerarRelatorio() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reportData, setReportData] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);
  
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const generateReport = () => {
    // Fazer consulta de vendas com datas aqui
    const response = await axios.get(`/api/relatorio?startDate=${startDate}&endDate=${endDate}`);
    setReportData(response.data);
  };

  return (
   <div id="wrapper" style={{ display: 'flex' }}>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Gerar Relatório</h1>
            <div style={{ width: '50%' }}>
              <form>
                <div className="form-group">
                  <label htmlFor="startDate">Data de Início</label>
                  <input
                    className="form-control"
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={startDate}
                    onChange={handleStartDateChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endDate">Data de Fim</label>
                  <input
                    className="form-control"
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={endDate}
                    onChange={handleEndDateChange}
                  />
                </div>
                <button className="btn btn-primary" onClick={generateReport}>Gerar Relatório</button>
              </form>
            </div>
            {mensagem && (
              <div className={`alert ${sucesso ? 'alert-success' : 'alert-danger'}`} role="alert">
                {mensagem}
              </div>
            )}
            <h2>Relatório</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Data</th>
                  <th>Vendas</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{item.sales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GerarRelatorio;
