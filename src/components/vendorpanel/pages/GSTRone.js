import React from 'react'
import { Link } from 'react-router-dom';

const GSTRone  = () => {
    const transactions = [
        // { id: 1, date: '2023-10-01', customer: 'John Doe', amount: 1500, status: 'Completed' },
        // { id: 2, date: '2023-10-02', customer: 'Jane Smith', amount: 2500, status: 'Pending' },
        // { id: 3, date: '2023-10-03', customer: 'Alice Johnson', amount: 3500, status: 'Completed' },
        // { id: 4, date: '2023-10-04', customer: 'Bob Brown', amount: 4500, status: 'Failed' },
    ];
  return (
    <>

            {/* Transactions Table */}
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead style={{padding: "12px 10px", background: "#e9ecef", fontweight: "bold"}}>
                        <tr>
                            <th>GSTIN</th>
                            <th>Party Name</th>
                            <th>Type</th>
                            <th>Invoice No</th>
                            <th>Invoice Date</th>
                            <th>Taxable Value</th>
                            <th>Rate</th>
                            <th>CGST</th>
                            <th>SGST</th>
                            <th>Invoice Value</th>
                            <th>Place of Supply</th>
                            
                        </tr>
                    </thead>
                <tbody >
                  {transactions.length === 0 ? (
                        <tr style={{background: "#fff"}}>
                            <td colSpan="6" className="text-center">No transactions found</td>
                        </tr>
                  ) : (
                    transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.customer}</td>
                        </tr>
                    ))
                  )}
                </tbody>
                </table>
            </div>

            {/* Pagination */}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                            Previous
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
    </>
  )
}

export default GSTRone