import React from 'react'

const AllTransaction = () => {
  const transactions = [
    // { id: 1, date: '2023-10-01', customer: 'John Doe', amount: 1500, status: 'Completed' },
    // { id: 2, date: '2023-10-02', customer: 'Jane Smith', amount: 2500, status: 'Pending' },
    // { id: 3, date: '2023-10-03', customer: 'Alice Johnson', amount: 3500, status: 'Completed' },
    // { id: 4, date: '2023-10-04', customer: 'Bob Brown', amount: 4500, status: 'Failed' },
];
  return (
    <>
    <div className="WarehousesNav spaceB">
           <h4>Reports </h4>
           <div className="WarehousesNavButtons"> 
           <input type="text" placeholder="Search" />
            <input type="date" placeholder="Search" />

              <div data-coreui-locale="en-US" data-coreui-toggle="date-picker"></div>
           </div>
           <select className="form-select" aria-label="Default select example" style={{width: "200px"}}>
                <option value="1">Excel</option>
                <option value="2">PDF</option>

            </select>
        </div>
    <div>
            {/* Transactions Table */}
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead style={{padding: "12px 10px", background: "#f2f4fb", fontweight: "bold"}}>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Transaction Id</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Dues</th>
                            
                        </tr>
                    </thead>
                <tbody style={{background: "#ffffff"}}>
                  {transactions.length === 0 ? (
                        <tr>
                            <td colSpan="6" className="text-center">No transactions found</td>
                        </tr>
                  ) : (
                    transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.customer}</td>
                            <td>${transaction.amount}</td>
                            <td>
                                <span
                                    className={`badge ${
                                        transaction.status === 'Completed'
                                            ? 'bg-success'
                                            : transaction.status === 'Pending'
                                            ? 'bg-warning'
                                            : 'bg-danger'
                                    }`}
                                >
                                    {transaction.status}
                                </span>
                            </td>
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
        </div>
        </>
      
    )
}

export default AllTransaction