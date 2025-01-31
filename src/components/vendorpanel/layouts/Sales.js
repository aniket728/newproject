import React from 'react'
import { Link } from 'react-router-dom'

const Sales = () => {
  return (
    <div className="container-fluid">
    <header className="bg-surface-primary border-bottom pt-6">
      <div className="row align-items-center">
        <div className="col-sm-6 col-12 mb-4 mb-sm-0">
          <h1 className="h2 mb-0 ls-tight">Sales Management</h1>
        </div>
      </div>
    </header>

    <main className="py-6 bg-surface-secondary">
      <div className="row g-6">
        <div className="col-xl-4 col-sm-6 col-12">
          <Link to="/sales/estimates" className="card shadow border-0 text-decoration-none">
            <div className="card-body text-center">
              <h3 className="h5">Sales Estimates</h3>
              <p className="text-muted">Manage sales estimates</p>
            </div>
          </Link>
        </div>
        <div className="col-xl-4 col-sm-6 col-12">
          <Link to="/sales/orders" className="card shadow border-0 text-decoration-none">
            <div className="card-body text-center">
              <h3 className="h5">Sales Orders</h3>
              <p className="text-muted">Manage sales orders</p>
            </div>
          </Link>
        </div>
        <div className="col-xl-4 col-sm-6 col-12">
          <Link to="/sales/delivery-challan" className="card shadow border-0 text-decoration-none">
            <div className="card-body text-center">
              <h3 className="h5">Delivery Challan</h3>
              <p className="text-muted">Manage delivery challans</p>
            </div>
          </Link>
        </div>
        <div className="col-xl-4 col-sm-6 col-12">
          <Link to="/sales/returns" className="card shadow border-0 text-decoration-none">
            <div className="card-body text-center">
              <h3 className="h5">Sales Returns</h3>
              <p className="text-muted">Manage sales returns</p>
            </div>
          </Link>
        </div>
        <div className="col-xl-4 col-sm-6 col-12">
          <Link to="/sales/credit-notes" className="card shadow border-0 text-decoration-none">
            <div className="card-body text-center">
              <h3 className="h5">Credit Notes</h3>
              <p className="text-muted">Manage credit notes</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  </div>
  )
}

export default Sales