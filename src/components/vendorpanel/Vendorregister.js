import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { api_url } from '../../helpers/api_helper';

const VendorRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dateOfBirth: '',
    altMobile: '',
    whatsapp: '',
    maritalStatus: '',
    userNumber: '',
    nationality: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    jobTitle: '',
    salary: '',
    hireDate: '',
    terminationDate: '',
    trainingPeriod: '',
    terminationPeriod: '',
    remark: '',
    address: '',
  });

  const [step, setStep] = useState(1); // Step state for multi-step form
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCityChange = (selectedOption) => {
    setFormData({
      ...formData,
      city: selectedOption ? selectedOption.value : '',
    });
  };

  const handleStateChange = (selectedOption) => {
    setFormData({
      ...formData,
      state: selectedOption ? selectedOption.value : '',
    });
  };

  const handleNext = () => {
    if (step === 1) {
      // Validate step 1 fields before proceeding
      if (
        !formData.fullName ||
        !formData.username ||
        !formData.email ||
        !formData.phoneNumber ||
        !formData.password ||
        !formData.confirmPassword ||
        !formData.gender
      ) {
        alert('Please fill in all required fields.');
        return;
      }
    }
    setStep(step + 1); // Move to the next step
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log(formData);
    // Navigate to another page after successful registration
    navigate('/vendor-dashboard');
  };

  return (
    <div className="ragister">
      <div className="container">
        <div className="title">Registration</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Full Name</span>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Username</span>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Phone Number</span>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter your number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Confirm Password</span>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="gender-details">
                  <input
                    type="radio"
                    name="gender"
                    id="dot-1"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                  />
                  <input
                    type="radio"
                    name="gender"
                    id="dot-2"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                  />
                  <input
                    type="radio"
                    name="gender"
                    id="dot-3"
                    value="Prefer not to say"
                    checked={formData.gender === 'Prefer not to say'}
                    onChange={handleChange}
                  />
                  <span className="gender-title">Gender</span>
                  <div className="category">
                    <label htmlFor="dot-1">
                      <span className="dot one"></span>
                      <span className="gender">Male</span>
                    </label>
                    <label htmlFor="dot-2">
                      <span className="dot two"></span>
                      <span className="gender">Female</span>
                    </label>
                    <label htmlFor="dot-3">
                      <span className="dot three"></span>
                      <span className="gender">Prefer not to say</span>
                    </label>
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Date of Birth</span>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Alternate Mobile</span>
                    <input
                      type="text"
                      name="altMobile"
                      placeholder="Enter alternate mobile number"
                      value={formData.altMobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">WhatsApp Number</span>
                    <input
                      type="text"
                      name="whatsapp"
                      placeholder="Enter WhatsApp number"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Marital Status</span>
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Marital Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Widowed">Widowed</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">User Number</span>
                    <input
                      type="text"
                      name="userNumber"
                      placeholder="Enter user number"
                      value={formData.userNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Nationality</span>
                    <input
                      type="text"
                      name="nationality"
                      placeholder="Enter nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">City</span>
                    <Select
                      options={[
                        { value: 'New York', label: 'New York' },
                        { value: 'Los Angeles', label: 'Los Angeles' },
                        { value: 'Chicago', label: 'Chicago' },
                      ]}
                      onChange={handleCityChange}
                      placeholder="Select City"
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">State</span>
                    <Select
                      options={[
                        { value: 'California', label: 'California' },
                        { value: 'Texas', label: 'Texas' },
                        { value: 'Florida', label: 'Florida' },
                      ]}
                      onChange={handleStateChange}
                      placeholder="Select State"
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Pincode</span>
                    <input
                      type="text"
                      name="pincode"
                      placeholder="Enter pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Country</span>
                    <input
                      type="text"
                      name="country"
                      placeholder="Enter country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Job Title</span>
                    <input
                      type="text"
                      name="jobTitle"
                      placeholder="Enter job title"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Salary</span>
                    <input
                      type="number"
                      name="salary"
                      placeholder="Enter salary"
                      value={formData.salary}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Hire Date</span>
                    <input
                      type="date"
                      name="hireDate"
                      value={formData.hireDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Termination Date</span>
                    <input
                      type="date"
                      name="terminationDate"
                      value={formData.terminationDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Training Period</span>
                    <input
                      type="text"
                      name="trainingPeriod"
                      placeholder="Enter training period"
                      value={formData.trainingPeriod}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Termination Period</span>
                    <input
                      type="text"
                      name="terminationPeriod"
                      placeholder="Enter termination period"
                      value={formData.terminationPeriod}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Remark</span>
                    <input
                      type="text"
                      name="remark"
                      placeholder="Enter remark"
                      value={formData.remark}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Address</span>
                    <textarea
                      name="address"
                      placeholder="Enter address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div className="button">
              {step > 1 && (
                <button type="button" onClick={() => setStep(step - 1)}>
                  Previous
                </button>
              )}
              {step < 4 ? (
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              ) : (
                <button type="submit">Register</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorRegister;















































































































































































































































































































































































