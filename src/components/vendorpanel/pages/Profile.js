import React, { useState } from 'react';

const Profile = () => {
  const [accountDetails, setAccountDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails({
      ...accountDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Account Details:', accountDetails);
    alert('Account details updated successfully!');
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Account Settings</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={accountDetails.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={accountDetails.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={accountDetails.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={accountDetails.address}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={accountDetails.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="state" className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              value={accountDetails.state}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="postalCode" className="form-label">Postal Code</label>
            <input
              type="text"
              className="form-control"
              id="postalCode"
              name="postalCode"
              value={accountDetails.postalCode}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="country" className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              value={accountDetails.country}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Update Account</button>
      </form>
    </div>
  );
};

export default Profile;