import React from 'react';

const Sidebar = () => {
  return (
    <div>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon">
                    <img src="img/pdoalunoIcon.png" alt="icon" width="40rem"/>
                </div>
                <div className="sidebar-brand-text mx-3"> P do Aluno </div>
            </a>

            <hr className="sidebar-divider my-0"/>

            <li className="nav-item">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Interface
            </div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cubes"></i>
                    <span>Produtos</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <a className="collapse-item" href="addProd.html">Adicionar produtos</a>
                        <a className="collapse-item" href="seeProd.html">Ver produtos</a>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseVendas"
                    aria-expanded="true" aria-controls="collapseVendas">
                    <i className="fas fa-fw fa-credit-card"></i>
                    <span>Vendas</span>
                </a>
                <div id="collapseVendas" className="collapse" aria-labelledby="headingVendas"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <a className="collapse-item" href="addVenda">Cadastrar Vendas</a>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseVendas"
                    aria-expanded="true" aria-controls="collapseCliente">
                    <i className="fas fa-fw fa-user"></i>
                    <span>Clientes</span>
                </a>
                <div id="collapseCliente" className="collapse" aria-labelledby="headingCliente"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <a className="collapse-item" href="addCliente">Cadastrar Cliente</a>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseRelatorios"
                    aria-expanded="true" aria-controls="collapseRelatorios">
                    <i className="fas fa-fw fa-book"></i>
                    <span>Relatórios</span>
                </a>
                <div id="collapseRelatorios" className="collapse" aria-labelledby="headingRelatorios"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <a className="collapse-item" href="seeRelat.html">Emitir relatório</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  );
};

export default Sidebar;