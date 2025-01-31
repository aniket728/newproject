import React from 'react';

const PurchaseOrder = () => {
  return (
    <div className="container-fluid">
      <header className="bg-surface-primary border-bottom pt-6">
        <div className="row align-items-center">
          <div className="col-sm-6 col-12 mb-4 mb-sm-0">
            <h1 className="h2 mb-0 ls-tight">Purchase Orders</h1>
          </div>
          <div className="col-sm-6 col-12 text-sm-end">
            <div className="mx-n1">
              <a href="#" className="btn d-inline-flex btn-sm btn-primary mx-1">
                <span className="pe-2">
                  <i className="bi bi-plus"></i>
                </span>
                <span>Create Purchase Order</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="py-6 bg-surface-secondary">
        <div className="card shadow border-0">
          <div className="card-header">
            <h5 className="mb-0">Purchase Orders List</h5>
          </div>
          <div className="table-responsive">
            <table className="table table-hover table-nowrap">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Supplier</th>
                  <th scope="col">Date</th>
                  <th scope="col">Total Amount</th>
                  <th scope="col">Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* Example row */}
                <tr>
                  <td>PO-001</td>
                  <td>Supplier A</td>
                  <td>2023-10-01</td>
                  <td>$1,000.00</td>
                  <td>
                    <span className="badge bg-soft-success text-success">Completed</span>
                  </td>
                  <td>
                    <a href="#" className="btn btn-sm btn-neutral">View</a>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PurchaseOrder;