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
      <div className="card-body">
        <div className="d-flex align-items-start align-items-sm-center gap-6 pb-4 border-bottom">
          <img
            src={vendorData.profileImage || "default-image-url"}
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
              <div>{firstName}</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <div>{lastName}</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="mail" className="form-label">E-mail</label>
              <div>{mail}</div>
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
              <div>{mobile}</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="address" className="form-label">Address</label>
              <div>{address}</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="state" className="form-label">State</label>
              <div>{state}</div>
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="country">Country</label>
              <div>{country}</div>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="btn btn-primary me-3"
              onClick={() => setVisible(true)}
            >
              Edit Profile
            </button>
            <button type="reset" className="btn btn-outline-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;