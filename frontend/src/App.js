import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/home/Home';
import AddProduct from './pages/addProd';

function App () {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/addprod" element={<AddProduct/>} />
      </Routes>
    </Router>
  );
};

export default App;
