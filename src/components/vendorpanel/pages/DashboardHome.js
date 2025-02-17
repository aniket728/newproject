import React from 'react'

const DashboardHome = () => {
  return (
    <div className="py-4">
    <div className="row g-3">
      <div className="col-12 col-sm-6 col-lg-3">
        <a href="#" className="text-dark text-decoration-none bg-white p-3 rounded shadow-sm d-flex justify-content-between summary-primary">
          <div>
            <i className="ri-shopping-cart-2-line summary-icon bg-primary mb-2"></i>
            <div>Sales</div>
          </div>
          <h4>$435</h4>
        </a>
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <a href="#" className="text-dark text-decoration-none bg-white p-3 rounded shadow-sm d-flex justify-content-between summary-indigo">
          <div>
            <i className="ri-shopping-cart-2-line summary-icon bg-indigo mb-2"></i>
            <div>Sales</div>
          </div>
          <h4>$435</h4>
        </a>
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <a href="#" className="text-dark text-decoration-none bg-white p-3 rounded shadow-sm d-flex justify-content-between summary-success">
          <div>
            <i className="ri-shopping-cart-2-line summary-icon bg-success mb-2"></i>
            <div>Sales</div>
          </div>
          <h4>$435</h4>
        </a>
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <a href="#" className="text-dark text-decoration-none bg-white p-3 rounded shadow-sm d-flex justify-content-between summary-danger">
          <div>
            <i className="ri-shopping-cart-2-line summary-icon bg-danger mb-2"></i>
            <div>Sales</div>
          </div>
          <h4>$435</h4>
        </a>
      </div>
    </div>

    <div className="row g-3 mt-2">
      <div className="col-12 col-md-7 col-xl-8">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-header bg-white">Sales</div>
          <div className="card-body">
            <canvas id="sales-chart"></canvas>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-5 col-xl-4">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-header bg-white">Visitors</div>
          <div className="card-body">
            <canvas id="visitors-chart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DashboardHome