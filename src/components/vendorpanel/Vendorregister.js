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
    gender: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log(formData);
    // Navigate to another page after successful registration
    navigate('/vendor-dashboard');
  };

  return (
    <div className='ragister'>
    <div className="container">
      <div className="title">Registration</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
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
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default VendorRegister;