import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { api_url } from '../../helpers/api_helper';

const VendorRegister = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [nationality, setNationality] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  const maritalStatusOptions = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married' },
    { value: 'divorced', label: 'Divorced' },
    { value: 'widowed', label: 'Widowed' },
  ];

  const cityOptions = [
    { value: 'new-york', label: 'New York' },
    { value: 'los-angeles', label: 'Los Angeles' },
    { value: 'chicago', label: 'Chicago' },
    // Add more cities as needed
  ];

  const stateOptions = [
    { value: 'california', label: 'California' },
    { value: 'texas', label: 'Texas' },
    { value: 'florida', label: 'Florida' },
    // Add more states as needed
  ];

  const countryOptions = [
    { value: 'usa', label: 'United States' },
    { value: 'canada', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    // Add more countries as needed
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${api_url}/api/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile,
          email,
          password,
          firstName,
          lastName,
          gender,
          maritalStatus,
          dateOfBirth,
          nationality,
          username,
          city: city ? city.value : '',
          state: state ? state.value : '',
          pincode,
          country,
          address,
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
        alert(result.message || 'User created successfully.');
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
    <div className="ragister">
      <div className="container">
        <div className="title">Registration</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">First Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Last Name</span>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Date of Birth</span>
                <input
                  type="date"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Gender</span>
                <Select
                  options={genderOptions}
                  onChange={(selectedOption) => setGender(selectedOption.value)}
                  placeholder="Select Gender"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Marital Status</span>
                <Select
                  options={maritalStatusOptions}
                  onChange={(selectedOption) => setMaritalStatus(selectedOption.value)}
                  placeholder="Select Marital Status"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">City</span>
                <Select
                  options={cityOptions}
                  onChange={(selectedOption) => setCity(selectedOption)}
                  placeholder="Select City"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">State</span>
                <Select
                  options={stateOptions}
                  onChange={(selectedOption) => setState(selectedOption)}
                  placeholder="Select State"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Country</span>
                <Select
                  options={countryOptions}
                  onChange={(selectedOption) => setCountry(selectedOption.value)}
                  placeholder="Select Country"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input
                  type="text"
                  placeholder="Enter your address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Nationality</span>
                <input
                  type="text"
                  placeholder="Enter your nationality"
                  onChange={(e) => setNationality(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Pincode</span>
                <input
                  type="text"
                  placeholder="Enter your pincode"
                  onChange={(e) => setPincode(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="button-container">
              <button type="submit" className="btn-submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <style>
        {`
          .ragister .container {
            max-width: 1000px;
            width: 100%;
            background: #fff;
            padding: 25px 30px;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            animation: fadeIn 1s ease-in-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .ragister .container .title {
            font-size: 25px;
            font-weight: 500;
            position: relative;
            color: #333;
          }

          .ragister .container .title::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 3px;
            width: 30px;
            border-radius: 5px;
            background: linear-gradient(135deg, #71b7e6, #9b59b6);
          }

          .ragister .content form .user-details {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 20px 0 12px 0;
          }

          form .user-details .input-box {
            margin-bottom: 15px;
            width: 100%; /* Full width on small screens */
          }

          @media (min-width: 768px) {
            form .user-details .input-box {
              width: calc(50% - 20px); /* Two columns on medium screens */
            }
          }

          @media (min-width: 992px) {
            form .user-details .input-box {
              width: calc(33.33% - 20px); /* Three columns on large screens */
            }
          }

          form .user-details .input-box .details {
            display: block;
            font-weight: 500;
            margin-bottom: 5px;
            color: #555;
          }

          form .user-details .input-box input,
          form .user-details .input-box .react-select__control {
            height: 45px;
            width: 100%;
            outline: none;
            font-size: 16px;
            border-radius: 5px;
            padding-left: 15px;
            border: 1px solid #ccc;
            border-bottom-width: 2px;
            transition: all 0.3s ease;
          }

          form .user-details .input-box input:focus,
          form .user-details .input-box input:valid,
          form .user-details .input-box .react-select__control--is-focused {
            border-color: #9b59b6;
            box-shadow: 0 0 8px rgba(155, 89, 182, 0.3);
          }

          .button-container {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
          }

          .btn-submit {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease, transform 0.2s ease;
            background-color: #28a745;
            color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .btn-submit:hover {
            background-color: #218838;
            transform: translateY(-2px);
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
          }

          .btn-submit:active {
            transform: translateY(0);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </div>
  );
};

export default VendorRegister;