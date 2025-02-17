import React, { useState } from 'react';


const Vendorregister = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    country: '',
    companyName: '',
    gstNo: '',
    postalCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className='ragister'> 
    <div className="container">
      <header>Vendor Registration</header>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="form personal">
            <span className="title">Personal Information</span>
            <div className="fields">
              <div className="input-field">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            <button type="button" className="nextBtn" onClick={nextStep}>
              <span className="btnText">Next</span>
              <i className="uil uil-navigator"></i>
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="form address">
            <span className="title">Address Details</span>
            <div className="fields">
              <div className="input-field">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter your state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter your country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="buttons">
              <button type="button" className="backBtn" onClick={prevStep}>
                <i className="uil uil-navigator"></i>
                <span className="btnText">Back</span>
              </button>
              <button type="button" className="nextBtn" onClick={nextStep}>
                <span className="btnText">Next</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form company">
            <span className="title">Company Details</span>
            <div className="fields">
              <div className="input-field">
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Enter your company name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label>GST No</label>
                <input
                  type="text"
                  name="gstNo"
                  placeholder="Enter your GST number"
                  value={formData.gstNo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Enter your postal code"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="buttons">
              <button type="button" className="backBtn" onClick={prevStep}>
                <i className="uil uil-navigator"></i>
                <span className="btnText">Back</span>
              </button>
              <button type="submit" className="submitBtn">
                <span className="btnText">Submit</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
    </div>
  );
};

export default Vendorregister;