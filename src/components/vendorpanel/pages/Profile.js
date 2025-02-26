import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api_url } from '../../../helpers/api_helper';

const Profile = () => {
  const navigate = useNavigate();
  const vId = localStorage.getItem("userId");
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [vendorData, setVendorData] = useState(null);

  const getVendorDetails = async () => {
    try {
      const response = await fetch(`${api_url}/api/user/${vId}`); // Fetch user data by userId
      const result = await response.json();
      console.log("API Response:", result); // Debugging

      if (result.status === 200 && result.user) {
        setVendorData(result.user); // Set vendor data if the response is successful
      } else {
        setVendorData(null); // Set to null if no data is found
        console.error("Failed to fetch vendor details:", result.message);
      }
    } catch (error) {
      console.error("Error fetching vendor details:", error);
      setVendorData(null); // Set to null on error
    }
  };

  useEffect(() => {
    getVendorDetails();
  }, []);

  useEffect(() => {
    if (vendorData) {
      setName(vendorData.name || "");
      setMobile(vendorData.mobile || "");
      setEmail(vendorData.email || "");
      setImage(vendorData.image || "");
    }
  }, [vendorData]);

  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2 p-3">
      <span className="font-bold white-space-nowrap">Edit Profile</span>
    </div>
  );

  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
              <div className="row g-0">
                <div className="col-md-4 gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <img
                    src={image || "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"}
                    alt="Avatar"
                    className="img-fluid my-5"
                    style={{ width: '80px' }}
                  />
                  <h5>{name}</h5>
                  <p>Web Designer</p>
                  <i className="far fa-edit mb-5"></i>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">{email}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Phone</h6>
                        <p className="text-muted">{mobile}</p>
                      </div>
                    </div>
                    <h6>Projects</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Recent</h6>
                        <p className="text-muted">Lorem ipsum</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Most Viewed</h6>
                        <p className="text-muted">Dolor sit amet</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start">
                      <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                      <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                      <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;