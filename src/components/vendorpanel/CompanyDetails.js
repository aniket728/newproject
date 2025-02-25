import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api_url } from '../../helpers/api_helper';

const VendorRegister = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    mobile: '',
    gender: '',
    companyName: '',
    gstNumber: '',
    postalCode: '',
    companyPhone: '',
    companyEmail: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const storeVendorData = async () => {
    try {
      const response = await fetch(`${api_url}/api/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile: formData.mobile,
          mail: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          gender: formData.gender,
          dateOfBirth: formData.dateOfBirth,
          username: formData.username,
          companyName: formData.companyName,
          gstNumber: formData.gstNumber,
          postalCode: formData.postalCode,
          companyPhone: formData.companyPhone,
          companyEmail: formData.companyEmail,
          
        }),
      });

   

    
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to fetch. Please check your network or server.');
    }
  };
  const storecompanyData = async () => {
    try {
      const response = await fetch(`${api_url}/api/company`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyName: formData.companyName,
          gstNumber: formData.gstNumber,
          postalCode: formData.postalCode,
          companyPhone: formData.companyPhone,
          companyEmail: formData.companyEmail,
          
        }),
      });

      console.log('Response Status:', response.status);

      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        console.error('Invalid JSON response', jsonError);
        alert('Invalid response from server.');
        return;
      }

      console.log('Response Data:', result);

      if (response.ok) {
        navigate('/vendorlogin');
      } else {
        alert(result.message || 'Failed to create user.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to fetch. Please check your network or server.');
    }
  };

  return (
    <section style={{ display: 'flex', height: '100vh', width: '100vw', margin: 0, padding: 0 }}>
      {/* Left Side Content */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa' }}>
        <div style={{ textAlign: 'center' }}>
          <figure style={{ margin: 0 }}>
            <img src="images/signin-image.jpg" alt="sign up image" style={{ maxWidth: '100%', height: 'auto' }} />
          </figure>
          <a href="#" style={{ display: 'inline-block', marginTop: '20px', color: '#007bff', textDecoration: 'none' }}>Create an account</a>
        </div>
      </div>

      {/* Right Side Registration Form */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderLeft: '1px solid #ccc', paddingLeft: '64px' }}>
        <div style={{ paddingRight: '58px', width: '377px', paddingTop: '315px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', color: '#333' }}>Sign up</h2>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            {step === 1 && (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-account material-icons-name" style={{ marginRight: '10px' }}></i>Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-lock" style={{ marginRight: '10px' }}></i>Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-lock" style={{ marginRight: '10px' }}></i>Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-account material-icons-name" style={{ marginRight: '10px' }}></i>First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="lastName" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-account material-icons-name" style={{ marginRight: '10px' }}></i>Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="gender" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-account material-icons-name" style={{ marginRight: '10px' }}></i>Gender
                  </label>
                  <input
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    placeholder="Gender"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-email" style={{ marginRight: '10px' }}></i>Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="dateOfBirth" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-calendar" style={{ marginRight: '10px' }}></i>Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="mobile" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-phone" style={{ marginRight: '10px' }}></i>Mobile
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="companyName" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-account material-icons-name" style={{ marginRight: '10px' }}></i>Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="gstNumber" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-account material-icons-name" style={{ marginRight: '10px' }}></i>GST Number
                  </label>
                  <input
                    type="text"
                    name="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleChange}
                    placeholder="GST Number"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="postalCode" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-account material-icons-name" style={{ marginRight: '10px' }}></i>Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="Postal Code"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
               
              </>
            )}
              {step === 5 && (
              <>
               
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="companyPhone" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-phone" style={{ marginRight: '10px' }}></i>Company Phone
                  </label>
                  <input
                    type="text"
                    name="companyPhone"
                    value={formData.companyPhone}
                    onChange={handleChange}
                    placeholder="Company Phone"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="companyEmail" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-email" style={{ marginRight: '10px' }}></i>Company Email
                  </label>
                  <input
                    type="email"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    placeholder="Company Email"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
              </>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Previous
                </button>
              )}
              {step < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={storeVendorData}
                  style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Save
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VendorRegister;