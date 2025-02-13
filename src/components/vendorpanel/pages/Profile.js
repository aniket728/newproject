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

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

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
  }, [vId]); // Add vId as a dependency

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
      <div className="card-body" style={{ width: "100%", padding: "20px" }}>
        <div className="d-flex align-items-start align-items-sm-center gap-6 pb-4 border-bottom">
          <h1 style={{ fontSize: "24px", fontWeight: "bold", fontStyle: "italic" }}>Information</h1>
        </div>
      </div>

      <div className="card-body pt-4" style={{ border: "1px solid #dbdddf", width: "100%", padding: "20px" }}>
        <form id="formAccountSettings" method="POST" onSubmit={(e) => e.preventDefault()}>
          <div className="row g-6">
            <div className="col-md-6">
              <label className="form-label" style={{ fontSize: "16px", fontWeight: "600", fontStyle: "normal" }}>First Name</label>
              <input
                className="form-control"
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter First Name"
                style={{ fontSize: "14px", fontWeight: "400", fontStyle: "normal", width: "100%" }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label" style={{ fontSize: "16px", fontWeight: "600", fontStyle: "normal" }}>Last Name</label>
              <input
                className="form-control"
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter Last Name"
                style={{ fontSize: "14px", fontWeight: "400", fontStyle: "normal", width: "100%" }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label" style={{ fontSize: "16px", fontWeight: "600", fontStyle: "normal" }}>E-mail</label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                placeholder="Enter Email"
                style={{ fontSize: "14px", fontWeight: "400", fontStyle: "normal", width: "100%" }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="phoneNumber" style={{ fontSize: "16px", fontWeight: "600", fontStyle: "normal" }}>Phone Number</label>
              <input
                className="form-control"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter Phone Number"
                style={{ fontSize: "14px", fontWeight: "400", fontStyle: "normal", width: "100%" }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="address" className="form-label" style={{ fontSize: "16px", fontWeight: "600", fontStyle: "normal" }}>Address</label>
              <input
                className="form-control"
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address"
                style={{ fontSize: "14px", fontWeight: "400", fontStyle: "normal", width: "100%" }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="state" className="form-label" style={{ fontSize: "16px", fontWeight: "600", fontStyle: "normal" }}>State</label>
              <input
                className="form-control"
                type="text"
                id="state"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Enter State"
                style={{ fontSize: "14px", fontWeight: "400", fontStyle: "normal", width: "100%" }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="country" style={{ fontSize: "16px", fontWeight: "600", fontStyle: "normal" }}>Country</label>
              <input
                className="form-control"
                type="text"
                id="country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter Country"
                style={{ fontSize: "14px", fontWeight: "400", fontStyle: "normal", width: "100%" }}
              />
            </div>
          </div>
          <div className="mt-6 d-flex justify-content-end">
            <button type="submit" className="btn btn-primary" style={{ fontSize: "16px", fontWeight: "600", fontStyle: "normal" }}>
              Save changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;