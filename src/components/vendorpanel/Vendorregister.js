import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const VendorRegister = () => {
  
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    "Personal Information",
    "Personal Information",
    "Personal Information",
    "Personal Information",
    "Employment Details",
    "Employment Details",
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
    alert("Form submitted successfully!");
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
                    <input type="text" id="firstName" placeholder="Enter first name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" placeholder="Enter last name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" required>
                      <option value="">Select...</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" id="dob" required />
                  </div>
                </>
              )}
              {index === 1 && (
                <>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="tel" id="mobile" placeholder="Enter mobile number" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="altMobile">Alternative Mobile Number</label>
                    <input type="tel" id="altMobile" placeholder="Enter alternative mobile number" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="whatsapp">WhatsApp Number</label>
                    <input type="tel" id="whatsapp" placeholder="Enter WhatsApp number" />
                  </div>
                </>
              )}
              {index === 2 && (
                <>
                  <div className="form-group">
                    <label htmlFor="maritalStatus">Marital Status</label>
                    <select id="maritalStatus" required>
                      <option value="">Select...</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="userNumber">User Number</label>
                    <input type="text" id="userNumber" placeholder="Enter user number" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nationality">Nationality</label>
                    <input type="text" id="nationality" placeholder="Enter nationality" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" required />
                  </div>
                </>
              )}
              {index === 3 && (
                <>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter username" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <Select
                      id="city"
                      options={indianCities}
                      placeholder="Select city"
                      required
                    />
                  </div>
                  <div className="form-group">
                  <label htmlFor="state">State</label>
  <Select
    id="state"
    options={indianStates}
    placeholder="Select State"
    required
  />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pincode">Pincode</label>
                    <input type="text" id="pincode" placeholder="Enter pincode" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select id="country" required>
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
                    <input type="text" id="jobTitle" placeholder="Enter job title" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="salary">Salary</label>
                    <input type="number" id="salary" placeholder="Enter salary" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="hireDate">Hire Date</label>
                    <input type="date" id="hireDate" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="terminationDate">Termination Date</label>
                    <input type="date" id="terminationDate" />
                  </div>
                </>
              )}
              {index === 5 && (
                <>
                  <div className="form-group">
                    <label htmlFor="trainingPeriod">Training Period</label>
                    <input type="text" id="trainingPeriod" placeholder="Enter training period" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="terminationPeriod">Termination Period</label>
                    <input type="text" id="terminationPeriod" placeholder="Enter termination period" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="remark">Remark</label>
                    <textarea id="remark" rows="3" placeholder="Enter remark"></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="notes">Address</label>
                    <textarea id="notes" rows="3" placeholder="Enter address"></textarea>
                  </div>
                </>
              )}
              {index === 6 && (
                <>
                  
                </>
              )}
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
            >
              <Link to="/thank">Submit</Link>
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorRegister;
