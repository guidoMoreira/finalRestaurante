import React from 'react';
import Navbar from '../navbar/Navbar';


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Dashboard</h1>
        <div className="dashboard">
          <div className="dashboard-section">
            <h2>Balance</h2>
            {/* Coloque aqui o componente BalanceCard ou outro componente adequado */}
            <p>Placeholder para BalanceCard</p>
          </div>
          <div className="dashboard-section">

          </div>
          <div className="dashboard-section">
            <h2>Product Table</h2>
            {/* Coloque aqui o componente ProductTable ou outro componente adequado */}
            <p>Placeholder para ProductTable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
