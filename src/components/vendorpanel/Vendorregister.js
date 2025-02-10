import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { api_url } from '../../helpers/api_helper';

const VendorRegister = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    'Personal Information',
    'Personal Information',
    'Personal Information',
    'Personal Information',
    'Employment Details',
    'Employment Details',
  ];

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  const progress = ((currentSection + 1) / sections.length) * 100;

  // Example list of Indian cities
  const indianCities = [
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'ahmedabad', label: 'Ahmedabad' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'kolkata', label: 'Kolkata' },
    { value: 'surat', label: 'Surat' },
    { value: 'pune', label: 'Pune' },
    { value: 'jaipur', label: 'Jaipur' },
    { value: 'lucknow', label: 'Lucknow' },
    { value: 'kanpur', label: 'Kanpur' },
    { value: 'nagpur', label: 'Nagpur' },
    { value: 'indore', label: 'Indore' },
    { value: 'thane', label: 'Thane' },
    { value: 'bhopal', label: 'Bhopal' },
    { value: 'visakhapatnam', label: 'Visakhapatnam' },
    { value: 'patna', label: 'Patna' },
    { value: 'vadodara', label: 'Vadodara' },
    { value: 'ghaziabad', label: 'Ghaziabad' },
    { value: 'ludhiana', label: 'Ludhiana' },
    { value: 'agra', label: 'Agra' },
    { value: 'nashik', label: 'Nashik' },
    { value: 'faridabad', label: 'Faridabad' },
    { value: 'meerut', label: 'Meerut' },
    { value: 'rajkot', label: 'Rajkot' },
    { value: 'kalyan-dombivli', label: 'Kalyan-Dombivli' },
    { value: 'vasai-virar', label: 'Vasai-Virar' },
    { value: 'varanasi', label: 'Varanasi' },
    { value: 'srinagar', label: 'Srinagar' },
    { value: 'aurangabad', label: 'Aurangabad' },
    { value: 'dhanbad', label: 'Dhanbad' },
    { value: 'amritsar', label: 'Amritsar' },
    { value: 'navi-mumbai', label: 'Navi Mumbai' },
    { value: 'allahabad', label: 'Allahabad' },
    { value: 'howrah', label: 'Howrah' },
    { value: 'ranchi', label: 'Ranchi' },
    { value: 'jabalpur', label: 'Jabalpur' },
    { value: 'gwalior', label: 'Gwalior' },
    { value: 'coimbatore', label: 'Coimbatore' },
    { value: 'vijayawada', label: 'Vijayawada' },
    { value: 'jodhpur', label: 'Jodhpur' },
    { value: 'madurai', label: 'Madurai' },
    { value: 'raipur', label: 'Raipur' },
    { value: 'kota', label: 'Kota' },
    { value: 'guwahati', label: 'Guwahati' },
    { value: 'chandigarh', label: 'Chandigarh' },
    { value: 'solapur', label: 'Solapur' },
    { value: 'hubli-dharwad', label: 'Hubli-Dharwad' },
    { value: 'bareilly', label: 'Bareilly' },
    { value: 'moradabad', label: 'Moradabad' },
    { value: 'mysore', label: 'Mysore' },
    { value: 'tiruchirappalli', label: 'Tiruchirappalli' },
    { value: 'tiruppur', label: 'Tiruppur' },
    { value: 'gurgaon', label: 'Gurgaon' },
    { value: 'aligarh', label: 'Aligarh' },
    { value: 'jalandhar', label: 'Jalandhar' },
    { value: 'bhubaneswar', label: 'Bhubaneswar' },
    { value: 'salem', label: 'Salem' },
    { value: 'mira-bhayandar', label: 'Mira-Bhayandar' },
    { value: 'warangal', label: 'Warangal' },
    { value: 'guntur', label: 'Guntur' },
    { value: 'bhiwandi', label: 'Bhiwandi' },
    { value: 'saharanpur', label: 'Saharanpur' },
    { value: 'gorakhpur', label: 'Gorakhpur' },
    { value: 'bikaner', label: 'Bikaner' },
    { value: 'amravati', label: 'Amravati' },
    { value: 'noida', label: 'Noida' },
    { value: 'jamshedpur', label: 'Jamshedpur' },
    { value: 'bhilai', label: 'Bhilai' },
    { value: 'cuttack', label: 'Cuttack' },
    { value: 'firozabad', label: 'Firozabad' },
    { value: 'kochi', label: 'Kochi' },
    { value: 'nellore', label: 'Nellore' },
    { value: 'bhavnagar', label: 'Bhavnagar' },
    { value: 'dehradun', label: 'Dehradun' },
    { value: 'durgapur', label: 'Durgapur' },
    { value: 'asansol', label: 'Asansol' },
    { value: 'rourkela', label: 'Rourkela' },
    { value: 'nanded', label: 'Nanded' },
    { value: 'kolhapur', label: 'Kolhapur' },
    { value: 'ajmer', label: 'Ajmer' },
    { value: 'akola', label: 'Akola' },
    { value: 'gulbarga', label: 'Gulbarga' },
    { value: 'jamnagar', label: 'Jamnagar' },
    { value: 'ujjain', label: 'Ujjain' },
    { value: 'loni', label: 'Loni' },
    { value: 'siliguri', label: 'Siliguri' },
    { value: 'jhansi', label: 'Jhansi' },
  ];

  // Add more cities as needed

  // Example list of Indian states

  const indianStates = [
    { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
    { value: 'arunachal-pradesh', label: 'Arunachal Pradesh' },
    { value: 'assam', label: 'Assam' },
    { value: 'bihar', label: 'Bihar' },
    { value: 'chhattisgarh', label: 'Chhattisgarh' },
    { value: 'goa', label: 'Goa' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'himachal-pradesh', label: 'Himachal Pradesh' },
    { value: 'jharkhand', label: 'Jharkhand' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'manipur', label: 'Manipur' },
    { value: 'meghalaya', label: 'Meghalaya' },
    { value: 'mizoram', label: 'Mizoram' },
    { value: 'nagaland', label: 'Nagaland' },
    { value: 'odisha', label: 'Odisha' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'sikkim', label: 'Sikkim' },
    { value: 'tamil-nadu', label: 'Tamil Nadu' },
    { value: 'telangana', label: 'Telangana' },
    { value: 'tripura', label: 'Tripura' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'uttarakhand', label: 'Uttarakhand' },
    { value: 'west-bengal', label: 'West Bengal' },
  ];

  // Add more states as needed
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [altMobile, setAltMobile] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [pincode, setPincode] = useState('');
  const [country, setCountry] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [hireDate, setHireDate] = useState('');
  const [terminationDate, setTerminationDate] = useState('');
  const [trainingPeriod, setTrainingPeriod] = useState('');
  const [terminationPeriod, setTerminationPeriod] = useState('');
  const [remark, setRemark] = useState('');
  const [address, setAddress] = useState('');
  const storeVendorData = async () => {
    try {
      const response = await fetch(`${api_url}/api/users`, {
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
          dob,
          altMobile,
          whatsapp,
          maritalStatus,
          userNumber,
          nationality,
          username,
          city: city ? city.value : '',
          state: state ? state.value : '',
          pincode,
          country,
          jobTitle,
          salary,
          hireDate,
          terminationDate,
          trainingPeriod,
          terminationPeriod,
          remark,
          address,
          role: {
            id: 1,
            name: 'employee',
          },
        }),
      });

      console.log('Response Status:', response.status);

      // Ensure response is JSON before parsing
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
        navigate('/Vendorlogin');
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
        <h1>Registration Form</h1>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <form id="cardiologyForm" onSubmit={handleSubmit}>
          {sections.map((section, index) => (
            <div
              key={index}
              className={`form-section ${index === currentSection ? 'active' : ''}`}
              data-section={index + 1}
            >
              <h2 className="section-title">{section}</h2>
              {index === 0 && (
                <>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter first name"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter last name"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" onChange={(e) => setGender(e.target.value)} required>
                      <option value="">Select...</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" id="dob" onChange={(e) => setDob(e.target.value)} required />
                  </div>
                </>
              )}
              {index === 1 && (
                <>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                      type="tel"
                      id="mobile"
                      placeholder="Enter mobile number"
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="altMobile">Alternative Mobile Number</label>
                    <input
                      type="tel"
                      id="altMobile"
                      placeholder="Enter alternative mobile number"
                      onChange={(e) => setAltMobile(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="whatsapp">WhatsApp Number</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      placeholder="Enter WhatsApp number"
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </div>
                </>
              )}
              {index === 2 && (
                <>
                  <div className="form-group">
                    <label htmlFor="maritalStatus">Marital Status</label>
                    <select
                      id="maritalStatus"
                      onChange={(e) => setMaritalStatus(e.target.value)}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="userNumber">User Number</label>
                    <input
                      type="text"
                      id="userNumber"
                      placeholder="Enter user number"
                      onChange={(e) => setUserNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nationality">Nationality</label>
                    <input
                      type="text"
                      id="nationality"
                      placeholder="Enter nationality"
                      onChange={(e) => setNationality(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </>
              )}
              {index === 3 && (
                <>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter username"
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <Select
                      options={indianCities}
                      placeholder="Select city"
                      onChange={(selectedOption) => setCity(selectedOption)} // Ensure it stores an object
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <Select
                      options={indianStates}
                      placeholder="Select state"
                      onChange={(selectedOption) => setState(selectedOption)} // Ensure it stores an object
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="text"
                      id="pincode"
                      placeholder="Enter pincode"
                      onChange={(e) => setPincode(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select id="country" onChange={(e) => setCountry(e.target.value)} required>
                      <option value="">Select...</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      {/* Add more countries as needed */}
                    </select>
                  </div>
                </>
              )}
              {index === 4 && (
                <>
                  <div className="form-group">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input
                      type="text"
                      id="jobTitle"
                      placeholder="Enter job title"
                      onChange={(e) => setJobTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="salary">Salary</label>
                    <input
                      type="number"
                      id="salary"
                      placeholder="Enter salary"
                      onChange={(e) => setSalary(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="hireDate">Hire Date</label>
                    <input
                      type="date"
                      id="hireDate"
                      onChange={(e) => setHireDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="terminationDate">Termination Date</label>
                    <input
                      type="date"
                      id="terminationDate"
                      onChange={(e) => setTerminationDate(e.target.value)}
                    />
                  </div>
                </>
              )}
              {index === 5 && (
                <>
                  <div className="form-group">
                    <label htmlFor="trainingPeriod">Training Period</label>
                    <input
                      type="text"
                      id="trainingPeriod"
                      placeholder="Enter training period"
                      onChange={(e) => setTrainingPeriod(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="terminationPeriod">Termination Period</label>
                    <input
                      type="text"
                      id="terminationPeriod"
                      placeholder="Enter termination period"
                      onChange={(e) => setTerminationPeriod(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="remark">Remark</label>
                    <textarea
                      id="remark"
                      rows="3"
                      placeholder="Enter remark"
                      onChange={(e) => setRemark(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="notes">Address</label>
                    <textarea
                      id="notes"
                      rows="3"
                      placeholder="Enter address"
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                  </div>
                </>
              )}
              {index === 6 && <></>}
            </div>
          ))}
          <div className="buttons">
            <button
              type="button"
              className="btn-prev"
              id="prevBtn"
              onClick={handlePrev}
              style={{ display: currentSection === 0 ? 'none' : 'block' }}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn-next"
              id="nextBtn"
              onClick={handleNext}
              style={{ display: currentSection === sections.length - 1 ? 'none' : 'block' }}
            >
              Next
            </button>
            <button
              type="submit"
              className="btn-submit"
              id="submitBtn"
              style={{ display: currentSection === sections.length - 1 ? 'block' : 'none' }}
              onClick={() => storeVendorData()}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorRegister;
