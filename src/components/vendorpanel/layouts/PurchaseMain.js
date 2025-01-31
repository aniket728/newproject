import React from 'react';
import { Link } from 'react-router-dom';

const PurchaseMain = () => {
  return (
    <div className="container-fluid">
      <header className="bg-surface-primary border-bottom pt-6">
        <div className="row align-items-center">
          <div className="col-sm-6 col-12 mb-4 mb-sm-0">
            <h1 className="h2 mb-0 ls-tight">Purchase Management</h1>
          </div>
        </div>
      </header>

      <main className="py-6 bg-surface-secondary">
        <div className="row g-6">
          <div className="col-xl-4 col-sm-6 col-12">
            <Link to="/purchase/order" className="card shadow border-0 text-decoration-none">
              <div className="card-body text-center">
                <h3 className="h5">Purchase Orders</h3>
                <p className="text-muted">Manage purchase orders</p>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-sm-6 col-12">
            <Link to="/purchase/invoice" className="card shadow border-0 text-decoration-none">
              <div className="card-body text-center">
                <h3 className="h5">Purchase Invoices</h3>
                <p className="text-muted">Manage purchase invoices</p>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-sm-6 col-12">
            <Link to="/purchase/return" className="card shadow border-0 text-decoration-none">
              <div className="card-body text-center">
                <h3 className="h5">Purchase Returns</h3>
                <p className="text-muted">Manage purchase returns</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PurchaseMain;