import React from 'react';
import { Link, redirect } from 'react-router-dom';

const Subscription = () => {
  

  // Sample subscription history data
  const subscriptionHistory = [
    {
      id: 1,
      planName: 'Premium Plan',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      status: 'Active',
      amount: '$120',
    },
    {
      id: 2,
      planName: 'Basic Plan',
      startDate: '2022-01-01',
      endDate: '2022-12-31',
      status: 'Expired',
      amount: '$60',
    },
    {
      id: 3,
      planName: 'Trial Plan',
      startDate: '2021-01-01',
      endDate: '2021-01-31',
      status: 'Expired',
      amount: '$0',
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Subscription History</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Plan Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {subscriptionHistory.map((subscription) => (
              <tr key={subscription.id}>
                <td>{subscription.planName}</td>
                <td>{subscription.startDate}</td>
                <td>{subscription.endDate}</td>
                <td>
                  <span
                    className={`badge ${
                      subscription.status === 'Active'
                        ? 'bg-success'
                        : 'bg-secondary'
                    }`}
                  >
                    {subscription.status}
                  </span>
                </td>
                <td>{subscription.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4">
        <Link to='/plan'>
        <button
          className="btn btn-lg btn-warning upgrade-plan-button"
          
        >
          <span className="upgrade-icon">🚀</span> Upgrade Plan
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Subscription;