import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/home/Home';
import AddProduct from './pages/addProd/addProd';
import AddCliente from './pages/addCliente/addCliente';
import AddVenda from './pages/addVenda/addVenda';
import AddProdVenda from './pages/addProdVenda/addProdVenda'

function App () {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/addprod" element={<AddProduct/>} />
        <Route path="/addcliente" element={<AddCliente/>} />
        <Route path="/addvenda" element={<AddVenda/>} />
        <Route path="/addprodvenda" element={<AddProdVenda/>} />
      </Routes>
    </Router>
  );
};

export default App;
