import React, { useState } from 'react';

const SubscriptionPay = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
    plan: 'monthly', // Default plan
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Details:', paymentDetails);
    alert('Payment processed successfully!');
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Subscription Payment</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title mb-0">Payment Details</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="cardHolderName" className="form-label">
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardHolderName"
                    name="cardHolderName"
                    value={paymentDetails.cardHolderName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="expiryDate" className="form-label">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="expiryDate"
                      name="expiryDate"
                      value={paymentDetails.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cvv"
                      name="cvv"
                      value={paymentDetails.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="plan" className="form-label">
                    Select Plan
                  </label>
                  <select
                    className="form-select"
                    id="plan"
                    name="plan"
                    value={paymentDetails.plan}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="monthly">Monthly Plan - $10/month</option>
                    <option value="yearly">Yearly Plan - $100/year</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Pay Now
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h5 className="card-title mb-0">Order Summary</h5>
            </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">
                {paymentDetails.plan === 'monthly'
                  ? 'Monthly Plan'
                  : 'Yearly Plan'}
              </h6>
              <p className="card-text">
                {paymentDetails.plan === 'monthly'
                  ? '$10 per month'
                  : '$100 per year'}
              </p>
              <hr />
              <h5 className="card-title">Total Amount</h5>
              <p className="card-text fs-4">
                {paymentDetails.plan === 'monthly' ? '$10' : '$100'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPay;