import React, { useState } from 'react';

const Vendorregister = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    'Personal Information',
    'Insurance Details',
    'Medical History',
    'Heart-Related Symptoms',
    'Lifestyle Factors',
    'Previous Cardiac Tests or Procedures'
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

  return (
    <div style={{ background: '#f8f9fa', color: '#2d3436', lineHeight: 1.6, padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#647dee', marginBottom: '2rem', fontSize: '2.5rem' }}>Cardiology Intake Form</h1>
        <div style={{ width: '100%', height: '5px', background: '#eee', marginBottom: '2rem', borderRadius: '10px', overflow: 'hidden' }}>
          <div className="progress" style={{ width: `${((currentSection + 1) / sections.length) * 100}%`, height: '100%', background: 'linear-gradient(to right, #647dee, #7f53ac)', transition: 'width 0.3s ease' }}></div>
        </div>
        <form id="cardiologyForm" onSubmit={handleSubmit}>
          {currentSection === 0 && (
            <div className="form-section active" style={{ display: 'block', animation: 'fadeIn 0.5s ease' }}>
              <h2 style={{ color: '#647dee', margin: '1.5rem 0', paddingBottom: '0.5rem', borderBottom: '2px solid #647dee' }}>Personal Information</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="fullName">First Name</label>
                <input type="text" id="fullName" required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', transition: 'border-color 0.3s ease' }} />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', transition: 'border-color 0.3s ease' }} />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', transition: 'border-color 0.3s ease' }} />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="email">Email</label>
                <input type="email" id="email" required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', transition: 'border-color 0.3s ease' }} />
              </div>
            </div>
          )}

          {currentSection === 1 && (
            <div className="form-section" style={{ display: 'block', animation: 'fadeIn 0.5s ease' }}>
              <h2 style={{ color: '#647dee', margin: '1.5rem 0', paddingBottom: '0.5rem', borderBottom: '2px solid #647dee' }}>Insurance Details</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="provider">Insurance Provider</label>
                <input type="text" id="provider" required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', transition: 'border-color 0.3s ease' }} />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="policyNumber">Policy Number</label>
                <input type="text" id="policyNumber" required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', transition: 'border-color 0.3s ease' }} />
              </div>
            </div>
          )}

          {currentSection === 2 && (
            <div className="form-section" style={{ display: 'block', animation: 'fadeIn 0.5s ease' }}>
              <h2 style={{ color: '#647dee', margin: '1.5rem 0', paddingBottom: '0.5rem', borderBottom: '2px solid #647dee' }}>Medical History</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Known Medical Conditions</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" id="hypertension" />
                    <label htmlFor="hypertension">Hypertension</label>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" id="diabetes" />
                    <label htmlFor="diabetes">Diabetes</label>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" id="cholesterol" />
                    <label htmlFor="cholesterol">High Cholesterol</label>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="familyHistory">Family History of Heart Disease</label>
                <select id="familyHistory" required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', transition: 'border-color 0.3s ease' }}>
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="medications">Current Medications</label>
                <textarea id="medications" rows="3" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', transition: 'border-color 0.3s ease' }}></textarea>
              </div>
            </div>
          )}

          {currentSection === 3 && (
            <div className="form-section" style={{ display: 'block', animation: 'fadeIn 0.5s ease' }}>
              <h2 style={{ color: '#647dee', margin: '1.5rem 0', paddingBottom: '0.5rem', borderBottom: '2px solid #647dee' }}>Heart-Related Symptoms</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Current Symptoms</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" id="chestPain" />
                    <label htmlFor="chestPain">Chest Pain</label>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" id="shortnessBreath" />
                    <label htmlFor="shortnessBreath">Shortness of Breath</label>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" id="irregularHeartbeat" />
                    <label htmlFor="irregularHeartbeat">Irregular Heartbeat</label>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="otherSymptoms">Other Symptoms</label>
                <textarea id="otherSymptoms" rows="3" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', transition: 'border-color 0.3s ease' }}></textarea>
              </div>
            </div>
          )}

          {currentSection === 4 && (
            <div className="form-section" style={{ display: 'block', animation: 'fadeIn 0.5s ease' }}>
              <h2 style={{ color: '#647dee', margin: '1.5rem 0', paddingBottom: '0.5rem', borderBottom: '2px solid #647dee' }}>Lifestyle Factors</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="smokingStatus">Smoking Status</label>
                <select id="smokingStatus" required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', transition: 'border-color 0.3s ease' }}>
                  <option value="">Select...</option>
                  <option value="current">Current Smoker</option>
                  <option value="former">Former Smoker</option>
                  <option value="never">Never Smoked</option>
                </select>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="alcohol">Alcohol Consumption</label>
                <select id="alcohol" required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', transition: 'border-color 0.3s ease' }}>
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          )}

          {currentSection === 5 && (
            <div className="form-section" style={{ display: 'block', animation: 'fadeIn 0.5s ease' }}>
              <h2 style={{ color: '#647dee', margin: '1.5rem 0', paddingBottom: '0.5rem', borderBottom: '2px solid #647dee' }}>Previous Cardiac Tests or Procedures</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Previous Tests</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" id="ekg" />
                    <label htmlFor="ekg">EKG</label>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" id="stressTest" />
                    <label htmlFor="stressTest">Stress Test</label>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" id="echocardiogram" />
                    <label htmlFor="echocardiogram">Echocardiogram</label>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="surgeries">Previous Surgeries or Interventions</label>
                <select id="surgeries" required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', transition: 'border-color 0.3s ease' }}>
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
            <button type="button" className="btn-prev" id="prevBtn" style={{ display: currentSection === 0 ? 'none' : 'block', padding: '0.8rem 2rem', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer', transition: 'transform 0.2s ease, background 0.3s ease', background: '#eee', color: '#2d3436' }} onClick={handlePrev}>Previous</button>
            <button type="button" className="btn-next" id="nextBtn" style={{ display: currentSection === sections.length - 1 ? 'none' : 'block', padding: '0.8rem 2rem', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer', transition: 'transform 0.2s ease, background 0.3s ease', background: '#647dee', color: 'white' }} onClick={handleNext}>Next</button>
            <button type="submit" className="btn-submit" id="submitBtn" style={{ display: currentSection === sections.length - 1 ? 'block' : 'none', padding: '0.8rem 2rem', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer', transition: 'transform 0.2s ease, background 0.3s ease', background: '#55efc4', color: 'white' }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Vendorregister;