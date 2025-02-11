import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api_url } from '../../../helpers/api_helper';

const Profile = () => {
  const navigate = useNavigate();
  const vId = localStorage.getItem("vendorId");
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [vendorData, setVendorData] = useState({});

  const getVendorDetails = async () => {
    try {
      const response = await fetch(`${api_url}/api/users/${vId}`);
      const result = await response.json();
      console.log(result);
      
      if (result.status === 200) {
        setVendorData(result.vendor);
      } else {
        setVendorData({});
      }
    } catch (error) {
      console.error('Error fetching vendor details:', error);
    }
  };

  useEffect(() => {
    getVendorDetails();
  }, []);

  useEffect(() => {
    if (vendorData) {
      setFirstName(vendorData.firstName || "");
      setLastName(vendorData.lastName || "");
      setMobile(vendorData.mobile || "");
      setEmail(vendorData.email || "");
      setAddress(vendorData.address || "");
      setState(vendorData.state || "");
      setCountry(vendorData.country || "");
    }
  }, [vendorData]);

  const updateVendorData = async () => {
    const formData = new FormData();
    formData.append("id", vendorData._id);
    formData.append("firstname", firstName);
    formData.append("lastname", lastName);
    formData.append("mobile", mobile);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("country", country);
    formData.append("state", state);

    const response = await fetch(`${api_url}/api/users`, {
      method: "POST",
      body: formData
    });
    const result = await response.json();
    if (result.status === 201) {
      setVisible(false);
      alert(result.message);
      navigate("/dashboard/profile");
    } else {
      alert(result.message);
    }
  };

  return (
    <>
      <div className="card-body">
        <div className="d-flex align-items-start align-items-sm-center gap-6 pb-4 border-bottom">
          <img
            src=""
            alt="user-avatar"
            className="d-block w-px-100 h-px-100 rounded"
            id="uploadedAvatar"
          />
          <div className="button-wrapper">
            <label htmlFor="upload" className="btn btn-primary me-3 mb-4" tabIndex="0">
              <span className="d-none d-sm-block">Upload new photo</span>
              <i className="bx bx-upload d-block d-sm-none"></i>
              <input
                type="file"
                id="upload"
                className="account-file-input"
                hidden
                accept="image/png, image/jpeg"
              />
            </label>
            <button type="button" className="btn btn-outline-secondary account-image-reset mb-4">
              <i className="bx bx-reset d-block d-sm-none"></i>
              <span className="d-none d-sm-block">Reset</span>
            </button>

            <div>Allowed JPG, GIF or PNG. Max size of 800K</div>
          </div>
        </div>
      </div>

      <div className="card-body pt-4" style={{ border: "1px solid #dbdddf" }}>
        <form id="formAccountSettings" method="POST" onSubmit={(e) => e.preventDefault()}>
          <div className="row g-6">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                className="form-control"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                className="form-control"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">E-mail</label>
              <input
                className="form-control"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                className="form-control"
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Address</label>
              <input
                className="form-control"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">State</label>
              <input
                className="form-control"
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Country</label>
              <select
                className="form-select"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <button type="button" className="btn btn-primary me-3" onClick={updateVendorData}>
              Save changes
            </button>
            <button type="reset" className="btn btn-outline-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div className="card" style={{ marginTop: "80px" }}>
        <h5 className="card-header">Delete Account</h5>
        <div className="card-body">
          <div className="mb-6 col-12 mb-0">
            <div className="alert alert-warning">
              <h5 className="alert-heading mb-1">Are you sure you want to delete your account?</h5>
              <p className="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
            </div>
          </div>
          <form id="formAccountDeactivation" onSubmit={(e) => e.preventDefault()}>
            <div className="form-check my-8 ms-2">
              <input
                className="form-check-input"
                type="checkbox"
                name="accountActivation"
                id="accountActivation"
              />
              <label className="form-check-label" htmlFor="accountActivation">
                I confirm my account deactivation
              </label>
            </div>
            <button type="submit" className="btn btn-danger deactivate-account" disabled>
              Deactivate Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;