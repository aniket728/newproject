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
    gstNo: '',
    pincode: '',
    phoneNo: '',
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
          company: {
            companyName: formData.companyName,
            gstNo: formData.gstNo,
            pincode: formData.pincode,
            phoneNo: formData.phoneNo,
            email: formData.companyEmail,
            users: ["string"],
          },
          role: {
            id: 1,
            name: 'employee',
          },
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
        navigate('/vendorlogin') // Move to the next step after saving user data
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
      <div style={{ flex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa', backgroundImage: 'url(images/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ textAlign: 'center', color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Welcome to Our Platform</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto' }}>
            Join us to manage your business efficiently and grow your network. Register now to get started!
          </p>
        </div>
      </div>

      {/* Right Side Registration Form */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ width: '100%', maxWidth: '400px', padding: '20px', marginLeft: '-6px', marginTop: '345px' }}>
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

                {/* Next Button for Step 1 */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                  <button
                    type="button"
                    onClick={nextStep}
                    style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Next
                  </button>
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

                {/* Previous and Next Buttons for Step 2 */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <button
                    type="button"
                    onClick={prevStep}
                    style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Next
                  </button>
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

                {/* Previous and Next Buttons for Step 3 */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <button
                    type="button"
                    onClick={prevStep}
                    style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Next
                  </button>
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
                  <label htmlFor="gstNo" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-account material-icons-name" style={{ marginRight: '10px' }}></i>GST Number
                  </label>
                  <input
                    type="text"
                    name="gstNo"
                    value={formData.gstNo}
                    onChange={handleChange}
                    placeholder="GST Number"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="pincode" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-account material-icons-name" style={{ marginRight: '10px' }}></i>Postal Code
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Postal Code"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>

                {/* Previous and Next Buttons for Step 4 */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <button
                    type="button"
                    onClick={prevStep}
                    style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {step === 5 && (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="phoneNo" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                    <i className="zmdi zmdi-phone" style={{ marginRight: '10px' }}></i>Company Phone
                  </label>
                  <input
                    type="text"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    placeholder="Company Phone"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
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

                {/* Previous and Save Buttons for Step 5 */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <button
                    type="button"
                    onClick={prevStep}
                    style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={storeVendorData}
                    style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Save
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default VendorRegister;