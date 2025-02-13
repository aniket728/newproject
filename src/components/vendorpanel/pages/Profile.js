import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api_url } from "../../../helpers/api_helper";

const Profile = () => {
  const navigate = useNavigate();
  const vId = localStorage.getItem("vendorId");
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [vendorData, setVendorData] = useState({});

  const getVendorDetails = async () => {
    if (!vId) {
      alert("No vendor ID found. Please log in.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(`${api_url}/api/users/${vId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);

      if (result.status === 200) {
        setVendorData(result.data); // Set vendor data
      } else {
        setVendorData({});
        alert("Failed to fetch vendor details");
      }
    } catch (error) {
      console.error("Error fetching vendor details:", error);
      alert("An error occurred while fetching vendor details");
    }
  };

  useEffect(() => {
    getVendorDetails();
  }, []);

  useEffect(() => {
    if (vendorData && typeof vendorData === "object" && Object.keys(vendorData).length > 0) {
      setFirstName(vendorData.firstName || "");
      setLastName(vendorData.lastName || "");
      setMobile(vendorData.mobile || "");
      setMail(vendorData.mail || "");
      setAddress(vendorData.address || "");
      setState(vendorData.state || "");
      setCountry(vendorData.country || "");
    }
  }, [vendorData]);

  return (
    <>
      <div className="card-body">
        <div className="d-flex align-items-start align-items-sm-center gap-6 pb-4 border-bottom">
          <h1>Information</h1>
        </div>
      </div>
      
      <div className="card-body pt-4">
        <form id="formAccountSettings" method="POST" onSubmit="return false">
          <div className="row g-6">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                className="form-control"
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter First Name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                className="form-control"
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter Last Name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">E-mail</label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <div className="input-group input-group-merge">
                <span className="input-group-text">US (+1)</span>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="form-control"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">State</label>
              <input
                className="form-control"
                type="text"
                id="state"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Enter State"
              />
            </div>
          </div>
          <div className="mt-6 d-flex justify-content-end">
            <button type="submit" className="btn btn-primary" onClick={() => setVisible(true)}>
              Save changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

    

export default Profile; 