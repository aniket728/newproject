import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { api_url } from '../../helpers/api_helper';

const CompanyDetails = () => {
  const navigate = useNavigate();
  const [companyname, setCompanyName] = useState('');
  const [gstno, setGstNo] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [step, setStep] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

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

  const handleCityChange = (selectedOption) => {
    setCity(selectedOption);
  };

  const handleStateChange = (selectedOption) => {
    setState(selectedOption);
  };

  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${api_url}/api/company`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyname,
          gstno,
          email,
          city: city ? city.value : '',
          state: state ? state.value : '',
          pincode,
          country,
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
        setShowAlert(true);
        setTimeout(() => {
          navigate('/vendorlogin');
        }, 2000);
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
      {showAlert && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          zIndex: 1000,
        }}>
          Company registration completed!
        </div>
      )}
      <div className="container">
        <div className="title">Company Registration</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Company Name</span>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Enter company name"
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">GST Number</span>
                    <input
                      type="text"
                      name="gstNo"
                      placeholder="Enter GST number"
                      onChange={(e) => setGstNo(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter company email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">City</span>
                    <Select
                      options={cityOptions}
                      onChange={handleCityChange}
                      placeholder="Select City"
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">State</span>
                    <Select
                      options={stateOptions}
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
                      onChange={(e) => setPincode(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Country</span>
                    <Select
                      options={countryOptions}
                      onChange={handleCountryChange}
                      placeholder="Select Country"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="button-container">
              {step > 1 && (
                <button type="button" className="btn-previous" onClick={() => setStep(step - 1)}>
                  Previous
                </button>
              )}
              {step < 1 ? (
                <button type="button" className="btn-next" onClick={handleNext}>
                  Next
                </button>
              ) : (
                <button type="submit" className="btn-submit">
                  Save
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <style>
        {`
          .button-container {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          }

          .btn-previous,
          .btn-next,
          .btn-submit {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
          }

          .btn-previous {
            background-color: #6c757d;
            color: white;
          }

          .btn-previous:hover {
            background-color: #5a6268;
          }

          .btn-next {
            background-color: #007bff;
            color: white;
          }

          .btn-next:hover {
            background-color: #0056b3;
          }

          .btn-submit {
            background-color: #28a745;
            color: white;
          }

          .btn-submit:hover {
            background-color: #218838;
          }
        `}
      </style>
    </div>
  );
};

export default CompanyDetails;